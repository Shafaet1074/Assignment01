# How TypeScript Improves Code Quality and Maintainability?

## ANSWER:

- ✅ **Static Typing**: Catches errors at compile-time instead of runtime.
- ✅ **IntelliSense Support**: Improves developer productivity with auto-complete and documentation.
- ✅ **Clear Contracts**: Interfaces and types make code more readable and self-documenting.
- ✅ **Refactoring Safety**: Easier and safer to rename, move, or change code structure.
- ✅ **Scalability**: Makes large codebases easier to manage and collaborate on.

TypeScript reduces bugs, improves readability, and makes long-term maintenance easier.



# `keyof` in TypeScript

## Purpose
The `keyof` operator creates a union type of all property names (keys) of an object type, enabling type-safe property access.

## Example
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Creates: "id" | "name" | "email"
type UserKeys = keyof User;

function getUserValue(user: User, key: UserKeys) {
  return user[key]; // Type-safe access
}

const currentUser: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const userName = getUserValue(currentUser, "name"); // Valid
const userAge = getUserValue(currentUser, "age"); // Error: "age" doesn't exist
Key Benefits
Prevents accessing non-existent properties

Enables autocomplete for object keys

Works with generics for reusable utilities

Helps create mapped types
