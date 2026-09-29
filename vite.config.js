import { defineConfig } from 'vite';

export default defineConfig({
  base: './',              // relative URLs: the build works at any sub-path (e.g. username.github.io/<repo>/)
  server: { port: 8765 },
  preview: { port: 8765 },
  build: {
    target: 'es2022',      // modules use top-level await (shaders, palettes)
    outDir: 'docs',        // committed; GitHub Pages serves main /docs (Pages can only serve / or /docs)
    emptyOutDir: true,     // docs/ is build output only: never put hand-written files in it
    sourcemap: false,      // no source maps in the published build
    chunkSizeWarningLimit: 1500,
  },
});
