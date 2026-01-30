"use client";

import { alexandria } from "@/app/fonts";
import IconShare from "@/assets/icons/ShareIcon";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { getBaseUrl } from "@/utils/get-base-url";

const ShareButton = ({ url }: { url: string }) => {
  const { tooltip, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    const baseUrlSection = getBaseUrl();
    copyToClipboard(`${baseUrlSection}${url}`);
  };

  return (
    <div className="relative" data-testid="share-btn-wrapper">
      <IconShare
        onClick={handleCopy}
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
