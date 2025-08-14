// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy normal project
  // base: '/project-239/',
  // site: 'https://dominicnikolai.github.io/project-239/'

  //Deploy 20 Projects
  // base: '/20-projects-with-css/',
  // site: 'https://20essentials.github.io/20-projects-with-css/'

  //Localhost
  site: 'http://localhost:4321/'
});
