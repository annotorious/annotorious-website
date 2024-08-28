---
title: ImageAnnotation
---

The Annotorious image annotation model aligns closely with the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/), but has a few key differences and simplifications [which are 
explained in detail in this guide](/guides/data-model/).

## Example

Here's an example of a typical Annotorious annotation object:

```ts
{
  id: '97d01785-bdc3-46ec-94d6-c03700c72d7c',
  bodies: [
    {
      id: '5883e985-5b62-412b-b114-471b8b77c48d',
      annotation: '97d01785-bdc3-46ec-94d6-c03700c72d7c',
      purpose: 'commenting',
      value: 'This is an interesting area!',
      creator: {
        id: 'aboutgeo',
        name: 'Rainer'
      },
      created: new Date('2023-08-23T10:30:00Z')
    }
  ]
  target: {
    annotation: '97d01785-bdc3-46ec-94d6-c03700c72d7c',
    selector: {
      type: 'RECTANGLE',
      geometry: {
        x: 100,
        y: 100,
        w: 100,
        h: 50
      }
    },
    creator: {
      id: 'aboutgeo',
      name: 'Rainer'
    },
    created: new Date('2023-08-23T10:30:00Z')
  }
};
```

## Properties

| Property   | Type                                            | Default      | Description                         |
|------------|-------------------------------------------------|--------------|-------------------------------------|
| id         | string                                          | __required__ | Unique ID. Will be autp-generated if not provided. |
| target     | [ImageAnnotationTarget](#imageannotationtarget) | __required__ | Defines the annotated image region. |
| bodies     | [AnnotationBody[]](#annotationbody)             | []           | List of annotation bodies.          |
| properties | object                                          |              | Can hold any custom properties you want to associate with the annotation. |

## ImageAnnotationTarget

Represents the target of an image annotation.

| Property  | Type                         | Default      | Description                              |
|-----------|------------------------------|--------------|------------------------------------------|
| annotation| string                       |              | Reference to the parent annotation. Will be auto-generated if not provided. |
| selector  | [Shape](#shape)              | __required__ | Annotated image region shape.            |
| creator   | [User](/api-reference/user/) |              | User who created the annotation.         |
| created   | Date                         |            | Creation timestamp of the annotation.    |
| updatedBy | [User](/api-reference/user/) |              | User who last modified the annotation.   |
| updated   | Date                         |              | Last update timestamp of the annotation. |

## AnnotationBody

Represents a payload body of an annotation.

| Property  | Type                         | Default      | Description                           |
|-----------|------------------------------|--------------|---------------------------------------|
| id        | string                       | __required__ | Unique identifier for the body.       |
| annotation| string                       |              | Reference to the parent annotation. Will be auto-generated if not provided. |
| type      | string                       |              | Annotation body type.                 |
| purpose   | string                       |              | Annotation body [purpose](#purposes). |
| value     | string                       |              | Annotation body value.                |
| creator   | [User](/api-reference/user/) |              | User who created the body.            |
| created   | Date                         |              | Creation timestamp of the body.       |
| updatedBy | [User](/api-reference/user/) |              | User who last modified the body.      |
| updated   | Date                         |              | Last update timestamp of the body.    |

### Purposes

You can use any string of your choice for the `purpose` field of the 
`AnnotationBody`. However, it is recommended to use the purpose values
[predefined in the W3C model](https://www.w3.org/TR/annotation-model/#motivation-and-purpose) 
for better interoperability with other systems.

For convenience, Annotorious provides IDE auto-complete support for 
these standard purposes:

- assessing
- bookmarking
- classifying
- commenting
- describing
- editing
- highlighting
- identifying
- linking
- moderating
- questioning
- replying
- tagging