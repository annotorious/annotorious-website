---
title: User
---

Represents a user in Annotorious. Used to associate annotations, targets and bodies 
with specific user identities.

```ts
interface User {
  id: string;
  isGuest?: boolean;
  name?: string;
  avatar?: string;
}
```

## Examples

You can set the current user for an Annotorious instance using the [setUser](/api-reference/image-annotator/#setUser) method.
```ts
anno.setUser({
  id: 'jane_doe',
  name: 'Jane Doe',
  avatar: 'https://example.com/jane_doe_avatar.jpg'
});
```

To get the current user, you can use the [getUser](/api-reference/image-annotator/#getUser) method:

```ts
const currentUser = anno.getUser();
console.log(currentUser.name); // Outputs: 'Jane Doe'
```

## User 

### id

- Type: `string`
- Required

A unique identifier for the user. This is the only required field.

### isGuest

- Type: `boolean`
- Optional

Indicates whether the user is a guest or a registered user. This can be used to differentiate between authenticated users and temporary guests.

### name

- Type: `string`
- Optional

The display name of the user. Can be used in the UI to show who created an annotation.

### avatar

- Type: `string`
- Optional

A URL to the user's avatar image. Can be used to display the user's profile picture in the annotation UI.

## Using User Information

User information can be utilized in various ways within Annotorious:

1. **Attribution**: When creating new annotations, the current user's ID is automatically associated with the annotation.

2. **Filtering**: You can use user information to filter annotations, showing only those created by specific users.

```ts
anno.setFilter((annotation) => {
  return annotation.creator.id === 'jane_doe';
});
```

3. **Custom Rendering**: In custom UI components, you can use the user's name and avatar for personalized displays.

4. **Permissions**: Although not built into Annotorious directly, you can use the user information to implement custom permission logic.

```ts
anno.on('createSelection', (selection) => {
  const currentUser = anno.getUser();
  if (currentUser.isGuest) {
    // Prevent guests from creating annotations
    return false;
  }
});
```

Remember to handle cases where optional fields might be undefined. For example, always check if `name` or `avatar` are available before using them in your UI components.