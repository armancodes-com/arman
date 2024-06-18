import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // creating a new nonce  each time page is visited
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // script-src 'self' 'nonce-${nonce}' 'unsafe-inline';
  // style-src 'self' 'nonce-${nonce}' 'unsafe-inline';
  const cspHeader = `
    default-src 'self'; 
    script-src 'self' https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval'; 
    style-src 'self' 'unsafe-inline' 'unsafe-eval'; 
    img-src 'self' blob: data:; 
    font-src 'self'; 
    connect-src 'self' https://region1.google-analytics.com; 
    media-src 'self'; 
    object-src 'self'; 
    frame-src 'self'; 
    frame-ancestors 'self'; 
    form-action 'self'; 
    base-uri 'self';
    upgrade-insecure-requests; 
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    ?.replace(/\s{2,}/g, " ")
    .trim();

  // making a header object from headers we receive each time requests hit the pages
  const requestHeaders = new Headers(request?.headers);
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

// configuring matcher for middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */

    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
