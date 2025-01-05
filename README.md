# TypeScript Type Error

This repository demonstrates a subtle type error in TypeScript that isn't caught during compilation. The `add` function is defined to accept two numbers, but the code calls the function with a string as the second argument.  While this will cause a runtime error, the TypeScript compiler doesn't flag it as an error.

The solution demonstrates how to make the type check more robust using union types or type guards.