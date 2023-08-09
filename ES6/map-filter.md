Both `map` and `filter` are higher-order functions in JavaScript that operate on arrays, but they serve different purposes:

*Map:*
- The `map` function is used to transform each element of an array by applying a provided function to each element.
- It returns a new array with the same length as the original array, where each element is the result of applying the given function to the corresponding element in the original array.
- The original array remains unchanged.
- Example: You might use `map` to convert an array of numbers into an array of their squares.

*Filter:*
- The `filter` function is used to create a new array containing elements from the original array that satisfy a specific condition.
- It returns a new array that contains only the elements that pass the condition defined by the provided function.
- The original array remains unchanged.
- Example: You could use `filter` to extract all even numbers from an array of integers.

In summary, `map` is used for transforming elements in an array, while `filter` is used for selecting elements based on a condition. Both functions produce new arrays without modifying the original array.