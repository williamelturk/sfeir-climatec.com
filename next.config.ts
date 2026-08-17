import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained build for cPanel / Passenger deployment:
  // everything needed to run lands in .next/standalone
  output: "standalone",
  // Anchor file tracing to this project so the standalone output is flat
  // (otherwise a stray lockfile in a parent folder nests it under the full path)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
