"use client";

/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo } from "react";
import ArticleImage from "../ArticleImage";
import Link from "next/link";
import CustomHeading from "./CustomHeading";
import { alexandria } from "@/app/fonts";

type CustomLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link
        {...props}
        href={href}
        className="text-text-primary underline underline-offset-4"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-primary font-normal underline underline-offset-4"
      {...props}
    >
      {props.children}
    </a>
  );
};

const components = {
  Image: ArticleImage,
  a: CustomLink,
  Link: CustomLink,
  h1: (props: HeadingProps) => (
    <CustomHeading as="h1" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h2: (props: HeadingProps) => (
    <CustomHeading as="h2" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h3: (props: HeadingProps) => (
    <CustomHeading as="h3" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h4: (props: HeadingProps) => (
    <CustomHeading as="h4" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h5: (props: HeadingProps) => (
    <CustomHeading as="h5" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h6: (props: HeadingProps) => (
    <CustomHeading as="h6" {...props}>
      {props?.children}
    </CustomHeading>
  ),
};

const PRISM_ONE_DARK_CSS_PATH = "/prism/one-dark.css";

/**
 * Custom getMDXComponent that works with Next.js 16 + React 19
 * This fixes the contentlayer compatibility issue by polyfilling
 * missing React internals methods
 */
function getMDXComponent(code: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const ReactDOM = require("react-dom");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const jsxRuntime = require("react/jsx-runtime");

  // Polyfill for React 19 - provide a stub getOwner function
  // This is safe because we're not using owner tracking in our MDX
  try {
    const internalsKey =
      "__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE";
    const currentInternals = (React as any)[internalsKey];

    if (currentInternals && typeof currentInternals === "object") {
      const reactInternals = currentInternals;

      if (!reactInternals.A || typeof reactInternals.A !== "object") {
        reactInternals.A = {};
      }
      if (typeof reactInternals.A.getOwner !== "function") {
        reactInternals.A.getOwner = () => null;
      }

      (React as any)[internalsKey] = reactInternals;
    }
  } catch {
    // Best-effort polyfill; if React internals change, skip without breaking rendering
  }

  const scope = {
    React,
    ReactDOM,
    _jsx_runtime: jsxRuntime,
  };

  const fn = new Function(
    "scope",
    `"use strict"; const { React, ReactDOM, _jsx_runtime } = scope; ${code}`,
  ) as (scope: any) => any;
  return fn(scope).default;
}

const MdxWrapper = ({ code }: { code: string }) => {
  // Use useMemo to cache the component and avoid recreating it on every render
  const Component = useMemo(() => getMDXComponent(code), [code]);

  useEffect(() => {
    const id = "one-dark-theme-style";

    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = PRISM_ONE_DARK_CSS_PATH;
      link.id = id;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className={`prose prose-neutral animate-in text-caption2 text-text-primary prose-p:font-light md:text-body2 !leading-[1.8rem] ${alexandria.className} prose-headings:text-text-primary prose-h1:text-title2 prose-h2:text-body1 prose-h3:text-body1 prose-h4:text-body1 prose-h5:text-body2 prose-h6:text-body2 prose-blockquote:text-text-primary prose-figcaption:mx-auto prose-figcaption:max-w-md prose-figcaption:text-center prose-figcaption:text-caption2 prose-figcaption:text-gray-2 prose-strong:text-text-primary w-full max-w-[800px]`}
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <Component components={components} />
    </div>
  );
};

export default MdxWrapper;
