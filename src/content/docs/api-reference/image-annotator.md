---
title: ImageAnnotator
---

The `ImageAnnotator` is the main entry point into the Annotorious API 
when using the `@annotorious/annotorious` package. An object of this 
type is returned when you call the `createImageAnnotator` method.

```js
const anno = createImageAnnotator('sample-image');
```
## Instance Fields

### `element`

The HTML element where the Annotorious instance is rendered.

- Type: HTMLDivElement

## Instance Methods

### addAnnotation

```js 
anno.addAnnotation(annotation);
```

Add an annotation programmatically.

| Argument   | Type            |
|------------|-----------------|
| annotation | ImageAnnotation |

### cancelSelected

```js
anno.cancelSelected();
```

Programmatically cancel the current selection, if any.

### canRedo

```js
const canRedo = anno.canRedo();
```

Tests if there are any re-doable user actions in the undo stack.

Returns: __boolean__

###  canUndo

```js 
const canUndo = anno.canUndo();
```

Tests if there are any undoable user actions in the undo stack.

Returns: __boolean__

### clearAnnotations

```js 
anno.clearAnnotations();
```

Delete all annotations from the image.

### destroy 

```js 
anno.destroy();
```

Destroy this instance of Annotorious, removing the annotation layer from the image.

### getAnnotationById

```js
const annotation = anno.getAnnotationById(id);
```

Returns the annotation with the specified ID.

| Argument | Type   | Value             |
|----------|--------|-------------------|
| id       | string | the annotation ID |

Returns: __ImageAnnotation | undefined__

### getAnnotations

```js
const all = anno.getAnnotations();
```

Returns: __ImageAnnotation[]__

### getSelected

```js 
const selected = anno.getSelected();
```

Returns the currently selected annotations.

Returns: __ImageAnnotation[]__

### getUser

```js 
const currentUser = anno.getUser();
```

Returns: __User__

### loadAnnotations

```js
const loaded = await anno.loadAnnotations(url, replace?)
```

Loads annotations from a JSON file at a given URL. The method returns a 
promise of the fetched annotations, in case you want to perform an 
action after the they have loaded. The optional `replace` parameter 
controls whether the new annotations should replace the current annotations, 
erasing all existing ones, or get added to them.

| Argument | Type    | Value                                                                                     | Default   |
|----------|---------|-------------------------------------------------------------------------------------------|-----------|
| url      | string  | the URL to a JSON annotation file                                                         |           |
| replace  | boolean | Optional: set to `true` to clear the annotation canvas before adding the new annotations. | __false__ |

Returns: __Promise<ImageAnnotation[]>__

### listDrawingTools

Returns a list of the available drawing tools, including those from registered drawing tool plugins.

```js 
const tools = anno.listDrawingTools();
```
Returns: __string[]__

### setDrawingTool

```js 
const tools = anno.setDrawingTool(toolName)`
```

Switches between the different available drawing tools. Per default, Annotorious 
provides a `rectangle` and a `polygon` tool. Additional tools may be available 
through plugins. Use `listDrawingTool` to get the list of registered tools.

| Argument | Type   | Value                             |
|----------|--------|-----------------------------------|
| toolName | string | e.g. __rectangle__ or __polygon__ |

### `setDrawingEnabled`
Enables or disables the drawing functionality.
- Parameters:
  - `enabled`: `boolean`
- Example: `annotator.setDrawingEnabled(true);`

### `setTheme`
Sets the theme of the Annotorious instance.
- Parameters:
  - `theme`: `Theme`
- Example: `annotator.setTheme({ /* theme options */ });`



