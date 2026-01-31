"use client";

import dynamic from "next/dynamic";

// Dynamically import MdxWrapper with SSR disabled to avoid React 19 SSR compatibility issues
const MdxWrapper = dynamic(() => import("./MdxWrapper"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[800px] animate-pulse">
      <div className="h-6 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
    </div>
  ),
});

export default function MdxContent({ code }: { code: string }) {
  return <MdxWrapper code={code} />;
}
