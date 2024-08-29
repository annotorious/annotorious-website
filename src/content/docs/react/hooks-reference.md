---
title: Hooks Reference
---

Annotorious provides hooks for interacting with the `anno` Annotator instance and other API functions. 
These hooks are available anywhere below the `<Annotorious>` context provider.

### useAnnotation

```tsx
const annotation = useAnnotation<T>(id);
```

Retrieves a single annotation by its ID and subscribes to changes.

| Argument | Type           | Description                                             |
|----------|----------------|---------------------------------------------------------|
| id       | string         | The ID of the annotation to retrieve.                   |

__Returns:__ [ImageAnnotation](/api-reference/image-annotation) | undefined


### useAnnotations

```tsx
const annotations: ImageAnnotation[] = useAnnotations(debounce);
```

Returns the live annotation state. To limit re-rendering, you can optionally
debounce the state updates. 

| Argument | Type    | Default | Description                                                    |
|----------|---------|---------|----------------------------------------------------------------|
| debounce | number  | 0       | Debounce the state update by the given number of milliseconds. |

__Returns:__ Array<[ImageAnnotation](/api-reference/image-annotation)>

### useAnnotator

```tsx
const anno = useAnnotator();
```

Provides access to the vanilla [ImageAnnotator](/api-reference/image-annotation) or 
[OpenSeadragonAnnotator](/api-reference/openseadragon-annotation) instance. In TypeScript,
you can include a type argument to indicate the return type.


```tsx
const imageAnnotator = useAnnotator<AnnotoriousImageAnnotator>();

// or

const osdAnnotator = useAnnotator<AnnotoriousOpenSeadragonAnnotator>();
```

__Note:__ in the React bindings package, the types for `ImageAnnotator` and `OpenSeadragonAnnotator` are
renamed to `AnnotoriousImageAnnotator` and `AnnotoriousOpenSeadragonAnnotator` to prevent
name clashes with the React components of the same name.

__Returns:__ [ImageAnnotator](/api-reference/image-annotation) |  [OpenSeadragonAnnotator](/api-reference/openseadragon-annotation)


### useAnnotatorUser

Returns the current annotator user set via the `anno.setUser()` method, if any.

```tsx
const user: User = useAnnotatorUser();
```

__Returns:__ [User](/api-reference/user)

### useSelection

```tsx
const { selected, event } = useSelection();
```

Returns the current selection state object and, optionally, the associated pointer event.

__Returns:__

| Argument | Type             | Description                                  |
|----------|------------------|----------------------------------------------|
| selected | Array<Selection> | The selected annotations.                    |
| event    | PointerEvent     | Optional. The associated user pointer event. |

#### Selection

The selection object contains the selected annotation and a flag indicating whether
the selected annotation has been made editable by the selection.

| Argument   | Type             | Description                                             |
|------------|------------------|---------------------------------------------------------|
| annotation | ImageAnnotation  | The selected annotations.                               |
| editable   | boolean          | Optional. Whether the annotation is currently editable. |

### useViewportState

```tsx
const annotations: ImageAnnotation[] = useViewportState(debounce);
```

__OpenSeadragon only.__ Returns the annotations currently visible in the viewport. This
hook is only available with OpenSeadragon, and will respond to zooming and panning of 
the OpenSeadragon image. You can optionally debounce this hook, to limit re-rendering.

| Argument | Type   | Default | Description                                                    |
|----------|--------|---------|----------------------------------------------------------------|
| debounce | number | 0       | Debounce the state update by the given number of milliseconds. |

__Returns:__ Array<[ImageAnnotation](/api-reference/image-annotation)>
