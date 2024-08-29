---
title: OpenSeadragonAnnotator
---

The main entry point into the Annotorious API. An object of this 
type is returned when you call the `createOSDAnnotator` method.

```js
import { createOSDAnnotator } from '@annotorious/openseadragon';

// ...

const anno = createOSDAnnotator(viewer);
```

You can provide an options object to customize the annotator behavior.

```js
const anno = createOSDAnnotator(viewer, {
  style: { fill: #ff0000, fillOpacity: 0.4 }
});
```

## Init Options


| Property         | Type                                          | Default | Description                           |
|------------------|-----------------------------------------------|---------|---------------------------------------|
| adapter          | [FormatAdapter](/api-reference/formatadapter) |         | An optional format crosswalk adapter. |
| autoSave         | boolean                                       | false   | When set to `true`, annotation update events trigger instantly when the user is idle. If `false`, update events only triger after the user actively de-selects the annotation after editing. |
| drawingEnabled   | boolean                                       | false   | Enables or disables drawing functionality .  |
| drawingMode      | "click" \| "drag"                             |         | Determines how drawing is initiated. For UX purposes, the default depends on the device type. On desktop, default will be "click". On touch devices, default will be "drag". |
| userSelectAction | [UserSelectActionExpression](/api-reference/selection#userselectactionexpression) | "EDIT" | Action to perform on user selection. |
| style            | [DrawingStyleExpression](/api-reference/drawingstyle#drawingstyleexpression)  | Annotation style. |

## Instance Fields

| Field   | Type           | Description                                                      |
|---------|----------------|------------------------------------------------------------------|
| viewer | [OpenSeadragon.Viewer](https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html) | Reference to the OpenSeadragon viewer instance. |


## Instance Methods

### addAnnotation

```js 
anno.addAnnotation(annotation);
```
Add an annotation programmatically.

| Argument   | Type                                               | Description            |
|------------|----------------------------------------------------|------------------------|
| annotation | [ImageAnnotation](/api-reference/image-annotation) | The annotation object. |

### cancelSelected
```js
anno.cancelSelected();
```
Programmatically cancel the current selection, if any.

### canRedo

```js
const canRedo = anno.canRedo();
```
Test if there are any re-doable user actions in the undo stack.

__Returns:__ boolean

###  canUndo

```js 
const canUndo = anno.canUndo();
```
Test if there are any undoable user actions in the undo stack.

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
Destroy this ImageAnnotator instance, removing all annotations and the Annotorious
container element.

### fitBounds

```js
anno.fitBounds(arg, opts?);
```

Fits the OpenSeadragon viewer to the bounds of the given annotation.

| Argument | Type                                                        | Default      | Description                      |
|----------|-------------------------------------------------------------|--------------|----------------------------------|
| arg      | [ImageAnnotation](/api-reference/imageannotation) \| string | __required__ | The annotation or annotation ID. |
| opts     | FitboundsOptions \| string                                  |              | Additional options.              |

### FitBoundsOptions

```js
anno.fitBounds(arg, { immediately: true, padding: 20 });
```

Additional options to control `fitBounds` behavior.

| Property    | Type                                       | Default | Description                                      |
|-------------|--------------------------------------------|---------|--------------------------------------------------|
| immediately | boolean                                    | false   | Whether to use animated transition or not.       |
| padding     | number \| [number, number, number, number] | 0       | Optional padding (pixels) when applying the fit. |

### fitBoundsWithConstraints

```js
anno.fitBoundsWithConstraints(arg, opts?);
```

Similar to `fitBounds`, but using the [OpenSeadragon fitBoundsWithConstraints](https://openseadragon.github.io/docs/OpenSeadragon.Viewport.html#fitBoundsWithConstraints) method underneath.

| Argument | Type                                                        | Default      | Description                      |
|----------|-------------------------------------------------------------|--------------|----------------------------------|
| arg      | [ImageAnnotation](/api-reference/imageannotation) \| string | __required__ | The annotation or annotation ID. |
| opts     | FitboundsOptions \| string                                  |              | Additional options.              |

### getAnnotationById

```js
const annotation = anno.getAnnotationById(id);
```
Get the annotation with the specified ID.

| Argument | Type   | Description        |
|----------|--------|--------------------|
| id       | string | The annotation ID. |

__Returns:__ [ImageAnnotation](/api-reference/imageannotation) | undefined

### getAnnotations

```js
const all = anno.getAnnotations();
```
Get all annotations on the image.
__Returns:__ Array<[ImageAnnotation](/api-reference/imageannotation)>

### getSelected

```js 
const selected = anno.getSelected();
```
Get the currently selected annotations.

__Returns:__ Array<[ImageAnnotation](/api-reference/imageannotation)>

### getUser

```js 
const currentUser = anno.getUser();
```
Get the the user object, if any.

__Returns:__ [User](/api-reference/user)

### loadAnnotations

```js
const loaded = await anno.loadAnnotations(url, replace = false)
```

Load annotations from a JSON file at a given URL. The method returns a 
promise of the fetched annotations, in case you want to perform an 
action after the they have loaded.

The optional `replace` parameter 
controls whether the new annotations should replace the current annotations, 
erasing all existing ones, or get added to them.

| Argument | Type    | Default      | Description                                                      |
|----------|---------|--------------|------------------------------------------------------------------|
| url      | string  | __required__ | The URL to the JSON annotation file.                             |
| replace  | boolean | false        | If `true`, all current annotations on the image will be cleared. |

__Returns:__ Promise<[ImageAnnotation](/api-reference/imageannotation)[]>

### listDrawingTools

```js 
const tools = anno.listDrawingTools();
```

Returns a list of the available drawing tool names. By default, this method will return `['rectangle', 'polygon']`. Additional tools may be available through plugins.

__Returns:__ Array\<string>

### redo

```js
anno.redo();
```

Programmatically redo the last undone user action.

### removeAnnotation

```js
const removedAnnotation = anno.removeAnnotation(annotationOrId);
```

Remove the specified annotation from the image. Returns the removed annotation.

| Argument       | Type                                                        | Description                             |
|----------------|-------------------------------------------------------------|-----------------------------------------|
| annotationOrId | [ImageAnnotation](/api-reference/imageannotation) \| string | The annotation object or ID to remove.  |

__Returns:__ [ImageAnnotation](/api-reference/imageannotation) | undefined

### setAnnotations

```js
anno.setAnnotations(annotations, replace = false);
```

Adds the given list of annotations to the image. Optionally, clearing the annotation layer first and replacing all 
existing annotations.

| Argument    | Type                                              | Default      | Description                                            |
|-------------|---------------------------------------------------|--------------|--------------------------------------------------------|
| annotations | [ImageAnnotation](/api-reference/imageannotation) | __required__ | The annotation objects.                                |
| replace     | boolean                                           | false        | If `true`, new annotations will replace existing ones. |

### setDrawingTool

```js
anno.setDrawingTool('polygon');
```

Changes the current drawing tool. By default, possible values are `rectangle` and `polygon`. Additional tools may be available through plugins.

| Argument | Type    | Default      | Description                   |
|----------|---------|--------------|-------------------------------|
| arg      | string  | __required__ | The name of the drawing tool. |

### setDrawingEnabled

```js
anno.setDrawingEnabled(true);
```

Enables or disables the ability to create new annotation shapes.

| Argument | Type    | Description                                      |
|----------|---------|--------------------------------------------------|
| arg      | boolean | Whether drawing of new shapes is allowed or not. |

### setFilter

```js
anno.setFilter(filter);

// Clear the filter
anno.setFilter();
```

Set a [Filter](/api-reference/filter) function to control which annotations to display, and which to hide. A filter is 
a JavaScript function that receives the [ImageAnnotation](/api-reference/imageannotation) and 
its [AnnotationState](/api-reference/annotation-state) as input and returns a boolean.

| Argument | Type                                         | Descriptions                                                          |
|----------|----------------------------------------------|-----------------------------------------------------------------------|
| filter   | [Filter](/api-reference/filter) \| undefined | A function that returns `true` if the annotation should be displayed. |

### setSelected

```js
anno.setSelected(arg, editable?);

// Clear the selection
anno.setSelected();
```
Programmatically set the current selection. The optional argument `editable` controls whether the selected 
annotation should become user-editable. If `editable` is omitted, the default value is determined by the
`userSelectAction` set in the [Init Options](#init-options). Call without arguments to clear the current selection.


| Argument | Type                | Description                                                                |
|----------|---------------------|----------------------------------------------------------------------------|
| arg      | string \| undefined | The ID of the annotation to select, or `undefined` to clear the selection. |
| editable | boolean             | Optional. Uses the current `userSelectAction` by default.                  |

### setStyle

```js
anno.setStyle(style);

// Clear the current style
anno.setStyle();
```

Sets the global (static or data-driven) [DrawingStyle](/api-reference/drawingstyle).

| Argument | Type             | Description |
|----------|------------------|-------------|
| style    | [DrawingStyleExpression](/api-reference/drawingstyle#drawingstyleexpression) \| undefined | An object or function to define the global annotation drawing style. |

### setUser

```js
anno.setUser(user);

// Clear the current user
anno.setStyle();
```

Sets the current user. Annotorious will use this information to insert [attribution data](/api-reference/user#annotation-attribution) 
into annotations. 

| Argument | Type                        | Description                     |
|----------|-----------------------------|---------------------------------|
| user     | [User](/api-reference/user) | The user object or `undefined`. |

### setUserSelectAction

```js
anno.setUserSelectAction(action);
```

Changes the current `userSelectAction`, which determines what happens when the user selects an annotation interactively.

Can bea [UserSelectAction](/api-reference/selection#userselectaction), or a __function__ that receives the annotation as input 
and returns a [UserSelectAction](/api-reference/selection#userselectaction). The following actions are available:

- __EDIT__: make the annotation shape editable when selecting (default).
- __SELECT__: just select. This will update the [AnnotationState](/api-reference/annotation-state) and trigger the [selectionChanged](/api-reference/events#selectionchanged) event, but will not make the shape editable.
- __NONE__: the annotation is inert, clicking has no effect.


| Argument | Type | Default | Description |
|----------|------|---------|-------------|
| action   | [UserSelectActionExpression](/api-reference/selection#userselectactionexpression) \| undefined | EDIT | Value or function that determines behavior when the user selects an annotation. |

### setVisible

```js
anno.setVisible(visible);
```

Changes the visibility of the annotation layer.

| Argument | Type    | Description                                                      |
|----------|---------|------------------------------------------------------------------|
| visible  | boolean | `true` to make the annotation layer visible, `false` to hide it. |

### undo

```js
anno.undo();
```

Programmatically undo the last user action.

### updateAnnotation

```js
const previous = anno.updateAnnotation(annotation);
```

Updates an existing annotation, replacing the existing one with new data. The new annotation must have 
the same ID as the old one.

| Argument   | Type                                              | Description                |
|------------|---------------------------------------------------|----------------------------|
| annotation | [ImageAnnotation](/api-reference/imageannotation) | The new annotation object. |

__Returns:__ [ImageAnnotation](/api-reference/imageannotation) - the previous version of the updated annotation.

### on

```js
anno.on(event, callback);
```

Adds a [lifecycle event](/api-reference/events) listener.

| Argument | Type     | Description            |
|----------|----------|------------------------|
| event    | string   | The event name.        |
| callback | function | The callback function. |

### off

```js
anno.off(event, callback);
```

Removes a [lifecycle event](/api-reference/events) listener.

| Argument | Type     | Description            |
|----------|----------|------------------------|
| event    | string   | The event name         |
| callback | function | The callback function. |

## Events

For the list events available on the ImageAnnotator, refer to the full [lifecycle event reference](/api-reference/events).
