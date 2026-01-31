"use client";

/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useEffect } from "react";
import ArticleImage from "../ArticleImage";
import Link from "next/link";
import CustomHeading from "./CustomHeading";
import { alexandria } from "@/app/fonts";

type CustomLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
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
      className="font-normal text-text-primary underline underline-offset-4"
      {...props}
      aria-label={"link"}
    >
      {props.children}
    </a>
  );
};

const components = {
  Image: ArticleImage,
  a: CustomLink,
  Link: CustomLink,
  h1: (props: any) => (
    <CustomHeading as="h1" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h2: (props: any) => (
    <CustomHeading as="h2" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h3: (props: any) => (
    <CustomHeading as="h3" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h4: (props: any) => (
    <CustomHeading as="h4" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h5: (props: any) => (
    <CustomHeading as="h5" {...props}>
      {props?.children}
    </CustomHeading>
  ),
  h6: (props: any) => (
    <CustomHeading as="h6" {...props}>
      {props?.children}
    </CustomHeading>
  ),
};

/**
 * Custom getMDXComponent that works with Next.js 16 + React 19
 * This fixes the contentlayer compatibility issue by properly
 * providing React and ReactDOM to the MDX bundle
 */
function getMDXComponent(code: string) {
  // Import React dynamically to ensure we get the correct instance
  const React = require("react");
  const ReactDOM = require("react-dom");
  const jsxRuntime = require("react/jsx-runtime");

  const scope = {
    React,
    ReactDOM,
    _jsx_runtime: jsxRuntime,
  };

  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
}

const MdxWrapper = ({ code }: { code: string }) => {
  // Use useMemo to cache the component and avoid recreating it on every render
  const Component = useMemo(() => getMDXComponent(code), [code]);

  useEffect(() => {
    const id = "one-dark-theme-style";

    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/prism/one-dark.css";
      link.id = id;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div
      className={`prose prose-neutral animate-in text-caption2 !leading-[1.8rem] text-text-primary prose-p:font-light md:text-body2 ${alexandria.className} w-full max-w-[800px] prose-headings:text-text-primary prose-h1:text-title2 prose-h2:text-body1 prose-h3:text-body1 prose-h4:text-body1 prose-h5:text-body2 prose-h6:text-body2 prose-blockquote:text-text-primary prose-figcaption:mx-auto prose-figcaption:max-w-md prose-figcaption:text-center prose-figcaption:text-caption2 prose-figcaption:text-gray-2 prose-strong:text-text-primary`}
      style={{ "--index": 3 } as React.CSSProperties}
    >
      <Component components={components} />
    </div>
  );
};

export default MdxWrapper;
