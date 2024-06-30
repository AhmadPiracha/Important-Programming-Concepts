
### Object-Oriented Programming (OOP)

1. **Pillars of OOP (PIEA)**
   **Answer:** 
   - **Polymorphism:** Ability to take many forms (e.g., method overloading, method overriding).
   - **Inheritance

:** Mechanism by which one class can inherit the properties and behaviors of another class.
   - **Encapsulation:** Bundling of data with methods that operate on the data (e.g., using private members and public methods).
   - **Abstraction:** Hiding the complex implementation details and showing only the essential features (e.g., using abstract classes and interfaces).

2. **Types of inheritance? Difference between Multiple and multilevel Inheritance**
   **Answer:**
   - **Single Inheritance:** One class inherits from one base class.
   - **Multiple Inheritance:** One class inherits from more than one base class.
   - **Multilevel Inheritance:** A class is derived from another derived class.
   - **Hierarchical Inheritance:** Multiple classes inherit from one base class.
   - **Hybrid Inheritance:** Combination of two or more types of inheritance.
   - **Difference:** Multiple inheritance involves multiple base classes for a single derived class, while multilevel inheritance involves a chain of inheritance.

3. **Multiple inheritance is not supported by every language! Why? Diamond problem?**
   **Answer:** Multiple inheritance can lead to ambiguity, known as the Diamond Problem, where a derived class inherits from two classes that have a common base class, leading to potential conflicts in the inheritance hierarchy.

4. **Design Patterns**
   **Answer:** Design patterns are reusable solutions to common problems in software design. Examples include Singleton, Factory, Observer, Strategy, and Decorator patterns.

5. **What is Singleton pattern? How do you implement it?**
   **Answer:** The Singleton pattern ensures a class has only one instance and provides a global point of access to it. 
   ```cpp
   class Singleton {
   private:
       static Singleton* instance;
       Singleton() {}
   public:
       static Singleton* getInstance() {
           if (!instance) instance = new Singleton();
           return instance;
       }
   };
   Singleton* Singleton::instance = nullptr;
   ```

6. **Abstract Factory vs Factory method**
   **Answer:** 
   - **Abstract Factory:** Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
   - **Factory Method:** Defines an interface for creating an object, but allows subclasses to alter the type of objects that will be created.

7. **Defines pillars of OOP by an Example**
   **Answer:** Example of a `Car` class:
   - **Encapsulation:** Private attributes like `speed` with public methods to modify it.
   - **Inheritance:** `ElectricCar` class inherits from `Car`.
   - **Polymorphism:** `ElectricCar` overrides the `drive` method of `Car`.
   - **Abstraction:** Interface `Vehicle` with methods like `drive`, `stop`.

8. **Use of "virtual" keyword**
   **Answer:** The `virtual` keyword is used to declare a method in a base class that can be overridden in derived classes to achieve runtime polymorphism.

9. **Types of polymorphism**
   **Answer:**
   - **Compile-time Polymorphism:** Achieved through method overloading and operator overloading.
   - **Runtime Polymorphism:** Achieved through method overriding using virtual functions.

10. **Why OOP?**
    **Answer:** OOP helps in managing complexity by breaking down the problem into objects, promotes code reuse through inheritance, provides a clear modular structure, and enhances code maintainability and scalability.

11. **Why Inheritance?**
    **Answer:** Inheritance allows for code reuse, establishes a natural hierarchy, and enables polymorphism by allowing a base class to define common properties and behaviors that derived classes can extend or modify.

12. **Can we achieve overloading in a child class?**
    **Answer:** Yes, overloading can be achieved in a child class by defining methods with the same name but different parameter lists.

13. **Function overloading and function overriding**
    **Answer:**
    - **Function Overloading:** Multiple functions with the same name but different parameters in the same scope.
    - **Function Overriding:** A derived class provides a specific implementation of a function that is already defined in its base class.

14. **Can we achieve function overloading by just changing the return type?**
    **Answer:** No, function overloading cannot be achieved by changing only the return type; the parameter list must also be different.

15. **Operator Overloading and Operator Overriding**
    **Answer:**
    - **Operator Overloading:** Defining custom behavior for operators for user-defined types.
    - **Operator Overriding:** Not a common term; likely refers to overriding methods in derived classes (similar to function overriding).

16. **Shallow vs deep copy**
    **Answer:**
    - **Shallow Copy:** Copies only the immediate objects' values, not the objects they refer to.
    - **Deep Copy:** Copies the object along with the objects it references, recursively.

17. **Friend function? Why do we use friend function?**
    **Answer:** A friend function can access private and protected members of a class. It is used to allow external functions or other classes to access these members.

18. **Why we need Interface and Abstract classes**
    **Answer:** 
    - **Interface:** Used to define a contract for classes, specifying what methods must be implemented without dictating how they should be implemented. Interfaces ensure that different classes provide specific methods and allow for multiple inheritance of behavior.
    - **Abstract Class:** Can include both abstract methods (without implementation) and concrete methods (with implementation). Abstract classes are used to share common code among related classes and to define a common interface for a group of subclasses. They cannot be instantiated directly.

19. **Why we use static functions**
    **Answer:** Static functions belong to the class rather than any object instance and can be called without creating an instance of the class. They are used for utility functions or when the function does not modify object state. Static functions are often used to provide methods that are not tied to any particular object instance, such as mathematical calculations or factory methods.

20. **Difference between composition association and aggregation association**
    **Answer:** 
    - **Composition:** Represents a strong ownership relationship where the contained object cannot exist independently of the container object. If the container is destroyed, so are the contained objects (e.g., a house and its rooms).
    - **Aggregation:** Represents a weaker relationship where the contained object can exist independently of the container object. If the container is destroyed, the contained objects can still exist (e.g., a library and its books).

21. **Real-life examples of OOP's Pillars**
    **Answer:** 
    - **Encapsulation:** ATM machine (internal workings hidden, only necessary functions exposed).
    - **Inheritance:** Employee and Manager classes (Manager inherits from Employee).
    - **Polymorphism:** Different types of payment methods (CreditCard, PayPal) implementing a common interface `Payment`.
    - **Abstraction:** Car interface with methods like `start`, `stop`.

22. **Difference between Abstraction & Encapsulation**
    **Answer:** 
    - **Abstraction:** Hides complex implementation details and shows only the necessary parts. It focuses on the outside view of an object (e.g., what it does).
    - **Encapsulation:** Bundles data and methods that operate on the data within a single unit (class), restricting access to some of the object's components. It focuses on hiding the internal state and requiring all interactions to be performed through an object's methods.

23. **Sum of all nodes in a linked list (recursion)**
    **Answer:** Given a linked list where each node has up to four pointers (any of which can be null), the sum of the data of all nodes can be calculated using recursion. Here's an example in C++:
    ```cpp
    struct ListNode {
        int data;
        ListNode* ptr1;
        ListNode* ptr2;
        ListNode* ptr3;
        ListNode* ptr4;
    };

    int sumNodes(ListNode* head) {
        if (!head) return 0;
        return head->data + sumNodes(head->ptr1) + sumNodes(head->ptr2) + sumNodes(head->ptr3) + sumNodes(head->ptr4);
    }
    ```