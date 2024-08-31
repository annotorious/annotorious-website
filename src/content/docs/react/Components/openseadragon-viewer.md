---
title: OpenSeadragonViewer
---

A helper component that wraps an [OpenSeadragon](https://openseadragon.github.io) viewer.

```tsx
import { Annotorious, OpenSeadragonViewer } from '@annotorious/react';

const OSD_OPTIONS =  {
  tileSources: {
    type: 'image',
    url: '/images/sample-image.jpg'
  }
};

export default function App() {
  return (
    <Annotorious>
      <OpenSeadragonViewer 
        className="openseadragon" 
        options={OSD_OPTIONS} />
    </Annotorious>
  );
}
```

## Props

| Prop      | Type   | Default     | Description                                                 |
|-----------|--------|-------------|-------------------------------------------------------------|
| className | string |             | `className` to apply to the OpenSeadragon container element |
| options   | [OpenSeadragon.Options](https://openseadragon.github.io/docs/OpenSeadragon.html#.Options) | __required__ | OpenSeadragon viewer options. |

Note that it is not necessary to provide an `element` or `id` attribute in the OpenSeadragon viewer options.
(The OpenSeadragon container element will be generated from the React component.) 