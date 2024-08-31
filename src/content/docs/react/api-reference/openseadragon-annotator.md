---
title: OpenSeadragonAnnotator
---

Wraps an [OpenSeadragonViewer](/react/components/openseadragon-viewer/) and 
applies an annotation layer to it. 


```tsx
import { Annotorious, OpenSeadragonAnnotator, OpenSeadragonViewer } from '@annotorious/react';

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
      </OpenSeadragonAnnotator>
    </Annotorious>
  );
}
```

## Props

This components supports all of the init options of the vanilla 
JS [createImageAnnotator](/api-reference/image-annotator/) function as 
props, as well as some additional ones:

| Prop             | Type                                             | Default     | Description                                     |
|------------------|--------------------------------------------------|-------------|-------------------------------------------------|
| adapter          | [FormatAdapter](#formatadapter)                  |             | An optional format crosswalk adapter.           |
| autoSave         | boolean                                          | false       | When set to `true`, annotation update events trigger instantly when the user is idle. If `false`, update events only triger after the user actively de-selects the annotation after editing. |
| drawingEnabled   | boolean                                          | true        | Enables or disables drawing functionality.      |
| drawingMode      | "click" \| "drag"                                | "drag"      | Determines how drawing is initiated.            |
| filter           | [Filter](/api-reference/filter)                  |             | A function to control which annotations to display, and which to hide. |
| userSelectAction | [UserSelectAction](/api-reference/selection)     | "EDIT"      | A `userSelectAction` or function which determines what happens when the user selects an annotation interactively. |
| style            | [StyleDefinition]((/api-reference/drawing-style) |             | Sets the global (static or data-driven) drawing style. |
| tool             | "rectangle" \| "polygon"                         | "rectangle" | Changes the current drawing tool.               |
