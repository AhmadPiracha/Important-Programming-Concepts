Let's break down the answers to each of these questions:

### Database

1. **Draw an ERD (Entity-Relationship Diagram) for the given scenario**:
   - Entities: Stores, Products, Orders, Payments.
   - Associations: 
     - A Store has multiple Products.
     - A Product is available in multiple Stores.
     - A Product can have multiple Orders.
     - An Order can have multiple Payments.

   ![ERD](https://i.imgur.com/4RHLu6a.png)

2. **Bridge Entity**:
   - A bridge entity is used to break down many-to-many relationships into two one-to-many relationships. For example, the relationship between Stores and Products can be broken down using a StoreProducts bridge entity.

3. **4th Max Salary**:
   ```sql
   SELECT DISTINCT salary 
   FROM employees 
   ORDER BY salary DESC 
   LIMIT 1 OFFSET 3;
   ```
   - The `DISTINCT` keyword ensures we get unique salary values, avoiding duplicates. Another way is to use a subquery:
     ```sql
     SELECT salary 
     FROM employees 
     WHERE salary = (SELECT DISTINCT salary 
                     FROM employees 
                     ORDER BY salary DESC 
                     LIMIT 1 OFFSET 3);
     ```

4. **Why Indexing?**:
   - Indexing improves the speed of data retrieval operations.
   - Creating an index:
     ```sql
     CREATE INDEX idx_employee_salary ON employees(salary);
     ```
   - Columns commonly used in search conditions or JOIN clauses are preferred for indexing.

5. **Difference between GET and POST**:
   - GET: Used to request data from a server. Parameters are sent in the URL.
   - POST: Used to send data to the server. Parameters are sent in the request body.

6. **What is a header in an HTTPS request?**:
   - Headers are key-value pairs sent with an HTTP request or response, containing metadata such as content type, authorization tokens, etc.

7. **Define Indexing**:
   - Indexing is a database optimization technique to improve query performance.
   - Yes, indexing is helpful for tables with millions of records as it speeds up the retrieval of records.

8. **Clustered vs. Non-clustered Index**:
   - Clustered Index: Sorts and stores the data rows in the table based on the key values.
   - Non-clustered Index: Creates a separate structure from the data rows and contains pointers to the data rows.

9. **Triggers**:
   - Triggers are database operations that automatically execute in response to certain events on a table or view.

10. **Stored Procedures**:
    - Stored procedures are precompiled collections of SQL statements stored under a name and processed as a unit.

11. **Views**:
    - Views are virtual tables created by querying one or more tables.

12. **Query to return the 2nd last record of a table**:
    ```sql
    SELECT * 
    FROM employees 
    ORDER BY id DESC 
    LIMIT 1 OFFSET 1;
    ```

13. **Find the maximum salary for each department**:
    ```sql
    SELECT department, MAX(salary) 
    FROM employees 
    GROUP BY department;
    ```

14. **SQL Constraints**:
    - Constraints enforce rules on data columns, such as PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, and CHECK.

15. **Difference between GROUP BY and ORDER BY**:
    - GROUP BY: Aggregates data based on one or more columns.
    - ORDER BY: Sorts data based on one or more columns.

16. **Scalar and Aggregate Functions**:
    - Scalar Functions: Operate on single values (e.g., UPPER, LOWER).
    - Aggregate Functions: Operate on sets of values (e.g., SUM, COUNT).

17. **ERD for Stores, Products, Orders, Payments**:
    ![ERD](https://i.imgur.com/4RHLu6a.png)

18. **Join vs Subquery**:
    - Join: Combines rows from two or more tables based on a related column.
    - Subquery: A query nested inside another query.

19. **Right Outer Join using Left Outer Join**:
    ```sql
    SELECT * 
    FROM table1 
    LEFT JOIN table2 
    ON table1.id = table2.id
    UNION
    SELECT * 
    FROM table2 
    LEFT JOIN table1 
    ON table1.id = table2.id;
    ```

20. **Can we do GET, POST, PUT, DELETE using POST only?**:
    - Technically, you can use POST to achieve similar results by adding an action parameter in the request body to indicate the type of operation.

21. **Default port of HTTP and HTTPS**:
    - HTTP: 80
    - HTTPS: 443

22. **Join query on 3 tables**:
    ```sql
    SELECT * 
    FROM table1 
    JOIN table2 
    ON table1.id = table2.id 
    JOIN table3 
    ON table2.id = table3.id;
    ```

23. **4 maximum salary**:
    - Same as question 3.

24. **Return 2nd last node**:
    - This question pertains to linked lists. You can iterate to the second last node using a loop in a programming language.

25. **Types of Polymorphism**:
    - Compile-time (method overloading)
    - Runtime (method overriding)

26. **Real-life examples of OOP's Pillars**:
    - Encapsulation: A car's engine.
    - Inheritance: A smartphone inheriting properties from a mobile phone.
    - Polymorphism: A person acting as a student, employee, and friend.
    - Abstraction: Using a TV remote without knowing its internal workings.

27. **Return nth to last node**:
    - Use a two-pointer technique to find the nth to last node in a linked list.

28. **Transaction**:
    - A transaction is a sequence of operations performed as a single logical unit of work.

29. **Linked List with next and bottom pointer**:
    - Traverse both `next` and `bottom` pointers, summing the data of all nodes.

30. **Difference between Composition and Aggregation**:
    - Composition: Strong lifecycle dependency between parent and child.
    - Aggregation: Weak lifecycle dependency.

31. **Find maximum salary for each department**:
    - Same as question 13.

32. **Can we replace right join with left join**:
    - Yes, by swapping the tables in the left join.