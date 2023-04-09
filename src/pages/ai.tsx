import React, { memo } from "react";

const Ai = memo(() => {
  return (
    <div>
      <iframe
        className="h-[600px] w-[800px] mb:w-[500px]"
        src={"https://chatgpt-gold-alpha.vercel.app/"}
      ></iframe>
    </div>
  );
});

export default Ai;
Ai.displayName = "Ai";
