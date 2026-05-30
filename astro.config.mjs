import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dajmera-24.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
