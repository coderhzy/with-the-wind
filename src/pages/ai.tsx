import React, { memo } from "react";
import Link from "next/link";
import { Button } from "antd";

const Ai = memo(() => {
  return (
    <div>
      <Link href={"https://chatgpt-gold-alpha.vercel.app/"} target={"_blank"}>
        <Button>去聊天</Button>
      </Link>
    </div>
  );
});

export default Ai;
Ai.displayName = "Ai";
