"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "";
  const query = searchParams.get("query") || "";
  return <React.Fragment key={page + query}>{children}</React.Fragment>;
}
