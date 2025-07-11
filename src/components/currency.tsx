"use client";

import { useEffect, useState } from "react";

import { priceFormatter } from "@/lib/utils";

interface CurrencyProps {
  value: string | number;
}

export const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
};
