import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "src",
        ),
      },
    ],
  },
});
