import { atom } from "recoil";

const navAtom = atom({
  key: "NAV_ATOM", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "AI",
      path: "/ai",
    },
  ], // default value (aka initial value)
});

export default navAtom;
