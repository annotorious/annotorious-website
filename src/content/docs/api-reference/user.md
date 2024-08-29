---
title: User
---

Represents a user in Annotorious. Used to associate annotations, targets and bodies 
with specific user identities.

## Examples

You can set the current user for an Annotorious instance using the [setUser](/api-reference/image-annotator/#setuser) method. You should set a User right after initializing Annotorious, and any time the user login status in your application changes. 

```ts
anno.setUser({
  id: 'aboutgeo',
  name: 'Rainer',
  avatar: 'https://example.com/rainer_avatar.jpg'
});
```

To get the current user, you can use the [getUser](/api-reference/image-annotator/#getuser) method:

```ts
const currentUser = anno.getUser();
console.log(currentUser.name); // Outputs: 'Rainer'
```

## Properties

| Property | Type    | Default      | Description                        |
|----------|---------|--------------|------------------------------------|
| id       | string  | __required__ | A unique identifier for the user.  |
| isGuest  | boolean |              | Indicates whether the user is a guest or a registered user. This can be used to differentiate between authenticated users and temporary guests. |
| name     | string  |              | User display name. Can be to show who created an annotation in your UI. |
| avatar   | string  |              | URL to the user's avatar image. Can be used to display a profile picture in the UI. |

## Annotation Attribution

Setting a user object is not required for Annotorious to work. But once a user is
set, Annotorious will automatically insert the user data into any body or target 
that is created or modified.

```ts
{
  id: '7fb76422-3a8c-4c87-bbad-7c8bb68399a0',
  bodies: [{
    purpose: 'commenting',
    value: 'A comment!',
    creator: {
      id: 'aboutgeo',
      name: 'Rainer',
      avatar: 'https://example.com/rainer_avatar.jpg'
    },
    created: 'Fri Aug 23 2024 13:02:44 GMT+0200'
  }]
  target: {
    selector: {
      type: 'RECTANGLE',
      geometry: {
        bounds: {
            minX: 272,
            minY: 169,
            maxX: 393,
            maxY: 259
        },
        x: 272,
        y: 169,
        w: 121,
        h: 90,
      }
    },
    creator: {
      id: 'aboutgeo',
      name: 'Rainer',
      avatar: 'https://example.com/rainer_avatar.jpg'
    },
    created:  'Fri Aug 23 2024 13:02:44 GMT+0200'
  }
}
```

__Note:__ Annotorious uses user data __exclusively__ for inserting it into 
the annotation. It neither provides any authentication functionality itself, 
nor interacts with a login system on your behalf. Authentication and authorization
remains up to your application.