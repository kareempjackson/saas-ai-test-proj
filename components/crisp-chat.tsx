"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c90a354f-afdf-4f2a-832f-0c24eb603b45");
  }, []);

  return null;
};
