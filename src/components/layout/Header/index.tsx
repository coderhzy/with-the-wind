import React, { memo, useMemo } from "react";
import NavBar from "../NavBar";
import clsx from "clsx";
import { useWindowScroll } from "react-use";

interface IProps {
  children?: React.ReactNode;
}

const Header = memo(({ children }: IProps) => {
  const docScroll = useWindowScroll();

  const isDocHover = useMemo(() => {
    return docScroll.y > 0;
  }, [docScroll]);

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 w-full bg-transparent",
        isDocHover &&
          "solid border-b border-opacity-[0.12] bg-white bg-opacity-[98] backdrop-blur-[40px]",
        "dark:border-b dark: border-black dark:bg-[#215c8c]"
      )}
    >
      <section className="layout">
        <div
          className={
            "mx-8 flex h-[60px] items-center justify-between leading-[60px]"
          }
        >
          <NavBar></NavBar>
        </div>
      </section>
    </div>
  );
});

export default Header;
Header.displayName = "Header";
