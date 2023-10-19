DDL (Data Definition Language) and DML (Data Manipulation Language) are two sub-languages in SQL (Structured Query Language) used to interact with databases. Here's an explanation of each:

**DDL (Data Definition Language)**:

DDL is used to define, manage, and modify the structure of the database, including tables, schemas, constraints, indexes, and other database objects. It does not deal with the actual data stored in the database. Common DDL commands include:

1. **CREATE**: Used to create database objects like tables, indexes, views, and more. For example, you can create a table with specific columns and data types.

   ```sql
   CREATE TABLE Customers (
       CustomerID INT,
       FirstName VARCHAR(50),
       LastName VARCHAR(50)
   );
   ```

2. **ALTER**: Used to modify existing database objects. For example, you can add a new column to an existing table or modify the data type of a column.

   ```sql
   ALTER TABLE Customers
   ADD Email VARCHAR(100);
   ```

3. **DROP**: Used to delete database objects like tables, views, or indexes.

   ```sql
   DROP TABLE Customers;
   ```

4. **TRUNCATE**: Removes all data from a table, but keeps the table structure intact.

   ```sql
   TRUNCATE TABLE Customers;
   ```

**DML (Data Manipulation Language)**:

DML is used to manipulate data stored in the database, including querying, inserting, updating, and deleting records. DML commands work with the data within the database objects defined using DDL. Common DML commands include:

1. **SELECT**: Used to query and retrieve data from one or more tables. You can use the SELECT statement to specify which columns you want to retrieve and define conditions for filtering data.

   ```sql
   SELECT FirstName, LastName
   FROM Customers
   WHERE City = 'New York';
   ```

2. **INSERT**: Adds new records into a table. You provide the values for the columns when inserting data.

   ```sql
   INSERT INTO Customers (FirstName, LastName)
   VALUES ('John', 'Doe');
   ```

3. **UPDATE**: Modifies existing records in a table. You specify the table, the columns to update, and the new values.

   ```sql
   UPDATE Customers
   SET City = 'Los Angeles'
   WHERE LastName = 'Doe';
   ```

4. **DELETE**: Removes records from a table based on specified conditions.

   ```sql
   DELETE FROM Customers
   WHERE CustomerID = 5;
   ```

In summary, DDL is focused on defining and modifying the database's structure, while DML is used to manipulate the data stored within those structures. Together, they provide a comprehensive set of tools for managing a database system.


1. **Types of Keys:**
   - **Primary Key Example:**
     ```sql
     CREATE TABLE Students (
         StudentID INT PRIMARY KEY,
         FirstName VARCHAR(50),
         LastName VARCHAR(50)
     );
     ```

   - **Foreign Key Example:**
     ```sql
     CREATE TABLE Courses (
         CourseID INT PRIMARY KEY,
         CourseName VARCHAR(100)
     );

     CREATE TABLE Enrollments (
         EnrollmentID INT PRIMARY KEY,
         StudentID INT,
         CourseID INT,
         FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
         FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
     );
     ```

2. **Truncate vs Delete:**
   - **Truncate Example:**
     ```sql
     TRUNCATE TABLE Students;
     ```

   - **Delete Example:**
     ```sql
     DELETE FROM Students WHERE StudentID = 101;
     ```

3. **Indexing:**
   - **Creating an Index:**
     ```sql
     CREATE INDEX idx_LastName ON Students(LastName);
     ```

4. **SQL Injection:**
   - Imagine a vulnerable login form:
     ```sql
     SELECT * FROM Users WHERE Username = '$username' AND Password = '$password';
     ```

   - An attacker might input the following to manipulate the query:
     ```
     Username: ' OR '1'='1
     Password: anything
     ```

5. **How to store password & username in the database:**
   - Storing a password securely (using Python and the bcrypt library):
     ```python
     import bcrypt

     password = "my_secure_password".encode('utf-8')
     salt = bcrypt.gensalt()
     hashed_password = bcrypt.hashpw(password, salt)
     ```

6. **JOINS:**
   - **INNER JOIN Example:**
     ```sql
     SELECT Orders.OrderID, Customers.CustomerName
     FROM Orders
     INNER JOIN Customers
     ON Orders.CustomerID = Customers.CustomerID;
     ```

7. **Joins vs Sub-Queries:**
   - **JOIN Example:**
     ```sql
     SELECT Customers.CustomerName
     FROM Customers
     INNER JOIN Orders
     ON Customers.CustomerID = Orders.CustomerID;
     ```

   - **Sub-Query Example:**
     ```sql
     SELECT CustomerName
     FROM Customers
     WHERE CustomerID IN (SELECT CustomerID FROM Orders);
     ```

8. **Transaction in Database:**
   - Example using SQL Server (T-SQL):
     ```sql
     BEGIN TRANSACTION;

     -- SQL statements (e.g., INSERT, UPDATE, DELETE)

     COMMIT;
     -- or
     ROLLBACK; -- to undo changes in case of an error
     ```

9. **Nulling the Foreign Key:**
   - Assuming you want to nullify a foreign key relationship in the `Enrollments` table:
     ```sql
     UPDATE Enrollments
     SET StudentID = NULL
     WHERE StudentID = 101;
     ```

These examples should help you better understand these database concepts and operations.