"use client";

import dynamic from "next/dynamic";

// Dynamically import MdxWrapper with SSR disabled to avoid React 19 SSR compatibility issues
const MdxWrapper = dynamic(() => import("./MdxWrapper"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[800px] animate-pulse">
      <div className="mb-4 h-6 rounded bg-gray-200"></div>
      <div className="mb-3 h-4 rounded bg-gray-200"></div>
      <div className="mb-3 h-4 rounded bg-gray-200"></div>
      <div className="mb-3 h-4 w-3/4 rounded bg-gray-200"></div>
    </div>
  ),
});

export default function MdxContent({ code }: { code: string }) {
  return <MdxWrapper code={code} />;
}
