import { ContentType } from "@/types/frontmatters";
import { readFileSync, readdirSync } from "fs";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

// 获取文件夹下的文件名
export const getFiles = (type: ContentType) => {
  return readdirSync(join(process.cwd(), "src", "contents", type));
};

export async function getFileBySlug(type: ContentType, slug: string) {
  const mdxSource = slug
    ? readFileSync(
        join(process.cwd(), "src", "contents", type, `${slug}.mdx`),
        "utf8"
      )
    : readFileSync(
        join(process.cwd(), "src", "contents", `${type}.mdx`),
        "utf8"
      );

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options, _) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["hash-anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: mdxSource.split(/\s+/gu).length,
      readingTime: readingTime(mdxSource),
      slug: slug || null,
      ...frontmatter,
    },
  };
}
