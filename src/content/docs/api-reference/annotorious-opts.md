---
title: AnnotoriousOptions
---

The `AnnotoriousOpts` interface defines the configuration options for initializing an Annotorious instance. These options allow you to customize the behavior and appearance of the annotation tool.

```ts
interface AnnotoriousOpts<I extends Annotation = ImageAnnotation, E extends unknown = ImageAnnotation> {
  adapter?: FormatAdapter<I, E>;
  autoSave?: boolean;
  drawingEnabled?: boolean;
  drawingMode?: DrawingMode;
  userSelectAction?: UserSelectActionExpression<I>;
  style?: DrawingStyleExpression<ImageAnnotation>;
  theme?: Theme;
}
```

## Example

Here's an example of how to use these options when initializing Annotorious:

```ts
import { createImageAnnotator } from '@annotorious/react';

const anno = createImageAnnotator('sample-image', {
  drawingEnabled: true,
  drawingMode: 'drag',
  theme: 'light',
  style: {
    fill: '#ff0000',
    stroke: '#000000'
  }
});
```

## Properties

### adapter

- Type: `FormatAdapter<I, E>`
- Optional

A custom adapter for converting between internal and external annotation formats. See [Format Adapters](/guides/format-adapters) for more information.

### autoSave

- Type: `boolean`
- Optional

If set to `true`, Annotorious will automatically save annotations as they are created or modified. Default is `false`.

### drawingEnabled

- Type: `boolean`
- Optional

Determines whether drawing new annotations is enabled. If `false`, users can only view and select existing annotations. Default is `true`.

### drawingMode

- Type: `DrawingMode`
- Optional

Specifies how drawing is initiated. Can be either `'click'` or `'drag'`. Default is `'drag'`.

- `'click'`: Drawing starts on a single click. Users cannot select annotations unless `drawingEnabled` is `false`.
- `'drag'`: Drawing starts on drag. Single click always selects annotations.

### userSelectAction

- Type: `UserSelectActionExpression<I>`
- Optional

Defines the action to perform when a user selects an annotation. See [User Select Action](/guides/user-select-action) for more details.

### style

- Type: `DrawingStyleExpression<ImageAnnotation>`
- Optional

Specifies the visual style for annotations. Can be a static style object or a function that returns a style based on the annotation and its state. See [Drawing Styles](/guides/drawing-styles) for more information.

### theme

- Type: `Theme`
- Optional

Sets the color theme for the Annotorious UI. Can be `'dark'`, `'light'`, or `'auto'`. Default is `'light'`.

## Related Types

### DrawingMode

```ts
type DrawingMode = 'click' | 'drag';
```

Defines how drawing is initiated.

### Theme

```ts
type Theme = 'dark' | 'light' | 'auto';
```

Specifies the color theme for the Annotorious UI.

## Default Values

Annotorious uses a helper function `fillDefaults` to set default values for options that aren't explicitly specified:

```ts
const fillDefaults = <I extends ImageAnnotation = ImageAnnotation, E extends unknown = ImageAnnotation> (
  opts: AnnotoriousOpts<I, E>,
  defaults: AnnotoriousOpts<I, E>
): AnnotoriousOpts<I, E> => ({
  ...opts,
  drawingEnabled: opts.drawingEnabled === undefined ? defaults.drawingEnabled : opts.drawingEnabled,
  drawingMode: opts.drawingMode || defaults.drawingMode,
  userSelectAction: opts.userSelectAction || defaults.userSelectAction,
  theme: opts.theme || defaults.theme
});
```

This ensures that all necessary options have a value, even if not all are explicitly set when initializing Annotorious.

## Best Practices

1. Only override the default options when necessary. The defaults are designed to work well for most use cases.
2. If you're using a custom annotation format, always provide a corresponding `FormatAdapter`.
3. Consider your use case when setting `drawingMode`. Use `'drag'` for more precise control, and `'click'` for quicker annotations.
4. Use the `theme` option to ensure Annotorious fits well with your application's design.
5. Utilize the `style` option to make annotations visually consistent with your application's aesthetics.

## Type Parameters

- `I`: Extends the base `Annotation` type. This allows for type-safe usage with custom annotation formats.
- `E`: Represents the external annotation format, if different from the internal format.

These type parameters allow for flexible use of Annotorious with various annotation formats while maintaining type safety.