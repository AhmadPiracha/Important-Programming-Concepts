## Database

### DDL, DML, DQL, DCL
- **DDL (Data Definition Language)**: CREATE, ALTER, DROP.
- **DML (Data Manipulation Language)**: INSERT, UPDATE, DELETE.
- **DQL (Data Query Language)**: SELECT.
- **DCL (Data Control Language)**: GRANT, REVOKE.

### Indexing & Its Methods
Indexing improves the speed of data retrieval operations. Methods include:
- **B-Tree Indexes**
- **Hash Indexes**
- **Bitmap Indexes**

### Find Employees Hired in the Last n Months
```sql
SELECT * FROM Employees WHERE HireDate >= DATEADD(month, -n, GETDATE());
```

### Deadlock and Methods to Remove It
Deadlock is a situation where two or more transactions are waiting for each other to release resources. Methods to remove it include:
- **Deadlock Prevention**
- **Deadlock Detection and Recovery**
- **Timeouts**

### Anomalies in Database
- **Update Anomaly**
- **Deletion Anomaly**
- **Insertion Anomaly**

### Normalization
Process of organizing data to minimize redundancy. Forms include:
1. **1NF (First Normal Form)**
2. **2NF (Second Normal Form)**
3. **3NF (Third Normal Form)**
4. **BCNF (Boyce-Codd Normal Form)**

### Joins and Its Types
- **Inner Join**
- **Left Join (Left Outer Join)**
- **Right Join (Right Outer Join)**
- **Full Join (Full Outer Join)**
- **Cross Join**

### Difference between Truncate and Drop
- **Truncate**: Removes all rows from a table without logging individual row deletions.
- **Drop**: Removes the table definition and all its data.

### Composite Key, Primary Key, Foreign Key
- **Composite Key**: A key that consists of two or more columns.
- **Primary Key**: Uniquely identifies each record in a table.
- **Foreign Key**: A field in one table that uniquely identifies a row of another table.

### Relationships
- **One-to-One**
- **One-to-Many**
- **Many-to-One**
- **Many-to-Many**

### Transaction, Commit & Rollback
- **Transaction**: A sequence of database operations that are treated as a single unit.
- **Commit**: Saves the transaction changes.
- **Rollback**: Reverts the transaction changes.

### Views & Triggers
- **View**: A virtual table based on the result-set of an SQL query.
- **Trigger**: A database procedure that is automatically executed in response to certain events on a particular table or view.

### ACID Properties
- **Atomicity**
- **Consistency**
- **Isolation**
- **Durability**

### SQL Queries
Examples:
```sql
SELECT * FROM Employees;
INSERT INTO Employees (Name, Age) VALUES ('John Doe', 30);
UPDATE Employees SET Age = 31 WHERE Name = 'John Doe';
DELETE FROM Employees WHERE Name = 'John Doe';
```

### Stored Procedures
A stored procedure is a prepared SQL code that you can save and reuse.

### Subqueries
A subquery is a query within another query.
