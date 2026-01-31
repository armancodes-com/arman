import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Initialize hash from current URL on mount
    setHash(window.location.hash);

    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}
