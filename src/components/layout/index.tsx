import React, { memo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Plum from "./Plum";

interface IProps {
  children: React.ReactNode;
}

const Layout = memo(({ children }: IProps) => {
  return (
    <>
      <Header></Header>
      <div className="layout">
        <div className={"mx-8 mb:mx-4"}>
          {children}
          <Footer />
        </div>
      </div>
      <Plum />
    </>
  );
});

export default Layout;
Layout.displayName = "Layout";
