---
title: React Hooks
---

Annotorious provides hooks for interacting with the `anno` ImageAnnotator instance and other API functions.

```tsx
const anno = useAnnotator();
```

Read the full guides for using Annotorious React [for images](react/getting-started-image.md) or [with OpenSeadragon](react/getting-started-osd.md)).


### Hooks
Interaction with Annotorious works through the following hooks.

#### useAnnotations(debounced?: number)

```tsx
const annotations: ImageAnnotation[] = useAnnotations(250);
```
Returns the live annotation state. Optionally, you can debounce updates to `annotations` by a specified amount of milliseconds.

#### useAnnotator
Access to the vanilla `anno` Annotator instance.

#### useSelection

```ts
// selected: Array<{ annotation: ImageAnnotation, editable: boolean }>
// pointerEvent: PointerEvent
const { selected, pointerEvent } = useSelection();
```
Returns the current selection state. If selection happened via a user pointer event, the event is included.

#### useAnnotatorUser
Returns the current annotator user set via the `anno.setUser()` method, if any.

```tsx
const user: User = useAnnotatorUser();
```