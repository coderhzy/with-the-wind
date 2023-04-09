import React, { memo } from "react";
import { useRecoilState } from "recoil";
import navAtom from "@/store";
import Link from "next/link";

const NavBar = memo(() => {
  const [nav, setNav] = useRecoilState(navAtom);

  return (
    <div className="flex h-full w-auto flex-row items-center justify-center gap-[24px] mb:hidden">
      {nav.map((item, index) => {
        return (
          <div key={item.name}>
            <Link href={item.path}>
              <span className={"hover:text-[#0066ff] dark:text-gray-100"}>
                {item.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
});

export default NavBar;
NavBar.displayName = "NavBar";
