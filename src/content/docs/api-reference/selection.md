---
title: Selection
---

Users can select annotations by clicking or tapping. The default behavior of Annotorious is to 
make the selected annotation shape editable, allowing the user to move, resize or change it.

You can customize this behavior via the [userSelectAction init option](/api-reference/image-annotator/#init-options) and
the [setUserSelectAction](/api-reference/image-annotator/#setuserselectaction) method. 

## UserSelectAction

| Value  | Description                                                                       |
|--------|-----------------------------------------------------------------------------------|
| EDIT   | Make the annotation shape editable when selected.                                 |
| SELECT | Change annotation state and trigger the relevant event, but do not make editable. |
| NONE   | Make the annotation inert. Clicking or tapping has no effect.                     |

## Examples

```js
const anno = createImageAnnotator('sample-image', {
  userSelectAction: 'SELECT' // Allow selection, but don't make editable
});
```

You can also supply a function that takes an [ImageAnnotation](/api-reference/image-annotation) as input
and returns a UserSelectAction.

```js
const anno = createImageAnnotator('sample-image', {
  // Only allow me to edit my own annotations
  userSelectAction: (annotation) => {
    const isMe = annotation.target.creator?.id === 'aboutgeo';
    return isMe ? 'EDIT' : 'SELECT';
  } 
});
```

### TypeScript

A note for TypeScript users: UserSelectAction is also available as an enum for type safety.

```ts
import { createImageAnnotator, UserSelectAction } from '@annotorious/annotorious';

const anno = createImageAnnotator('sample-image', {
  userSelectAction: SelectAction.EDIT
});
```
