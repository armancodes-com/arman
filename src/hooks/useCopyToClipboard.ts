import { useState, useCallback } from "react";

interface UseCopyToClipboardReturn {
  tooltip: boolean;
  copyToClipboard: (text: string) => void;
}

export const useCopyToClipboard = (): UseCopyToClipboardReturn => {
  const [tooltip, setTooltip] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setTooltip(true);
      setTimeout(() => setTooltip(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, []);

  return { tooltip, copyToClipboard };
};
