"use client";

import { alexandria } from "@/app/fonts";
import IconShare from "@/assets/icons/ShareIcon";
import { useState } from "react";

const ShareButton = ({ url }: { url: string }) => {
  const [tooltip, showTooltip] = useState(false);

  const baseUrlSection =
    typeof window !== "undefined" &&
    `${window.location.protocol}//${window.location.host}`;

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`${baseUrlSection}${url}`);
      showTooltip(true);
      setTimeout(() => showTooltip(false), 3000); // Tooltip disappears after 3 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative">
      <IconShare
        onClick={copyToClipboard}
        viewBox="0 0 32 32"
        className={`h-6 w-6 cursor-pointer md:h-8 md:w-8 ${tooltip ? "[&_path]:fill-primary [&_path]:stroke-primary" : "[&_path]:stroke-text-primary"}`}
      />
      {tooltip && (
        <div
          className={`absolute left-1/2 top-[120%] z-10 -translate-x-1/2 whitespace-nowrap rounded-5 bg-primary p-2 text-caption2 font-light text-white ${alexandria.className}`}
        >
          copied
          <div className="absolute bottom-full left-1/2 -ml-1 rotate-180 !border-[5px] border-t border-transparent border-t-primary"></div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
