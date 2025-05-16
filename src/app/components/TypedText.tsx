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
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 700,
  startDelay = 300,
  loop = false,
  className = "",
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
        showCursor: true,
        autoInsertCss: true,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop]);

  return <span className={className} ref={el} />;
};

export default TypedText;
