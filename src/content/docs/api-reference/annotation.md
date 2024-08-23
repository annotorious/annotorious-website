---
title: Annotation
---

The `Annotation` interface represents an annotation in Annotorious. 

```ts
interface Annotation {
  id: string;
  target: AnnotationTarget;
  bodies: AnnotationBody[];
  properties?: {
    [key: string]: any;
  }
}
```

The Annotorious model aligns closely with the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/), but has a few key differences and simplifications [which are 
explained in detail in this guide](/guides/data-model/).

## Example

Here's an example of a typical annotation object:

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

### id

- Type: __string__

A unique identifier for the annotation. Note that Annotorious will automatically 
insert a UUID if you supply annotations without ID to the 
[loadAnnotations](/api-reference/image-annotator#load-annotations),
[setAnnotations](/api-reference/image-annotator#set-annotations) or
[addAnnotation](/api-reference/image-annotator#add-annotations) methods.

### target

- Type: [AnnotationTarget](#annotation-target) 

Describes the part of the image that is being annotated. 

### bodies

- Type: [AnnotationBody](#annotation-body)[]

An array of bodies associated with this annotation. Bodies carry the 
payload of the annotation, such as comments, tags, or other metadata.

### properties

- Type: `{ [key: string]: any }`
- Optional

An object that can hold any custom properties you want to associate with the annotation.

## AnnotationTarget

The `AnnotationTarget` interface represents the part of the image being annotated.

```ts
interface AnnotationTarget {
  annotation: string;
  selector: AbstractSelector;
  creator?: User;
  created?: Date;
  updatedBy?: User;
  updated?: Date;
}
```

### annotation

- Type: __string__

For the purpose of internal state management, Annotorious records the ID of the parent
annotation in this field. Note that Annotorious will fill this field automatically if
you provide an AnnotationTarget without an `annotation` field through the 
[loadAnnotations](/api-reference/image-annotator#load-annotations),
[setAnnotations](/api-reference/image-annotator#set-annotations) or
[addAnnotation](/api-reference/image-annotator#add-annotations) methods.

### selector

- Type: __Shape__

Describes the exact area of the image being annotated. The structure of the selector 
depends on the shape type (e.g., rectangle, polygon).

### creator

- Type: [User](/api-reference/user) 
- Optional

The creator of this annotation target.

### created

- Type: __Date__
- Optional

The timestamp of the target's creation.

### updatedBy

- Type: [User](/api-reference/user) 
- Optional

The user who last updated this annotation target.

### updated

- Type: __Date__
- Optional

The timestamp the annotation target was last updated.

## AnnotationBody

The `AnnotationBody` interface represents a piece of content associated with an annotation.

```ts
interface AnnotationBody {
  id: string;
  annotation: string;
  type?: string;
  purpose?: typeof PurposeValues[number] | string;
  value?: string;
  creator?: User;
  created?: Date;
  updatedBy?: User;
  updated?: Date;
}
```

### id

- Type: __string__

A globally unique UUID for the body.

### annotation

- Type: __string__

For the purpose of internal state management, Annotorious records the ID of the parent
annotation in this field. Note that Annotorious will fill this field automatically if
you provide an AnnotationBody without an `annotation` field through the 
[loadAnnotations](/api-reference/image-annotator#load-annotations),
[setAnnotations](/api-reference/image-annotator#set-annotations) or
[addAnnotation](/api-reference/image-annotator#add-annotations) methods.

### type

- Type: __string__
- Optional

The type of the body content (e.g., `TextualBody`).

### purpose

- Type: [Purpose](#purpose) | string
- Option

The purpose of the body. Can be one of the predefined purposes, or any custom string.

### value

- Type: __string__
- Optional

The content of the body (e.g. a comment text or tag).

### creator

- Type: [User](/api-reference/user) 
- Optional

The creator of this annotation body.

### created

- Type: __Date__
- Optional

The timestamp of the body's creation.

### updatedBy

- Type: [User](/api-reference/user) 
- Optional

The user who last updated this annotation body.

### updated

- Type: __Date__
- Optional

The timestamp the annotation body was last updated.

## Purpose

You can use any string of your choice for the `purpose` field of the 
`AnnotationBody`. However, it is recommended to use the purpose values
predefined in the W3C model for better interoperability with other
systems.

For convenience, Annotorious provides IDE auto-complete support for 
these standard purposes:

```ts
const purposes =[ 
  'assessing', 
  'bookmarking', 
  'classifying', 
  'commenting', 
  'describing',
  'editing', 
  'highlighting', 
  'identifying', 
  'linking', 
  'moderating',
  'questioning', 
  'replying', 
  'tagging'
];
```