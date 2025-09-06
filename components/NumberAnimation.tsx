"use client";

import { useEffect, useState } from "react";

const DEV_MAP = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const toDevanagari = (input: string | number) =>
  String(input).replace(/\d/g, (d) => DEV_MAP[Number(d)]);

const NumberAnimation = ({ start, end }: { start: number; end: number }) => {
  const [value, setValue] = useState<number>(start);

  useEffect(() => {
    setValue(end);
  }, [end]);

  return <span>{toDevanagari(value)}</span>;
};

export default NumberAnimation;
