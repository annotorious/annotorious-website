import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [starlight({
    title: 'Annotorious',
    customCss: [
      './src/index.css',
    ],
    expressiveCode: {
      styleOverrides: { borderRadius: '0.25rem' },
      themes: ['nord']
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Start Here',
      items: [{
        label: 'Getting Started',
        link: 'getting-started',
      }, {
        label: 'OpenSeadragon',
        link: 'openseadragon'
      }, {
        label: 'Installation',
        slug: 'installation'
      }, {
        label: 'Migrating from v2.7',
        link: 'migration-guide',
      }]
    }, {
      label: 'Guides',
      items: [{
        label: 'Annotating Images',
        link: 'js/images'
      }, {
        label: 'OpenSeadragon',
        link: 'js/openseadragon'
      }]
    }, {
      label: 'Tutorials',
      items: []
    }, {
      label: 'React',
      autogenerate: { directory: 'react' }
    }, {
      label: 'Svelte',
      autogenerate: { directory: 'svelte' }
    }]
  }), react()]
});