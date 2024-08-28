---
title: DrawingStyle
---

Defines the visual appearance of annotations in Annotorious. You
can set the style via the [setStyle](#) method of your annotator instance. 

```ts
anno.setStyle({
  fill: '#00ff00',
  fillOpacity: 0.25,
  stroke: '#00ff00',
  strokeOpacity: 1
});
```

To reset the style to the defaults, clear the style like so:

```ts
anno.setStyle();
```

## Properties

| Property      | Type            | Default | Description                |
|---------------|-----------------|---------|----------------------------|
| fill          | [Color](#color) | #ffffff | Shape fill color           |
| fillOpacity   | number          | 0.25    | Shape fill opacity (0 - 1) |
| stroke        | [Color](#color) | #000000 | Shape stroke color         |
| strokeOpacity | number          | 1       | Shape stroke opacity       |
| strokeWidth   | number          | 1.5     | Stroke with in pixel unit  |

## Dynamic Styling

In addition to a static style, `setStyle` also accepts a __function that returns
a style__. You can use this to implement dynamic styles that depend on the 
data of your annotation.

```ts
anno.setStyle((annotation, state) => {
  const label = annotation.bodies.find(b => b.purpose === 'tagging')?.value;
  
  // If the annotation has an 'important' label, make it red
  const color = label === 'important' ? '#ff0000' : '#ffffff';

  const opacity = state.selected ? 0.9 : 0.25;

  return {
    fill: color,
    fillOpacity: opacity,
    stroke: color,
    strokeOpacity: 1
  }
});
```

