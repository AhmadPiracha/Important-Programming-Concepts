- **Encapsulation**: Bundling data with the methods that operate on that data, restricting direct access to some of the object's components.
- **Abstraction**: Hiding the complex reality while exposing only the necessary parts. It simplifies the complexity of the system.
- **Inheritance**: Mechanism where a new class inherits properties and behavior (methods) from an existing class.
- **Polymorphism**: Ability of different classes to be treated as instances of the same class through a common interface. It includes method overriding and method overloading.

- **Function Overloading**: Allowing multiple methods/functions with the same name but different parameters within the same scope.

- **Function Overriding**: Allowing a derived class to provide a specific implementation of a method that is already defined in its base class.

- **Aggregation**: A special form of association where the child can exist independently of the parent.

- **Composition**: A strong form of aggregation where the child cannot exist independently of the parent.

- **Operator Overloading**: A feature that allows you to define custom behaviors for operators when they are used with user-defined types. This helps to make the operations involving those types more intuitive.

- **Operator Overriding**: Not a standard or applicable term. The correct concept related to operators in the context of customization is overloading, not overriding.

- **Static Polymorphism**: Compile-time polymorphism achieved through method overloading and operator overloading.
- **Dynamic Polymorphism**: Runtime polymorphism achieved through method overriding using virtual functions.

- **Array**: Fixed size, contiguous memory, random access.
- **LinkedList**: Dynamic size, non-contiguous memory, sequential access.

- **Stack**: LIFO (Last In First Out).
- **Queue**: FIFO (First In First Out).

- **Tree**: Hierarchical structure with parent-child relationships. No cycles.
- **Graph**: Network structure with nodes and edges. Can have cycles.

- **Recursion**: A function calls itself to solve smaller instances of the same problem.
  ```cpp
  int factorial(int n) {
      if (n <= 1) return 1;
      else return n * factorial(n - 1);
  }
  ```

- **Common Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Radix Sort.

- **Primary Key**: Unique identifier for a record.
- **Foreign Key**: Key used to link two tables.
- **Candidate Key**: A column, or set of columns, that can qualify as a primary key.
- **Composite Key**: A key composed of two or more columns.

- **Truncate**: Removes all rows from a table without logging individual row deletions. Faster, cannot be rolled back.
- **Delete**: Removes rows one at a time and logs each deletion. Can be rolled back.

- **Indexing**: A data structure that improves the speed of data retrieval.
  - **Advantages**: Faster searches, improved performance for queries.
  - **Disadvantages**: Requires additional storage, can slow down write operations.

- **SQL Injection**: A code injection technique that might destroy your database. It is one of the most common web hacking techniques.
  - **Prevention**: Use prepared statements, parameterized queries, and stored procedures.

- **Relational Database**: A database structured to recognize relations among stored items of information.
    - **Method**: Tables (relations) with rows (tuples) and columns (attributes).

- **JOINS**: Combine rows from two or more tables based on a related column.
  - **Types**: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.

- **Joins**: Combine data from multiple tables in a single query.
- **Sub-Queries**: Nested queries within a main query.
