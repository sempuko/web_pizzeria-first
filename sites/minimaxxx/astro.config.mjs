// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Each site in /sites gets its own port, so several can run side by side.
  server: { port: 4323 },
  devToolbar: { enabled: false },
});
