---
title: Filter
---

A Filter is a function to control whether an annotation should be made visible
or not. The function receives the [ImageAnnotation](/api-reference/image-annotation/)
as an input argument and must return a boolean value: `true` if the annotation should
be visible, `false` otherwise.

You can set the filter on your annotator instance via the [setFilter](/api-reference/image-annotator#setfilter) 
method. 

```ts
anno.setFilter((annotation) => {
  // Get the first 'tagging' body
  const label = annotation.bodies.find(b => b.purpose === 'tagging')?.value;

  // Display the annotation is the first tag is 'important'
  return label === 'important';
});
```