/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./setup.ts",
    globals: true,
    reporters: "verbose",
    isolate: true,
    coverage: {
      provider: "v8",
      include: [
        // 'pages/**/*',
        "src/constants/**/*",
        "src/ui/**/*",
        // "src/layouts/**/*",
        // "src/features/**/*",
      ],
      reporter: ["text", "json", "html", "clover"],
      all: true,
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
});
