import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});
