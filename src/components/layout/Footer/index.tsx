import React, { memo } from "react";
import Link from "next/link";

const Footer = memo(() => {
  return (
    <footer className="my-16 text-right text-[#b3b3b3]">
      <section className="flex flex-col items-end">
        <div>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noreferrer"
            target="_blank"
          >
            CC BY-NC-SA 4.0
          </a>{" "}
          {new Date().getFullYear()}
          <a
            href="https://github.com/coderhzy/with-the-wind"
            target={"_blank"}
            className="pl-1"
            rel="noreferrer"
          >
            @ He Zi Yang
          </a>
        </div>
        <Link href={"https://beian.miit.gov.cn/"}>苏ICP备20030191号</Link>
      </section>
    </footer>
  );
});

export default Footer;
Footer.displayName = "Footer";
