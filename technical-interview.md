## Object-Oriented Programming (OOP)

### Pillars of OOP
1. **Encapsulation**: Bundling data with methods that operate on that data.
   - Example: A class `Person` with private fields `name` and `age`, and public methods to get and set these fields.
   
2. **Inheritance**: Mechanism where one class inherits properties and behavior from another class.
   - Example: Class `Car` inherits from class `Vehicle`.

3. **Polymorphism**: Ability of different classes to be treated as instances of the same class through inheritance.
   - Example: Method `draw()` can be used for both `Circle` and `Square` objects.

4. **Abstraction**: Hiding complex implementation details and showing only the necessary features.
   - Example: A car interface with methods `drive()` and `stop()` without showing the internal engine details.

### Types of Inheritance
1. **Single Inheritance**: A class inherits from one base class.
2. **Multiple Inheritance**: A class inherits from more than one base class.
3. **Multilevel Inheritance**: A class inherits from a base class which itself is derived from another class.
4. **Hierarchical Inheritance**: Multiple classes inherit from a single base class.
5. **Hybrid Inheritance**: Combination of two or more types of inheritance.

### Diamond Problem
- Occurs in multiple inheritance when two classes inherit from the same base class and a derived class inherits from both, leading to ambiguity.
  - Example: `A` → `B`, `A` → `C`, and `B`, `C` → `D`.

### Compile Time & Runtime Polymorphism
- **Compile Time Polymorphism (Static Binding)**: Method overloading, operator overloading.
- **Runtime Polymorphism (Dynamic Binding)**: Method overriding.

### Constructor & Destructor
- **Constructor**: Special method called when an object is instantiated.
  - Example: `Person() { ... }`
- **Destructor**: Method called when an object is destroyed.
  - Example: `~Person() { ... }`

### Access Modifiers
1. **Private**: Accessible only within the class.
2. **Protected**: Accessible within the class and its subclasses.
3. **Public**: Accessible from any other class.

### Static Keyword
- **Class**: Denotes a class that cannot be instantiated.
- **Method**: Belongs to the class rather than any object instance.
- **Field**: Shared among all instances of the class.

### Final Keyword
- **Class**: Class cannot be inherited.
- **Method**: Method cannot be overridden.
- **Field**: Field value cannot be changed once initialized.

### Composition, Aggregation & Association
- **Composition**: Strong ownership, child object does not exist without parent.
- **Aggregation**: Weak ownership, child can exist independently.
- **Association**: Relationship between objects without ownership.

### Multithreading
- Concept of running multiple threads concurrently.
  - Example: `Thread t1 = new Thread(); t1.start();`

### Singleton Pattern & Factory Pattern
- **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access to it.
- **Factory Pattern**: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.

### SOLID Principles
1. **Single Responsibility Principle**: A class should have one, and only one, reason to change.
2. **Open/Closed Principle**: Software entities should be open for extension but closed for modification.
3. **Liskov Substitution Principle**: Objects of a superclass should be replaceable with objects of a subclass.
4. **Interface Segregation Principle**: Clients should not be forced to depend on interfaces they do not use.
5. **Dependency Inversion Principle**: High-level modules should not depend on low-level modules.

### Coupling & Cohesion
- **Coupling**: Degree of interdependence between software modules.
- **Cohesion**: Degree to which elements of a module belong together.

### Abstraction vs Encapsulation
- **Abstraction**: Hiding complexity by providing a simplified interface.
- **Encapsulation**: Hiding internal state and requiring all interaction to be performed through an object's methods.

### Abstract Class vs Interface Class
- **Abstract Class**: Can have both abstract and concrete methods, supports inheritance.
- **Interface Class**: Can only have abstract methods (Java 8 and onwards can have default and static methods), supports multiple inheritance.

### Overriding & Overloading
- **Overriding**: Redefining a method in a subclass.
- **Overloading**: Multiple methods with the same name but different parameters.

### Static & Dynamic Binding
- **Static Binding**: Method calls are resolved at compile time.
- **Dynamic Binding**: Method calls are resolved at runtime.

---

## Data Structure and Algorithms

### Implement Stack using Queue
```python
from queue import Queue

class Stack:
    def __init__(self):
        self.q1 = Queue()
        self.q2 = Queue()
    
    def push(self, x):
        self.q2.put(x)
        while not self.q1.empty():
            self.q2.put(self.q1.get())
        self.q1, self.q2 = self.q2, self.q1
    
    def pop(self):
        if self.q1.empty():
            return None
        return self.q1.get()
```

### Implement Queue using Stack
```python
class Queue:
    def __init__(self):
        self.s1 = []
        self.s2 = []
    
    def enqueue(self, x):
        self.s1.append(x)
    
    def dequeue(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2.pop() if self.s2 else None
```

### Middle of a Linked List
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
```

### Find Linked List is circular or not
```python
def is_circular(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

### Insert/Delete at nth node of Linked List
```python
def insert_nth(head, n, val):
    new_node = ListNode(val)
    if n == 0:
        new_node.next = head
        return new_node
    current = head
    for _ in range(n - 1):
        if not current:
            return head
        current = current.next
    new_node.next = current.next
    current.next = new_node
    return head

def delete_nth(head, n):
    if n == 0:
        return head.next
    current = head
    for _ in range(n - 1):
        if not current.next:
            return head
        current = current.next
    current.next = current.next.next
    return head
```

### Merge two Linked Lists
```python
def merge_two_lists(l1, l2):
    dummy = ListNode()
    tail = dummy
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 if l1 else l2
    return dummy.next
```

### Reverse a Linked List
```python
def reverse_list(head):
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
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def insert_bst(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    return root

def search_bst(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return search_bst(root.left, val)
    return search_bst(root.right, val)
```

### Sorting Algorithms
1. **Bubble Sort**
2. **Selection Sort**
3. **Insertion Sort**
4. **Merge Sort**
5. **Quick Sort**
6. **Heap Sort**

### Complexities & Stability of Sorting Algorithms
- **Bubble Sort**: O(n^2), Stable
- **Selection Sort**: O(n^2), Unstable
- **Insertion Sort**: O(n^2), Stable
- **Merge Sort**: O(n log n), Stable
- **Quick Sort**: O(n log n), Unstable
- **Heap Sort**: O(n log n), Unstable

### Difference between List, Array & Vector
- **List**: Dynamic size, non-contiguous memory.
- **Array**: Fixed

 size, contiguous memory.
- **Vector**: Dynamic size, contiguous memory (C++ specific).

### Expression Evaluation
1. **Infix**: `(a + b) * c`
2. **Prefix**: `* + a b c`
3. **Postfix**: `a b + c *`

### BFS & DFS
```python
def bfs(graph, start):
    visited = set()
    queue = [start]
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.add(node)
            queue.extend(graph[node] - visited)
    return visited

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for next in graph[start] - visited:
        dfs(graph, next, visited)
    return visited
```

### Check if a Graph is a Tree or not
- A graph is a tree if it has no cycles and is connected.

### Hashmap
- Key-value pair data structure with efficient insertion, deletion, and lookup.

### Infix, Prefix and Postfix notations
- **Infix**: Operators between operands.
- **Prefix**: Operators before operands.
- **Postfix**: Operators after operands.

### Heap
- Binary heap: A complete binary tree used for priority queues.

---

## Database

### DDL, DML, DQL, DCL
1. **DDL (Data Definition Language)**: `CREATE`, `ALTER`, `DROP`
2. **DML (Data Manipulation Language)**: `INSERT`, `UPDATE`, `DELETE`
3. **DQL (Data Query Language)**: `SELECT`
4. **DCL (Data Control Language)**: `GRANT`, `REVOKE`

### Indexing & its methods
- **Indexing**: Speeds up data retrieval operations.
- Methods: B-tree, Hash, Bitmap.

### Find the Employees who hired in the Last n months
```sql
SELECT * FROM Employees WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL n MONTH);
```

### Deadlock and methods to remove it
- **Deadlock**: Two or more transactions prevent each other from proceeding.
- **Methods to Remove**: Deadlock detection, prevention, avoidance.

### Anomalies in Database
1. **Update Anomaly**
2. **Delete Anomaly**
3. **Insert Anomaly**

### Normalization
- Process of organizing data to reduce redundancy and improve data integrity.

### Joins and its Types

**Inner Join**
- Combines rows from two tables where there is a match in both tables.
- Example: `SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;`

**Left Join (Left Outer Join)**
- Returns all rows from the left table and the matched rows from the right table. If no match, NULLs are returned for columns of the right table.
- Example: `SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;`

**Right Join (Right Outer Join)**
- Returns all rows from the right table and the matched rows from the left table. If no match, NULLs are returned for columns of the left table.
- Example: `SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;`

**Full Outer Join**
- Returns all rows when there is a match in one of the tables. Rows that do not have a match in either table are filled with NULLs.
- Example: `SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.id = table2.id;`

**Cross Join**
- Returns the Cartesian product of the two tables, combining each row of the first table with each row of the second table.
- Example: `SELECT * FROM table1 CROSS JOIN table2;`

### Difference between Truncate and Drop
- **Truncate**: Removes all rows from a table, cannot be rolled back.
- **Drop**: Removes the table and its structure.

### Composite Key, Primary Key, Foreign Key
- **Composite Key**: A key that consists of two or more columns.
- **Primary Key**: Uniquely identifies a record.
- **Foreign Key**: Refers to the primary key in another table.

### Relationships
1. **One-to-One**
2. **One-to-Many**
3. **Many-to-Many**

### Transaction, Commit & Rollback
- **Transaction**: A sequence of operations performed as a single logical unit.
- **Commit**: Saves the changes made in a transaction.
- **Rollback**: Reverts changes made in a transaction.

### Views & Triggers
- **Views**: Virtual tables created by querying data from one or more tables.
- **Triggers**: SQL code executed in response to certain events on a table.

### ACID Properties
1. **Atomicity**: Transactions are all-or-nothing.
2. **Consistency**: Transactions leave the database in a valid state.
3. **Isolation**: Transactions do not interfere with each other.
4. **Durability**: Committed transactions are permanent.

### SQL Queries
- Examples: `SELECT`, `INSERT`, `UPDATE`, `DELETE`

### Stored Procedures
- SQL code that can be saved and reused.

### Subqueries
- Nested queries within a main query.

---

## Additional Questions

### SDLC Models
1. **Waterfall Model**
2. **Agile Model**
3. **Spiral Model**
4. **V-Model**
5. **Incremental Model**

### SDLC Phases
1. **Requirement Analysis**
2. **Design**
3. **Implementation**
4. **Testing**
5. **Deployment**
6. **Maintenance**

### Scrum Framework
- **Scrum Roles**: Product Owner, Scrum Master, Development Team
- **Scrum Artifacts**: Product Backlog, Sprint Backlog, Increment
- **Scrum Events**: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective

### Whitebox, Greybox and Blackbox Testing
- **Whitebox Testing**: Testing internal structures or workings of an application.
- **Greybox Testing**: Combination of whitebox and blackbox testing.
- **Blackbox Testing**: Testing functionality without internal knowledge.

### Scheduling Algorithms
1. **First-Come, First-Served (FCFS)**
2. **Shortest Job Next (SJN)**
3. **Priority Scheduling**
4. **Round Robin (RR)**
5. **Multilevel Queue Scheduling**

### MVC Framework
- **Model-View-Controller (MVC)**: Architectural pattern for implementing user interfaces.

### Unit testing & Integration Testing
- **Unit Testing**: Testing individual components.
- **Integration Testing**: Testing combined parts of an application.

### HTTP Session
- Mechanism to maintain state between client and server.

### TCP/IP model vs OSI model
- **TCP/IP Model**: 4 layers (Application, Transport, Internet, Network Access)
- **OSI Model**: 7 layers (Application, Presentation, Session, Transport, Network, Data Link, Physical)

### SOAP vs Restful API
- **SOAP**: Protocol for exchanging structured information, uses XML.
- **REST**: Architectural style, uses HTTP methods (GET, POST, PUT, DELETE).

### Check if a string is a palindrome or not
```python
def is_palindrome(s):
    return s == s[::-1]
```

### POST & GET Request
- **GET**: Requests data from a server.
- **POST**: Submits data to be processed to a server.

### Cookies
- Data stored on the client side to maintain stateful information.

### Program to print a Fibonacci series
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
```

### Program to print a Factorial of a number
```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

---

Certainly! Below are the pseudocode versions for the coding problems listed.

---

## Data Structure and Algorithms

### Implement Stack using Queue
```pseudo
class Stack:
    function initialize():
        queue1 = new Queue()
        queue2 = new Queue()

    function push(value):
        queue2.enqueue(value)
        while queue1 is not empty:
            queue2.enqueue(queue1.dequeue())
        swap(queue1, queue2)

    function pop():
        if queue1 is empty:
            return null
        return queue1.dequeue()
```

### Implement Queue using Stack
```pseudo
class Queue:
    function initialize():
        stack1 = new Stack()
        stack2 = new Stack()

    function enqueue(value):
        stack1.push(value)

    function dequeue():
        if stack2 is empty():
            while stack1 is not empty():
                stack2.push(stack1.pop())
        if stack2 is empty():
            return null
        return stack2.pop()
```

### Middle of a Linked List
```pseudo
function find_middle(head):
    slow = head
    fast = head
    while fast is not null and fast.next is not null:
        slow = slow.next
        fast = fast.next.next
    return slow
```

### Find Linked List is circular or not
```pseudo
function is_circular(head):
    slow = head
    fast = head
    while fast is not null and fast.next is not null:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return true
    return false
```

### Insert/Delete at nth node of Linked List
```pseudo
function insert_nth(head, n, value):
    new_node = new ListNode(value)
    if n == 0:
        new_node.next = head
        return new_node
    current = head
    for i from 0 to n-1:
        if current is null:
            return head
        current = current.next
    new_node.next = current.next
    current.next = new_node
    return head

function delete_nth(head, n):
    if n == 0:
        return head.next
    current = head
    for i from 0 to n-1:
        if current.next is null:
            return head
        current = current.next
    current.next = current.next.next
    return head
```

### Merge two Linked Lists
```pseudo
function merge_two_lists(l1, l2):
    dummy = new ListNode()
    tail = dummy
    while l1 is not null and l2 is not null:
        if l1.value < l2.value:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    if l1 is not null:
        tail.next = l1
    else:
        tail.next = l2
    return dummy.next
```

### Reverse a Linked List
```pseudo
function reverse_list(head):
    previous = null
    current = head
    while current is not null:
        next_node = current.next
        current.next = previous
        previous = current
        current = next_node
    return previous
```

### Binary Search Tree
```pseudo
class TreeNode:
    function initialize(value):
        this.value = value
        this.left = null
        this.right = null

function insert_bst(root, value):
    if root is null:
        return new TreeNode(value)
    if value < root.value:
        root.left = insert_bst(root.left, value)
    else:
        root.right = insert_bst(root.right, value)
    return root

function search_bst(root, value):
    if root is null or root.value == value:
        return root
    if value < root.value:
        return search_bst(root.left, value)
    return search_bst(root.right, value)
```

### BFS & DFS
```pseudo
function bfs(graph, start):
    visited = new Set()
    queue = new Queue()
    queue.enqueue(start)
    while queue is not empty:
        node = queue.dequeue()
        if node not in visited:
            visited.add(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.enqueue(neighbor)
    return visited

function dfs(graph, start, visited = new Set()):
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited
```

### Check if a Graph is a Tree or not
```pseudo
function is_tree(graph):
    start = get_any_node_from_graph(graph)
    visited = bfs(graph, start)
    if size(visited) != size(graph):
        return false
    return has_no_cycles(graph, start)

function has_no_cycles(graph, node, parent = null, visited = new Set()):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            if has_no_cycles(graph, neighbor, node, visited):
                return true
        elif neighbor != parent:
            return false
    return true
```

### Check if a string is a palindrome or not
```pseudo
function is_palindrome(s):
    return s == reverse(s)

function reverse(s):
    reversed_string = ""
    for char in s:
        reversed_string = char + reversed_string
    return reversed_string
```

### Program to print a Fibonacci series
```pseudo
function fibonacci(n):
    a = 0
    b = 1
    for i from 0 to n-1:
        print(a)
        next_value = a + b
        a = b
        b = next_value
```

### Program to print a Factorial of a number
```pseudo
function factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

---

