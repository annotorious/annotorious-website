---
title: Shape
---

Each [ImageAnnotationTarget](/api-reference/image-annotation/#imageannotationtarget) has Shape selector
that defines the image area that is being annotated.

## Shape

Each Shape has a `type` and a `geometry`. 

| Property | Type       | Description                               |
|----------|------------|-------------------------------------------|
| type     | ShapeType  | Enum indicating the type of shape         |
| geometry | Geometry   | Object containing geometric properties    |

### ShapeType

```typescript
enum ShapeType {
  POLYGON = 'POLYGON',
  RECTANGLE = 'RECTANGLE'
}
```

### Geometry

Every `Geometry` has a `bounds` property that represents the bounding box of the annotation, useful 
for quick calculations without parsing the entire geometry. Other geometry properties depend on the
type of shape.

### Bounds

| Property | Type   | Description                                       |
|----------|--------|---------------------------------------------------|
| minX     | number | Left X coordinate of the geometry bounding box.   |
| minY     | number | Top Y coordinate of the geometry bounding box.    |
| maxX     | number | Right X coordinate of the geometry bounding box.  |
| maxY     | number | Bottom Y coordinate of the geometry bounding box. |

## Rectangle

```js
const rectangle = {
  type: 'RECTANGLE',
  geometry: {
    x: 10,
    y: 10,
    w: 100,
    h: 50,
    bounds: { minX: 10, minY: 10, maxX: 110, maxY: 60 }
  }
};
```

The Rectangle shape is defined by its X/Y position and dimensions.

| Property | Type   | Description                                |
|----------|--------|--------------------------------------------|
| x        | number | X-coordinate of the top-left corner.       |
| y        | number | Y-coordinate of the top-left corner.       |
| w        | number | Width of the rectangle.                    |
| h        | number | Height of the rectangle.                   |
| bounds   | Bounds | Bounding box of the rectangle (redundant). |

## Polygon

```js
const polygon = {
  type: 'POLYGON',
  geometry: {
    points: [[10, 10], [20, 20], [10, 20]],
    bounds: { minX: 10, minY: 10, maxX: 20, maxY: 20 }
  }
};
```

The Polygon shape is defined by a list of X/Y points.

| Property | Type                 | Description                       |
|----------|----------------------|-----------------------------------|
| points   | Array<Array<number>> | Array of [x, y] coordinate pairs. |
| bounds   | Bounds               | Polygon bounding box.             |