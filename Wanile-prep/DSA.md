## Data Structure and Algorithms

### Implement Stack using Queue
```python
from collections import deque

class StackUsingQueue:
    def __init__(self):
        self.q1 = deque()
        self.q2 = deque()

    def push(self, x):
        self.q1.append(x)

    def pop(self):
        while len(self.q1) > 1:
            self.q2.append(self.q1.popleft())
        popped = self.q1.popleft()
        self.q1, self.q2 = self.q2, self.q1
        return popped

    def top(self):
        return self.q1[-1]

    def empty(self):
        return not self.q1
```

### Implement Queue using Stack
```python
class QueueUsingStack:
    def __init__(self):
        self.s1 = []
        self.s2 = []

    def enqueue(self, x):
        self.s1.append(x)

    def dequeue(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2.pop()

    def front(self):
        if self.s2:
            return self.s2[-1]
        return self.s1[0]

    def empty(self):
        return not (self.s1 or self.s2)
```

### Middle of a Linked List
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def findMiddle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow.val
```

### Find if Linked List is Circular
```python
def isCircular(head):
    if not head:
        return False
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

### Insert/Delete at nth Node of Linked List
```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def insertNth(head, n, x):
    new_node = ListNode(x)
    if n == 0:
        new_node.next = head
        return new_node
    current = head
    for _ in range(n-1):
        current = current.next
    new_node.next = current.next
    current.next = new_node
    return head

def deleteNth(head, n):
    if n == 0:
        return head.next
    current = head
    for _ in range(n-1):
        current = current.next
    current.next = current.next.next
    return head
```

### Merge Two Linked Lists
```python
def mergeTwoLists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 if l1 else l2
    return dummy.next
```

### Reverse a Linked List
```python
def reverseList(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev
```

### Binary Search Tree
A binary search tree (BST) is a node-based binary tree data structure where each node has at most two children, referred to as the left child and the right child. For each node:
- The left subtree contains only nodes with keys less than the node’s key.
- The right subtree contains only nodes with keys greater than the node’s key.

### Sorting Algorithms
1. **Bubble Sort**: Repeatedly swap adjacent elements if they are in the wrong order.
2. **Selection Sort**: Select the smallest element from the unsorted portion and swap it with the first unsorted element.
3. **Insertion Sort**: Build the final sorted array one item at a time, inserting each item into its proper position.
4. **Merge Sort**: Divide the array into halves, sort each half, and merge them.
5. **Quick Sort**: Pick a pivot, partition the array around the pivot, and sort the partitions.

### Complexities & Stability of Sorting Algorithms
- **Bubble Sort**: O(n^2), Stable
- **Selection Sort**: O(n^2), Not Stable
- **Insertion Sort**: O(n^2), Stable
- **Merge Sort**: O(n log n), Stable
- **Quick Sort**: O(n log n), Not Stable (worst-case O(n^2))

### Difference between List, Array & Vector
- **List**: Dynamic size, allows insertion/deletion from the middle, elements are not contiguous in memory.
- **Array**: Fixed size, contiguous memory, efficient access by index.
- **Vector**: Dynamic array with automatic resizing, contiguous memory, efficient access by index.

### Expression Evaluation
- **Infix**: Operators are between operands (e.g., A + B).
- **Prefix**: Operators precede their operands (e.g.,

 +AB).
- **Postfix**: Operators follow their operands (e.g., AB+).

### BFS & DFS
- **BFS (Breadth-First Search)**: Explores all nodes at the present depth level before moving on to nodes at the next depth level.
- **DFS (Depth-First Search)**: Explores as far as possible along each branch before backtracking.

### Check if a Graph is a Tree
A graph is a tree if it is connected and acyclic.

### Hashmap
A data structure that implements an associative array, a structure that can map keys to values using a hash function.

### Infix, Prefix, and Postfix Notations
- **Infix**: A + B
- **Prefix**: +AB
- **Postfix**: AB+

### Heap
A specialized tree-based data structure that satisfies the heap property: in a max heap, for any given node I, the value of I is greater than or equal to the values of its children, and in a min heap, the value of I is less than or equal to the values of its children.