---
title: AnnotationState
---

Represents the current state of an annotation in the user interface. The AnnotationState is
passed to [dynamic style functions](/api-reference/drawing-style/#dynamic-styling) as an
argument.

## Example

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

## Properties

| Property      | Type    | Description                                             |
|---------------|---------|---------------------------------------------------------|
| selected      | boolean | Whether the annotation is currently selected.           |
| hovered       | boolean | Whether the mouse currently hovers over the annotation. |