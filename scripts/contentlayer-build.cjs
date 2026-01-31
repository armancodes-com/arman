#!/usr/bin/env node
"use strict";

/* global process */
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const fontDir = "/tmp/next-font";
const fonts = [
  "Alexandria.woff2",
  "Fira-Code.woff2",
  "Quantico.woff2",
  "Ubuntu.woff2",
];

fs.mkdirSync(fontDir, { recursive: true });
fonts.forEach((font) => {
  const filePath = path.join(fontDir, font);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "font");
  }
});

const result = spawnSync("node", ["node_modules/contentlayer/bin/cli.cjs", "build"], {
  stdio: "inherit",
});

// Exit with the same code as contentlayer to properly signal success or failure
process.exit(result.status || 0);
