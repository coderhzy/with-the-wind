import { IoAccessibilitySharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { atom } from "recoil";

export const projectsAtom = atom({
  key: "PROJECTS_ATOM",
  default: [
    {
      category: "Front-around",
      child: [
        {
          title: "monorepo",
          description:
            "一个monorepo的小demo，配合https://www.codehzy.cn/blog/04_quick-monorepo博文进行学习",
          link: "https://github.com/codehzy/monorepo",
          icon: <IoAccessibilitySharp />,
        },
      ],
    },
    {
      category: "Personal-notes",
      child: [
        {
          title: "MarkLife-Obsidian",
          description: "一个使用Obsidian维护的记录个人工作和生活的笔记",
          link: "https://github.com/codehzy/marklife",
          icon: <CgNotes />,
        },
      ],
    },
  ],
});
