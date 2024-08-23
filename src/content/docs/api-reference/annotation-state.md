---
title: AnnotationState
---

The `AnnotationState` represents the current state of an annotation in the user interface. 

```ts
interface AnnotationState {
  selected?: boolean;
  hovered?: boolean;
}
```
The annotation state is passed to dynamic style functions as an argument to 
[allow for state-dependent styling](/api-reference/drawing-style#dynamic-styles).


```ts
anno.setStyle((annotation, state) => {
  if (state.selected) {
    return {
      fill: '#ff0000',
      fillOpacity: 0.3,
      stroke: '#ff0000',
      strokeOpacity: 1
    };
  }
  
  // Default style for non-selected annotations
  return {
    fill: '#00ff00',
    fillOpacity: 0.2,
    stroke: '#00ff00',
    strokeOpacity: 1
  };
});
```