"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  direction: "left" | "right";
  onClickAction: () => void;
  disabled?: boolean;
};

export default function SliderButton({
  direction,
  onClickAction,
  disabled,
}: Props) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={!disabled ? onClickAction : undefined}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-10 
        ${isLeft ? "left-2 md:left-0" : "right-2 md:right-0"} 
        p-3 rounded-full shadow-lg transition-all duration-300

        ${
          disabled
            ? "bg-gray-300 text-gray-400 cursor-not-allowed opacity-50"
            : "bg-white/80 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
        }
      `}
    >
      {isLeft ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}
