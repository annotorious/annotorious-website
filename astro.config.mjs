import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Annotorious',
    favicon: '/images/annotorious-touch-icon.png',
    customCss: ['./src/index.css'],
    expressiveCode: {
      styleOverrides: {
        borderRadius: '0.25rem'
      },
      themes: ['nord']
    },
    social: [{
      icon: 'github', label: 'Github', href: 'https://github.com/annotorious/annotorious'
    }],
    sidebar: [{
      label: 'Start Here',
      items: [{
        label: 'Getting Started',
        link: 'getting-started'
      }, {
        label: 'Installation',
        slug: 'installation'
      }]
    }, {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'API Reference',
      collapsed: true,
      autogenerate: {
        directory: 'api-reference'
      }
    }, {
      label: 'React',
      items: [
        { label: 'Annotating Images', slug: 'react/image-annotation' },
        { label: 'OpenSeadragon and IIIF', slug: 'react/openseadragon-iiif' },
        { label: 'Building Custom Popups', slug: 'react/custom-popups' },
        { label: 'Component Reference', slug: 'react/component-reference' },
        { label: 'Hooks Reference', slug: 'react/hooks-reference' },
      ],
    }]
  }), react(), icon()],
  output: "static"
});