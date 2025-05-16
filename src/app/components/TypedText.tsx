"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorAfterTyping?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 700,
  startDelay = 300,
  loop = false,
  className = "",
  showCursor = true,
  hideCursorAfterTyping = false,
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        startDelay,
        loop,
        cursorChar: "|",
        showCursor,
        autoInsertCss: true,
        onComplete: (self) => {
          if (hideCursorAfterTyping) {
            const cursor = document.querySelector(".typed-cursor");
            if (cursor) {
              cursor.classList.add("typed-cursor--hide");
            }
          }
        },
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [
    strings,
    typeSpeed,
    backSpeed,
    backDelay,
    startDelay,
    loop,
    showCursor,
    hideCursorAfterTyping,
  ]);

  return <span className={className} ref={el} />;
};

export default TypedText;
