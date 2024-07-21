### Data Structures

## Find the nth element in a linked list from the end

### Pseudocode

1. **Define a function `printNthFromLast`** that takes `head` of the linked list and `n` as inputs.
2. **Initialize `len` to 0**.
3. **Initialize `temp` to `head`**.
4. **Count the number of nodes** in the linked list:
   - While `temp` is not `NULL`:
     - Move `temp` to the next node.
     - Increment `len` by 1.
5. **Check if `n` is greater than `len`**:
   - If true, return (because there are not enough nodes).
6. **Reset `temp` to `head`**.
7. **Find the (len - n + 1)th node** from the beginning:
   - Loop from `i = 1` to `len - n`:
     - Move `temp` to the next node.
8. **Print `temp.data`** (the nth node from the end).
9. **Return** from the function.

### Pseudocode Steps

```plaintext
function printNthFromLast(head, n):
    initialize len to 0
    initialize temp to head

    // Step 1: Count the number of nodes in the linked list
    while temp is not NULL:
        temp = temp.next
        len = len + 1

    // Step 2: Check if value of n is more than length of the linked list
    if len < n:
        return

    // Step 3: Reset temp to head
    temp = head

    // Step 4: Get the (len - n + 1)th node from the beginning
    for i from 1 to len - n:
        temp = temp.next

    // Step 5: Print the data of the nth node from the end
    print(temp.data)

    return
```
