import { useEffect, useState } from "react";

function getInitialHash() {
  return typeof window !== "undefined" ? window.location.hash : "";
}

/**
 * React hook that returns the current URL hash (`window.location.hash`)
 * and updates its value whenever the hash changes.
 *
 * In non-browser environments (e.g. during server-side rendering),
 * this hook initializes to an empty string and does not attach any
 * `hashchange` event listeners until it runs on the client.
 *
 * @returns The current location hash, including the leading `#` if present,
 *          or an empty string when no hash is set or when running on the server.
 */
export default function useHash() {
  const [hash, setHash] = useState(getInitialHash);

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
