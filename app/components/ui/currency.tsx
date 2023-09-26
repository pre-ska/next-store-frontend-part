"use client";

import { useEffect, useState } from "react";
import { CurrencyProps } from "@/types";

const formatter = new Intl.NumberFormat("DE", {
  style: "currency",
  currency: "EUR",
});

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
