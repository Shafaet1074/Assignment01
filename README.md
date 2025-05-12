# Interface vs Type in TypeScript

Both `interface` and `type` are used to define object shapes in TypeScript, but they have some key differences:

- ✅ `interface` supports **declaration merging**; `type` does not.
- ✅ `type` can represent **unions**, **tuples**, and **primitives**; `interface` cannot.
- ✅ `interface` extends with `extends`; `type` uses `&` (intersection).
- ✅ `type` is more flexible for complex types, while `interface` is ideal for object contracts.

**Use `interface`** for objects and OOP-style code.  
**Use `type`** for unions, intersections, and primitives.
