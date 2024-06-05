import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);

// mock window matchMedia
// Object.defineProperty(window, "matchMedia", {
//   writable: true,
//   value: vi.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: vi.fn(), // deprecated
//     removeListener: vi.fn(), // deprecated
//     addEventListener: vi.fn(),
//     removeEventListener: vi.fn(),
//     dispatchEvent: vi.fn(),
//   })),
// });

afterEach(() => {
  cleanup();
});

// beforeEach(() => {
//   vi.mock('next/router', () => ({
//     useRouter() {
//       return {
//         route: '/',
//         pathname: '',
//         query: '',
//         asPath: '',
//         locale: 'en',
//       };
//     },
//   }));
// });

beforeEach(() => {
  vi.mock("next/font/google", () => ({
    Fira_Code: () => ({ className: "" }),
    Alexandria: () => ({ className: "" }),
    Ubuntu: () => ({ className: "" }),
  }));
});
