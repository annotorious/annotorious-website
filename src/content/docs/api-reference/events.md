---
title: Events
---

Lifecycle events are emitted by the annotator in response to user activities. You can
attach a handler to the annotator instance via the [on](/api-reference/image-annotator/#on) method.

## Example

```js
anno.on('clickAnnotation', (annotation) => {
  console.log('User clicked annotation: ' + annotation.id);
});
```

Use lifecycle event listeners to respond to user actions, for example:

- Trigger save actions to a database backend.
- Update other parts of your user interface in reponse to changes in annotation state.
- Implement custom behavior in your application based on annotation interactions.

## Events

### clickAnnotation

```ts
anno.on('clickAnnotation', (annotation, originalEvent) => {
  console.log('Annotation clicked: ' + annotation.id);
});
```
Fired when a user clicks on an annotation. Provides both the annotation object and the original pointer event.

| Argument      | Type                                               | Description                   |
|---------------|----------------------------------------------------|-------------------------------|
| annotation    | [ImageAnnotation](/api-reference/image-annotation) | The clicked annotation.       |
| originalEvent | PointerEvent                                       | The associated pointer event. |

### createAnnotation

```ts 
anno.on('createAnnotation', (annotation) => {
  console.log('Annotation created: ' + annotation.id);
});   
```

Fired after a new annotation is created.

| Argument      | Type                                               | Description         |
|---------------|----------------------------------------------------|---------------------|
| annotation    | [ImageAnnotation](/api-reference/image-annotation) | The new annotation. |

### deleteAnnotation

```ts 
anno.on('deleteAnnotation', (annotation) => {
  console.log('Annotation deleted: ' + annotation.id);
});   
```

Fired after an annotation is deleted.

| Argument      | Type                                               | Description             |
|---------------|----------------------------------------------------|-------------------------|
| annotation    | [ImageAnnotation](/api-reference/image-annotation) | The deleted annotation. |


### mouseEnterAnnotation

```ts 
anno.on('mouseEnterAnnotation', (annotation) => {
  console.log('Mouse entered: ' + annotation.id);
});   
```

Fired when the mouse cursor enters the area of an annotation.

| Argument      | Type                                               | Description             |
|---------------|----------------------------------------------------|-------------------------|
| annotation    | [ImageAnnotation](/api-reference/image-annotation) | The hovered annotation. |

### mouseLeaveAnnotation

```ts 
anno.on('mouseLeaveAnnotation', (annotation) => {
  console.log('Mouse left: ' + annotation.id);
});   
```

Fired when the mouse cursor leaves the area of an annotation.

| Argument      | Type                                               | Description             |
|---------------|----------------------------------------------------|-------------------------|
| annotation    | [ImageAnnotation](/api-reference/image-annotation) | The hovered annotation. |

### selectionChanged

```ts 
anno.on('selectionChanged', (annotations) => {
  console.log('Selected annotations', annotations);
});   
```

Fired when the set of selected annotation changes. For future compatibility, the argument
is an array. However, only single annotation will be returned currently.

When the user de-selects an annotation, the event will be fired with an empty array.

| Argument      | Type                                                      | Description                                     |
|---------------|-----------------------------------------------------------|-------------------------------------------------|
| annotations   | Array<[ImageAnnotation](/api-reference/image-annotation)> | The selected annotation(s) (or an empty array). |

### updateAnnotation

```ts 
anno.on('updateAnnotation', ((updated, previous) => void) => {
  console.log('Annotation was updated.');
  console.log('Annotation before upate: ' + previous);
  console.log('Annotation after update: ' + updated);
});   
```

Fired when an existing annotation is modified. Provides both the updated annotation and the 
previous state of the annotation.

| Argument | Type                                               | Description                          |
|----------|----------------------------------------------------|--------------------------------------|
| updated  | [ImageAnnotation](/api-reference/image-annotation) | The new annotation after the update. |
| previous | [ImageAnnotation](/api-reference/image-annotation) | The annotation before the update.    |

### viewportIntersect

__OpenSeadragon only.__

```ts 
anno.on('viewportIntersect', (annotations) => {
  console.log('Annotations in viewport', annotations);
});   
```

Fired when the set of annotations visible in the current viewport changes. This event
is only available on the [OpenSeadragonAnnotator](/api-reference/openseadragon-annotator)
and will respond to zooming and panning of the OpenSeadragon image.

| Argument      | Type                                                      | Description                              |
|---------------|-----------------------------------------------------------|------------------------------------------|
| annotations   | Array<[ImageAnnotation](/api-reference/image-annotation)> | The annotations in the current viewport. |

