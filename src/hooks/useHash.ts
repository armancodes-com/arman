import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}
