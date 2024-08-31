---
title: OpenSeadragonPopup
---

An helper component to create your own annotation popup. The popup opens when
the annotation is selected, either by user action or programmatically.

```js
import { 
  Annotorious, 
  OpenSeadragonAnnotator, 
  OpenSeadragonPopup
  OpenSeadragonViewer 
} from '@annotorious/react';

import '@annotorious/react/annotorious-react.css';

export default function App() {
  return (
    <Annotorious>
      <OpenSeadragonAnnotator     
        drawingEnabled={false}
        tool="polygon">
            
        <OpenSeadragonViewer 
          className="openseadragon" 
          options={OSD_OPTIONS} />

        <OpenSeadragonPopup 
          popup={props => (
            <div className="annotorious-popup">Hello World</div>
          )} />
      </OpenSeadragonAnnotator>
    </Annotorious>
  );
}
```