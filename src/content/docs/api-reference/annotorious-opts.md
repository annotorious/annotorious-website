---
title: AnnotoriousOpts
---

Configuration options for initializing the Annotorious [ImageAnnotator](/api-reference/image-annotator/)
or [OpenSeadragonAnnotator](/api-reference/image-annotator/).

## Properties

| Property         | Type                                        | Default | Description                                           |
|------------------|---------------------------------------------|---------|-------------------------------------------------------|
| adapter          | [FormatAdapter](#formatadapter)             |         | Optional annotation format crosswlak adapter. |
| autoSave         | boolean                                     | false   | When set to `true` annotation update events trigger instantly when the user is idle. If `false`, update events only triger after the user actively de-selects the annotation after editing. |
| drawingEnabled   | boolean                                     | true    | Enables or disables drawing functionality .  |
| drawingMode      | [DrawingMode](#drawingmode)                 | 'drag'  | Determines how drawing is initiated.                  |
| userSelectAction | [UserSelectActionExpression](#userselectactionexpression)<I> |  | Custom action on user selection      |
| style            | [DrawingStyleExpression](#drawingstyleexpression)<ImageAnnotation> |  | Custom styling for annotations |
| theme            | [Theme](#theme)                                   | 'light' | Visual theme for the annotation interface             |

## FormatAdapter

A custom adapter for converting between internal (I) and external (E) annotation formats.

## DrawingMode

Determines how drawing is initiated:

- `'click'`: Starts drawing on a single click. User cannot select unless `drawingEnabled` is `false`.
- `'drag'`: Starts drawing on drag. Single click always selects.

## UserSelectActionExpression<I>

A function that defines custom behavior when a user selects an annotation.

### DrawingStyleExpression<ImageAnnotation>

A function or object that defines custom styles for annotations.

### Theme

Defines the visual theme of the annotation interface:

- `'dark'`: Dark theme
- `'light'`: Light theme
- `'auto'`: Automatically switches between dark and light based on system preferences

## Helper Function

### fillDefaults<I, E>

```typescript
function fillDefaults<I extends Annotation = ImageAnnotation, E extends unknown = ImageAnnotation>(
  opts: AnnotoriousOpts<I, E>,
  defaults: AnnotoriousOpts<I, E>
): AnnotoriousOpts<I, E>
```

This function fills in default values for any unspecified options in the provided `opts` object.

## Example Usage

```typescript
import { Annotorious } from '@annotorious/openseadragon';

const config: AnnotoriousOpts = {
  drawingEnabled: true,
  drawingMode: 'click',
  theme: 'dark',
  style: (annotation) => ({
    fill: annotation.bodies.some(b => b.purpose === 'important') ? '#ff0000' : '#00ff00'
  }),
  userSelectAction: (annotation) => {
    console.log('Selected annotation:', annotation);
  }
};

const anno = new Annotorious(viewer, config);
```

This configuration enables drawing, sets it to start on click, uses a dark theme, applies custom styling based on annotation properties, and logs selected annotations to the console.