// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Each site in /sites gets its own port, so several can run side by side.
  server: { port: 4322 },
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
