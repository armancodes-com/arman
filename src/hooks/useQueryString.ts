"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryString() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (query: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(query, value);

      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
      return params.toString();
    },
    [searchParams, pathname, router],
  );

  const updateQueryString = useCallback(
    (query: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(query);
      params.set(query, value);
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
      return params.toString();
    },
    [pathname, router, searchParams],
  );

  const getQueryStringValue = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams);
      return params.get(query);
    },
    [searchParams],
  );

  return { createQueryString, getQueryStringValue, updateQueryString };
}
