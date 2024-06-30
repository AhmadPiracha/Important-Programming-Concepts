### OOP (Object-Oriented Programming)

#### 1. OOP 4 Concepts
- **Encapsulation**: Bundling data with the methods that operate on that data, restricting direct access to some of the object's components.
- **Abstraction**: Hiding the complex reality while exposing only the necessary parts. It simplifies the complexity of the system.
- **Inheritance**: Mechanism where a new class inherits properties and behavior (methods) from an existing class.
- **Polymorphism**: Ability of different classes to be treated as instances of the same class through a common interface. It includes method overriding and method overloading.

#### 2. Aggregation vs Composition
- **Aggregation**: A special form of association where the child can exist independently of the parent. Example in code:
  ```cpp
  class Engine {
  public:
      void start() { cout << "Engine started" << endl; }
  };

  class Car {
  private:
      Engine* engine; // Car has an Engine
  public:
      Car(Engine* e) : engine(e) {}
      void startCar() { engine->start(); }
  };

  int main() {
      Engine* engine = new Engine();
      Car car(engine);
      car.startCar();
      delete engine;
      return 0;
  }
  ```
- **Composition**: A strong form of aggregation where the child cannot exist independently of the parent. Example in code:
  ```cpp
  class Engine {
  public:
      void start() { cout << "Engine started" << endl; }
  };

  class Car {
  private:
      Engine engine; // Car owns Engine, no Engine outside Car
  public:
      Car() {}
      void startCar() { engine.start(); }
  };

  int main() {
      Car car;
      car.startCar();
      return 0;
  }
  ```

#### 3. Diamond Problem (Why Diamond Problem Doesn't Exist in JAVA)
- **Diamond Problem**: Occurs in multiple inheritance when two classes B and C inherit from A and class D inherits from both B and C.
- **Java Solution**: Java avoids the diamond problem by not supporting multiple inheritance of classes. Instead, it uses interfaces to achieve multiple inheritances.
  ```java
  interface A { void doSomething(); }
  interface B extends A {}
  interface C extends A {}
  class D implements B, C {
      public void doSomething() {
          System.out.println("Doing something");
      }
  }
  ```

#### 4. Function Overloading vs Function Overriding
- **Function Overloading**: Same function name with different parameters within the same class.
  ```cpp
  class Print {
  public:
      void display(int i) { cout << "Integer: " << i << endl; }
      void display(double f) { cout << "Double: " << f << endl; }
  };
  ```
- **Function Overriding**: Same function name and parameters in a base class and a derived class.
  ```cpp
  class Base {
  public:
      virtual void show() { cout << "Base class" << endl; }
  };

  class Derived : public Base {
  public:
      void show() override { cout << "Derived class" << endl; }
  };
  ```

#### 5. Which Operator Used To Solve Diamond Problem
- **Operator**: Not applicable, as Java solves the diamond problem through interface inheritance.

#### 6. Operator Overloading (How To Overload cin>>, cout<< operators) (What operators we can't overload)
- **Operator Overloading**:
  ```cpp
  class Complex {
  private:
      float real, imag;
  public:
      friend ostream& operator<<(ostream& os, const Complex& c);
      friend istream& operator>>(istream& is, Complex& c);
  };

  ostream& operator<<(ostream& os, const Complex& c) {
      os << c.real << " + " << c.imag << "i";
      return os;
  }

  istream& operator>>(istream& is, Complex& c) {
      is >> c.real >> c.imag;
      return is;
  }
  ```
- **Non-overloadable operators**: `::`, `.*`, `.`, `?:`

#### 7. What are static variables, when they get initialized where they exist in memory?
- **Static Variables**: Variables shared among all instances of a class.
  - **Initialization**: At the time of class loading.
  - **Memory Location**: Stored in the data segment.

#### 8. What is the Sequence of Calling Constructors and Destructors?
- **Sequence**:
  - Constructors: Base class constructor -> Derived class constructor.
  - Destructors: Derived class destructor -> Base class destructor.

#### 9. Static & Dynamic Polymorphism
- **Static Polymorphism**: Compile-time polymorphism achieved through method overloading and operator overloading.
- **Dynamic Polymorphism**: Runtime polymorphism achieved through method overriding using virtual functions.

#### 10. Abstract class & Abstract methods
- **Abstract Class**: A class that cannot be instantiated and may contain abstract methods.
- **Abstract Method**: A method without implementation, meant to be overridden in derived classes.

#### 11. How to write a definition of the abstract method
  ```java
  abstract class Animal {
      abstract void sound();
  }

  class Dog extends Animal {
      void sound() {
          System.out.println("Bark");
      }
  }
  ```

#### 12. Difference between Abstract Class and Interface
- **Abstract Class**:
  - Can have both abstract and non-abstract methods.
  - Supports single inheritance.
  - Can have member variables.
- **Interface**:
  - Can only have abstract methods (Java 8+ allows default methods).
  - Supports multiple inheritance.
  - Cannot have member variables (only constants).

#### 13. Compiler vs Interpreter (Which one is better & why)
- **Compiler**: Translates the entire code to machine language before execution (e.g., C, C++).
  - **Pros**: Faster execution after compilation.
  - **Cons**: Longer initial compile time.
- **Interpreter**: Translates code line-by-line during execution (e.g., Python, JavaScript).
  - **Pros**: Easier to debug and test.
  - **Cons**: Slower execution due to continuous translation.

#### 14. Stack vs Heap in Memory (Which variables store in stack and which stores in heap)
- **Stack**: Stores local variables and function call stack. Fast access, managed by CPU.
- **Heap**: Stores dynamically allocated memory. Slower access, managed by programmer or garbage collector.

#### 15. What are the access modifiers?
- **Public**: Accessible from any other class.
- **Protected**: Accessible within its own package and by subclasses.
- **Default**: Accessible only within its own package.
- **Private**: Accessible only within the same class.

#### 16. What are primitive data types?
- **Primitive Data Types**: Basic types provided by a programming language as building blocks (e.g., int, char, float, double in Java).

#### 17. Wrapper classes in JAVA.
- **Wrapper Classes**: Provide a way to use primitive data types as objects (e.g., Integer, Character, Float, Double).

### Data Structures

#### 1. How many data structures are available?
- **Common Data Structures**: Array, Linked List, Stack, Queue, Tree, Graph, Hash Table.

#### 2. Array vs LinkedList
- **Array**: Fixed size, contiguous memory, random access.
- **LinkedList**: Dynamic size, non-contiguous memory, sequential access.

#### 3. Stack vs Queue
- **Stack**: LIFO (Last In First Out).
- **Queue**: FIFO (First In First Out).

#### 4. Tree vs Graph
- **Tree**: Hierarchical structure with parent-child relationships. No cycles.
- **Graph**: Network structure with nodes and edges. Can have cycles.

#### 5. How to find a cycle in a graph
- **Cycle Detection Algorithms**:
  - **DFS** with recursion stack.
  - **Union-Find** algorithm.

#### 6. Recursion (Most important)
- **Recursion**: A function calls itself to solve smaller instances of the same problem.

#### 7. Find factorial in recursion.
  ```cpp
  int factorial(int n) {
      if (n <= 1) return 1;
      else return n * factorial(n - 1);
  }
  ```

#### 8. Sorting Algorithms (All available on GeeksforGeeks)
- **Common Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Radix Sort.

#### 9. Binary Search (Important for optimal searching)
  ```cpp
  int binarySearch(int arr[], int l, int r, int x) {
      while (l <= r) {
          int m = l + (r - l) / 2;
          if (arr[m] == x) return m;
          if (arr[m] < x) l = m + 1;
          else r = m - 1;
      }
      return -1;
  }
  ```

#### 10. Make a balanced BST from the sorted array.
  ```cpp
  struct Node {
      int data;
      Node* left;
      Node* right;
      Node(int val) : data(val), left(NULL), right(NULL) {}
  };

  Node* sortedArrayToBST(vector<int>& nums, int start, int end) {
      if (start > end) return NULL;
      int mid = start + (end - start

) / 2;
      Node* node = new Node(nums[mid]);
      node->left = sortedArrayToBST(nums, start, mid - 1);
      node->right = sortedArrayToBST(nums, mid + 1, end);
      return node;
  }
  ```

#### 11. Strings (Basic operations like reverse, check if palindrome or not, count a character frequency)
  - **Reverse**:
    ```cpp
    string reverseString(string s) {
        reverse(s.begin(), s.end());
        return s;
    }
    ```
  - **Check if Palindrome**:
    ```cpp
    bool isPalindrome(string s) {
        int l = 0, r = s.size() - 1;
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    ```
  - **Count Character Frequency**:
    ```cpp
    unordered_map<char, int> countFrequency(string s) {
        unordered_map<char, int> freq;
        for (char c : s) freq[c]++;
        return freq;
    }
    ```

#### 12. BFS, DFS, Graph traverse algorithms
  - **BFS**:
    ```cpp
    void BFS(int start, vector<vector<int>>& adj) {
        queue<int> q;
        vector<bool> visited(adj.size(), false);
        q.push(start);
        visited[start] = true;
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            cout << node << " ";
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    q.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }
    ```
  - **DFS**:
    ```cpp
    void DFS(int node, vector<vector<int>>& adj, vector<bool>& visited) {
        visited[node] = true;
        cout << node << " ";
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                DFS(neighbor, adj, visited);
            }
        }
    }
    ```

### Database

#### 1. What is Database and DBMS
- **Database**: An organized collection of data.
- **DBMS (Database Management System)**: Software to create, retrieve, update, and manage data in databases.

#### 2. Types of keys
- **Primary Key**: Unique identifier for a record.
- **Foreign Key**: Key used to link two tables.
- **Candidate Key**: A column, or set of columns, that can qualify as a primary key.
- **Composite Key**: A key composed of two or more columns.

#### 3. Truncate vs Delete
- **Truncate**: Removes all rows from a table without logging individual row deletions. Faster, cannot be rolled back.
- **Delete**: Removes rows one at a time and logs each deletion. Can be rolled back.

#### 4. Indexing (Concept, Advantages, and Disadvantages)
- **Indexing**: A data structure that improves the speed of data retrieval.
  - **Advantages**: Faster searches, improved performance for queries.
  - **Disadvantages**: Requires additional storage, can slow down write operations.

#### 5. SQL Injection
- **SQL Injection**: A code injection technique that might destroy your database. It is one of the most common web hacking techniques.
  - **Prevention**: Use prepared statements, parameterized queries, and stored procedures.

#### 6. How to store password & username in database
- **Storage**: Store passwords hashed with a strong algorithm like bcrypt, along with a salt for added security.

#### 7. JOINS (Most important)
- **JOINS**: Combine rows from two or more tables based on a related column.
  - **Types**: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.

#### 8. Joins vs Sub-Queries
- **Joins**: Combine data from multiple tables in a single query.
- **Sub-Queries**: Nested queries within a main query.

#### 9. Relational Database (Concept and Method)
- **Relational Database**: A database structured to recognize relations among stored items of information.
  - **Method**: Tables (relations) with rows (tuples) and columns (attributes).

#### 10. What is a transaction block
- **Transaction Block**: A sequence of database operations that are treated as a single unit. Either all operations are executed, or none are.

### SE & PIiT

#### 1. One team member didn't work properly and the project failed due to it. What will you tell your project manager?
- **Response**: Explain the situation factually, emphasizing the collective team effort and steps taken to mitigate the issue. Suggest ways to improve future performance and avoid similar issues.

#### 2. Project code deleted 2 days before delivery, how to tell and convince the client to give you more time.
- **Response**: Inform the client promptly, explain the situation transparently, outline steps taken to recover the code, and propose a realistic new timeline.

#### 3. How to lead a team?
- **Leadership**: Set clear goals, communicate effectively, delegate tasks based on team strengths, provide support and resources, and foster a collaborative environment.

#### 4. How to divide a task?
- **Task Division**: Break down the project into smaller tasks, assign tasks based on team members' expertise, set deadlines, and ensure clear communication and documentation.

#### 5. How to deliver on time?
- **Timely Delivery**: Plan thoroughly, set realistic deadlines, monitor progress regularly, adapt to changes quickly, and ensure clear and continuous communication with the team.

### Behavioral Interview

#### 1. Tell me something about yourself.
- **Response**: Briefly outline your background, key achievements, relevant experience, and what you bring to the role.

#### 2. Weaknesses & Strengths.
- **Weaknesses**: Mention a genuine area of improvement and steps you're taking to address it.
- **Strengths**: Highlight key skills and traits that align with the job requirements.

#### 3. Why you?
- **Response**: Emphasize your unique skills, experience, and enthusiasm for the role and how they match the company's needs.

#### 4. Why (Company)?
- **Response**: Research the company, align your values with theirs, and explain why you are excited about this opportunity.

#### 5. What are your salary expectations?
- **Response**: Provide a range based on market research and your experience, and express openness to negotiation.

#### 6. What do you propose to us?
- **Response**: Offer ideas or initiatives that can contribute to the company’s growth, efficiency, or innovation.

#### 7. Your favorite project you have done?
- **Response**: Describe a project you're proud of, focusing on your role, challenges faced, and the impact or results.

#### 8. Why Computer Science?
- **Response**: Share your passion for technology, problem-solving, and how computer science aligns with your career goals.