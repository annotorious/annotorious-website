---
title: Selection
---

## UserSelectAction

The `userSelectAction` prop controls the behavior when a user clicks or taps on an annotation. Valid values for selectAction are `EDIT`, `SELECT`, and `NONE`.

- __EDIT__ makes the annotation editable, allowing the users to modify its shape.

- __SELECT__ ensures that clicking an annotation will trigger the relevant selection lifecycle events of the API. However, the annotation will not become editable.

- __NONE__ renders the annotation inert. Clicking on it will have no effect.

You can directly assign one of these values to userSelectAction. For example:

```ts
import { createImageAnnotator, UserSelectAction, W3CImageFormat } from '@annotorious/annotorious';

const anno = createImageAnnotator('sample-image', {
  userSelectAction: SelectAction.EDIT
});
```

Alternatively, you can use a function that dynamically determines the `userSelectAction`` based on annotation properties or other conditions:

```ts
import { createImageAnnotator, UserSelectAction, W3CImageFormat } from '@annotorious/annotorious';

const dynamicSelectAction = (annotation: Annotation) => {
  const isMine = annotation.target.creator.id == 'me';
  return isMine ? UserSelectAction.EDIT : UserSelectAction.SELECT;
};

const anno = createImageAnnotator('sample-image', {
  userSelectAction: dynamicSelectAction
});
```

__Note:__

For TypeScript users, the valid values for `userSelectAction` are provided as enums for type safety. However, in plain JavaScript, you can use the string values ('EDIT', 'SELECT', 'NONE') directly.

