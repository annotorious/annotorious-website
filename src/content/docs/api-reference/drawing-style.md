---
title: DrawingStyle
---

Defines the visual appearance of annotations in Annotorious. You
can set the style on your annotator instance via the [setStyle](/api-reference/image-annotator#setstyle) 
method.

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

## Color

You can specify the color in one of three formats:

- __RGB:__ a string in the format `rgb(r, g, b)` where r, g, and b are numbers between 0 and 255.
- __RGBA:__ a string in the format `rgba(r, g, b, a)` where r, g, and b are numbers between 0 and 255, and a is a number between 0 and 1 representing the alpha (opacity) value.
- __HEX:__ a string starting with # followed by 3 or 6 hexadecimal digits, e.g. `#ff0000` for red.

## Dynamic Styling

In addition to a static style, `setStyle` also accepts a __function that returns
a style__. The function receives an [ImageAnnotation](/api-reference/image-annotation)
and the [AnnotationState](/api-reference/annotation-state) as input. You can use this 
to implement dynamic styles that depend on the data of your annotation.

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

