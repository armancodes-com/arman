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
    <div className="relative" data-testid="share-btn-wrapper">
      <IconShare
        onClick={copyToClipboard}
        data-testid="share-btn"
        viewBox="0 0 32 32"
        className={`h-6 w-6 cursor-pointer md:h-8 md:w-8 ${tooltip ? "[&_path]:fill-primary [&_path]:stroke-primary" : "[&_path]:stroke-text-primary"}`}
      />
      {tooltip && (
        <div
          data-testid="share-button-tooltip"
          className={`rounded-5 bg-primary text-caption2 absolute top-[120%] left-1/2 z-10 -translate-x-1/2 p-2 font-light whitespace-nowrap text-white ${alexandria.className}`}
        >
          copied
          <div className="border-t-primary absolute bottom-full left-1/2 -ml-1 rotate-180 !border-[5px] border-t border-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
