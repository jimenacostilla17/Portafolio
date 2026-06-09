import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="
      fixed
      w-8
      h-8
      border
      border-black
      rounded-full
      pointer-events-none
      z-[9999]
      -translate-x-1/2
      -translate-y-1/2
      transition-transform
      duration-100
      "
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}