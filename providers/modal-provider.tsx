"use client";

import PreviewModal from "@/app/components/preview-modal";
import { useEffect, useState } from "react";

// ! ovo nije contextProvider ili sl.
// ! to je samo wrapper da testiram dali sam u window pomoću useEffect
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <PreviewModal />;
};

export default ModalProvider;
