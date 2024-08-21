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
const loaded = await anno.loadAnnotations(url, replace = false)
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

```js 
const tools = anno.listDrawingTools();
```

Returns a list of the available drawing tools, including those from registered drawing tool plugins.

Returns: __string[]__

### redo

```js
anno.redo();
```

Programmatically redo the last undone user action.

### removeAnnotation

```js
const removedAnnotation = anno.removeAnnotation(annotationOrId);
```

Removes the specified annotation from the image.

| Argument       | Type                      | Value                                                 |
|----------------|---------------------------|-------------------------------------------------------|
| annotationOrId | ImageAnnotation \| string | The annotation object or the annotation ID to remove  |

Returns: __ImageAnnotation | undefined__

### setAnnotations

```js
anno.setAnnotations(annotations, replace = false);
```

Sets the annotations for the image, optionally replacing any existing ones.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| annotations | E[]            | The new set of annotations to display                                           |
| replace      | boolean (optional) | If `true`, the new annotations will replace any existing ones. Default is `false`. |

### setFilter

```js
anno.setFilter(filter);
```

Sets a filter function to control which annotations are displayed.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| filter   | Filter \| undefined | A function that returns `true` for annotations that should be displayed. Pass `undefined` to remove the filter. |

### setSelected

```js
anno.setSelected(arg, editable?);
```

Programmatically sets the currently selected annotation(s).

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| arg      | string \| string[] \| undefined | The ID(s) of the annotation(s) to select, or `undefined` to clear the selection. |
| editable | boolean (optional) | If `true`, the selected annotation(s) will be editable. If the argument is omitted, the current UserSelectAction is applied. |

### setStyle

```js
anno.setStyle(style);
```

Sets the drawing style for new annotations.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| style    | DrawingStyleExpression \| undefined | An object that defines the style properties for new annotations. Pass `undefined` to reset to the default style. |

### setUser

```js
anno.setUser(user);
```

Sets the current user for the Annotorious instance.

| Argument | Type             |
|----------|------------------|
| user     | User             | 

### setUserSelectAction

```js
anno.setUserSelectAction(action);
```

Sets the action to be performed when the user selects an annotation.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| action   | UserSelectActionExpression | An object that defines the action to be performed on annotation selection. |

### setVisible

```js
anno.setVisible(visible);
```

Sets whether the Annotorious instance should be visible or not.

| Argument | Typ     | Value                                                            |
|----------|---------|------------------------------------------------------------------|
| visible  | boolean | `true` to make the annotation layer visible, `false` to hide it. |

### undo

```js
anno.undo();
```

Programmatically undo the last user action.

### updateAnnotation

```js
const updatedAnnotation = anno.updateAnnotation(annotation);
```

Updates an existing annotation with new data.

| Argument   | Type             | Value                          |
|------------|------------------|--------------------------------|
| annotation | ImageAnnotation  | The updated annotation object. |

Returns: __ImageAnnotation__ - the previous version of the annotation.

### on

```js
anno.on(event, callback);
```

Subscribes to a lifecycle event. See the list of available events in the LifecycleEvents type.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| event    | T                | The name of the event to subscribe to, e.g. `'annotatioUpdated'`.               |
| callback | LifecycleEvents\<E\>[T] | The callback function to be executed when the event is triggered.        |

### off

```js
anno.off(event, callback);
```

Unsubscribes from a lifecycle event.

| Argument | Type             | Value                                                                             |
|----------|------------------|----------------------------------------------------------------------------------|
| event    | T                | The name of the event to unsubscribe from, e.g. `'annotatioUpdated'`.           |
| callback | LifecycleEvents\<E\>[T] | The callback function to be removed from the event.                      |
