---
title: FormatAdapter
---

A FormatAdapter adds support for a different annotation data format, by introducing crosswalk functionality between Annotorious' internal annotation data model and different standards. 

The only available format adapter at the moment is the `W3CImageFormat` adapter, which changes Annotorious' data 
format to the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).

```js
import { createImageAnnotator, W3CImageFormat } from '@annotorious/annotorious';

const anno = createImageAnnotator('sample-image', {
  adapter: W3CImageFormat()
});
```