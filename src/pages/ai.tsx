import React, { memo } from "react";

const Ai = memo(() => {
  return (
    <div>
      <iframe
        className="h-screen w-screen"
        src={"https://chatgpt-gold-alpha.vercel.app/"}
      ></iframe>
    </div>
  );
});

export default Ai;
Ai.displayName = "Ai";
