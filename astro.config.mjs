import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kenotron-ms.github.io',
  base: '/latent-masterclass',
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
