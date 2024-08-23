---
title: DrawingStyle
---

The `DrawingStyle` defines the visual appearance of annotations in Annotorious. You
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

## DrawingStyle

### fill

- Type: [Color](#color)
- Optional

The fill color of the annotation. Must be specified in HEX format.

### fillOpacity

- Type: `number`
- Optional

The opacity of the annotation fill, ranging from 0 (fully transparent) to 1 (fully opaque).

### stroke

- Type: [Color](#color)
- Optional

The stroke (outline) color of the annotation. Must be specified in HEX format.

### strokeOpacity

- Type: `number`
- Optional

The opacity of the annotation stroke, ranging from 0 (fully transparent) to 1 (fully opaque).

### strokeWidth

- Type: `number`
- Optional

The width of the annotation stroke in pixels.

## Dynamic Styles

In addition to static `DrawingStyle` objects, `setStyle` also accepts
functions that return a `DrawingStyle`. You can use this to implement
[data-driven styles](#) for your annotations.

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

