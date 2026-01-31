import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : "",
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      // In non-browser environments (e.g., SSR), do nothing.
      return;
    }

    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return hash;
}
