import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Start Here',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Getting Started',
        link: 'getting-started',
      }, {
        label: 'Installation',
        slug: 'installation'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), react()]
});