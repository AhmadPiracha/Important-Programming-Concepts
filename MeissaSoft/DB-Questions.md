1. **Database and DBMS:**
   - A **database** is a structured collection of data organized and stored for easy retrieval and manipulation. Databases can store various types of information, such as customer records, product details, or financial data.
   - A **Database Management System (DBMS)** is software used to manage, manipulate, and interact with a database. It provides tools and functionalities for creating, querying, updating, and maintaining databases. Popular DBMSs include MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.

2. **Types of Keys:**
   - **Primary Key:** A primary key is a unique identifier for a record in a table. It ensures that each record in the table is distinct.
   - **Foreign Key:** A foreign key is a field in one table that links to the primary key in another table, establishing a relationship between the tables.
   - **Unique Key:** A unique key enforces uniqueness for a column but allows null values.
   - **Composite Key:** A composite key is a combination of two or more columns that together act as a unique identifier.
   - **Candidate Key:** A candidate key is a set of attributes that could be used as a primary key.
   - **Super Key:** A super key is a set of attributes that uniquely identifies a tuple in a relation.

3. **Truncate vs Delete:**
   - **Truncate:** Truncate is a DDL (Data Definition Language) command used to quickly delete all the rows from a table. It is faster than DELETE but doesn't generate individual row-level delete statements and can't be rolled back.
   - **Delete:** Delete is a DML (Data Manipulation Language) command used to remove specific rows from a table. It is slower than TRUNCATE and generates individual delete statements for each row. It can be rolled back if used within a transaction.

4. **Indexing (Concept, Advantages, and Disadvantages):**
   - **Concept:** Indexing is a database optimization technique that enhances the speed of data retrieval operations on a table by creating a data structure that allows quick lookups based on indexed columns.
   - **Advantages:** Faster data retrieval, reduced I/O operations, improved query performance.
   - **Disadvantages:** Increased storage requirements, slower data modification operations (inserts, updates, deletes), maintenance overhead.

5. **SQL Injection:**
   - SQL injection is a type of cybersecurity vulnerability that occurs when an attacker inserts malicious SQL code into an input field or parameter of a web application. This code can manipulate the application's database, potentially leading to unauthorized access, data theft, or data manipulation.

6. **How to store password & username in the database:**
   - Passwords should be securely hashed and salted before storing them in the database. Use a secure hashing algorithm (e.g., bcrypt) to protect user passwords. Usernames can be stored in plaintext since they are not sensitive.

7. **JOINS:**
   - JOINS are SQL operations that combine rows from two or more tables based on a related column between them. The main types of JOINs include INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN).

8. **Joins vs Sub-Queries:**
   - JOINS are used to combine rows from different tables based on a related column, creating a result set with multiple columns.
   - Sub-queries (also called sub-selects or nested queries) are queries nested within another query and return a single value or result set that can be used in the main query.

9. **Relational Database (Concept and Method):**
   - A relational database is a type of database that organizes data into structured tables with rows and columns. It follows the principles of the relational model, which defines relationships between tables using keys (primary and foreign keys) and enforces data integrity.

10. **Transaction Block:**
    - A transaction block is a set of one or more SQL statements treated as a single unit of work. It ensures that either all the statements within the block are executed successfully, or none are.

11. **Transaction in Database:**
    - A database transaction is an atomic and isolated sequence of one or more database operations (such as inserts, updates, and deletes) that are treated as a single, indivisible unit. Transactions follow the ACID properties (Atomicity, Consistency, Isolation, Durability) to maintain data integrity.

12. **Nulling the Foreign Key:**
    - To "null" a foreign key means to set the value of the foreign key column to NULL. This can be done through an UPDATE statement in SQL. However, you should be cautious when nulling foreign keys, as it can break referential integrity if not done properly and can lead to orphaned records. It's often better to consider the implications of nulling a foreign key and potentially delete or update related records instead.