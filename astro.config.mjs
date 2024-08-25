import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Annotorious',
    customCss: ['./src/index.css'],
    expressiveCode: {
      styleOverrides: {
        borderRadius: '0.25rem'
      },
      themes: ['nord']
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Start Here',
      items: [{
        label: 'Getting Started',
        link: 'getting-started'
      }, {
        label: 'Installation',
        slug: 'installation'
      }, {
        label: 'Migrating from v2.7',
        link: 'migration-guide'
      }]
    }, {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'API Reference',
      autogenerate: {
        directory: 'api-reference'
      }
    }, {
      label: 'React',
      autogenerate: {
        directory: 'react'
      }
    }, {
      label: 'Svelte',
      autogenerate: {
        directory: 'svelte'
      }
    }]
  }), react()],
  output: "server",
  adapter: cloudflare()
});