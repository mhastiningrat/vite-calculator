import React from "react";

function Button({text}) {
  return (
    <button
      className="bg-black text-green-300 border-2 border-green-400
         px-8 py-2 mt-4 rounded-md
         shadow-[0_0_10px_#00ff00]
         hover:bg-green-200 hover:border-green-200 hover:text-black
         transition-all duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
