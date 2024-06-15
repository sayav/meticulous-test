"use client";

import { useState } from "react";
import { increment } from "../actions";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const newCount = await increment(count);
    setCount(newCount);
  };

  return (
    <button style={{ width: 40, background: "red" }} onClick={handleClick}>
      {count}
    </button>
  );
}
