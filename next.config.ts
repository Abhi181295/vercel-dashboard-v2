// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  // Tell Turbopack the real project root
  turbopack: {
    root: __dirname,
  },
};

export default config;
