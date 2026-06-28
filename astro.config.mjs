import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
