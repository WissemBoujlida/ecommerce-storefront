"use client";

import { PreviewModal } from "@/components/preview-modal";
import { useEffect, useState } from "react";

export const PreviewModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};
