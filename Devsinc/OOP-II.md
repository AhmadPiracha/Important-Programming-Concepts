### Object-Oriented Programming (OOP)

1. **Pillars of OOP (PIEA)**
   **Answer:** 
   - **Polymorphism:** Ability to take many forms (e.g., method overloading, method overriding).
   - **Inheritance:** Mechanism by which one class can inherit the properties and behaviors of another class.
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

12. **Function overloading and function overriding**
    **Answer:**
    - **Function Overloading:** Multiple functions with the same name but different parameters in the same scope.
    - **Function Overriding:** A derived class provides a specific implementation of a function that is already defined in its base class.

13. **Operator Overloading and Operator Overriding**
    **Answer:**
    - **Operator Overloading:** Defining custom behavior for operators for user-defined types.
    - **Operator Overriding:** Not a common term; likely refers to overriding methods in derived classes (similar to function overriding).

14. **Friend function? Why do we use friend function?**
    **Answer:** A friend function can access private and protected members of a class. It is used to allow external functions or other classes to access these members.

15. **Why we need Interface and Abstract classes**
    **Answer:** 
    - **Interface:** Defines a contract for classes without providing any implementation. Useful for ensuring different classes provide specific methods.
    - **Abstract Class:** Can provide some implementation but is intended to be subclassed. Useful for sharing common code among related classes.

16. **Why we use static functions**
    **Answer:** Static functions belong to the class rather than any object instance and can be called without creating an instance of the class. They are used for utility functions or when the function does not modify object state.

17. **Difference between composition association and aggregation association**
    **Answer:**
    - **Composition:** Strong ownership where the lifecycle of the contained object depends on the container object.
    - **Aggregation:** Weaker relationship where the contained object can exist independently of the container object.

18. **Real-life examples of OOP's Pillars**
    **Answer:** 
    - **Encapsulation:** ATM machine (internal workings hidden, only necessary functions exposed).
    - **Inheritance:** Employee and Manager classes (Manager inherits from Employee).
    - **Polymorphism:** Different types of payment methods (CreditCard, PayPal) implementing a common interface `Payment`.
    - **Abstraction:** Car interface with methods like `start`, `stop`.

19. **Difference between Abstraction & Encapsulation**
    **Answer:** 
    - **Abstraction:** Hiding complex implementation details and showing only the necessary parts.
    - **Encapsulation:** Bundling data and methods that operate on the data within a single unit (class), restricting access to some of the object's components.

20. **Use of "this" keyword**
    **Answer:** The `this` keyword refers to the current instance of a class and is used to differentiate between instance variables and parameters with the same name.

21. **Object slicing?**
    **Answer:** Object slicing occurs when a derived class object is assigned to a base class object, resulting in the loss of derived class-specific information.

22. **What is a destructor?**
    **Answer:** A destructor is a special member function that is called automatically when an object goes out of scope or is explicitly deleted. It is used to release resources held by the object.

23. **How to prevent inheritance in C++?**
    **Answer:** To prevent inheritance in C++, declare a class as `final`. Classes declared as `final` cannot be used as base classes.

24. **What is a pure virtual function?**
    **Answer:** A pure virtual function in C++ is a virtual function that is declared in a base class but has no implementation. It is meant to be overridden by derived classes and makes the base class abstract.

25. **Difference between constructor and destructor**
    **Answer:**
    - **Constructor:** Initializes an object of a class. It has the same name as the class and no return type.
    - **Destructor:** Cleans up resources allocated to an object before it goes out of scope. It has the same name as the class preceded by a tilde (`~`) and no return type.

26. **What is the purpose of the `new` and `delete` operators?**
    **Answer:** The `new` operator is used to dynamically allocate memory for an object on the heap, while the `delete` operator deallocates the memory allocated by `new`.

27. **What is RTTI? How is it useful?**
    **Answer:** RTTI (Run-Time Type Identification) allows the type of an object to be determined during runtime. It is useful for dynamic casting and polymorphic behavior in C++.

28. **What is a copy constructor?**
    **Answer:** A copy constructor is a special constructor that creates a new object as a copy of an existing object of the same class. It is invoked when an object is initialized with another object of the same class.

29. **Difference between shallow copy and deep copy**
    **Answer:**
    - **Shallow Copy:** Copies only the immediate objects' values, not the objects they refer to.
    - **Deep Copy:** Copies the object along with the objects it references, recursively.

30. **When would you use a `const` member function?**
    **Answer:** Use a `const` member function when you want to indicate that the function does not modify the state of the object and can be safely called on `const` objects.

31. **What is an object-oriented analysis and design (OOAD)?**
    **Answer:** Object-Oriented Analysis and Design (OOAD) is a technical approach for analyzing and designing an application or system by modeling it as a collection of interacting objects.

32. **What are virtual destructors?**
    **Answer:** Virtual destructors ensure that the correct destructor is called for an object in a class hierarchy when it is deleted through a base class pointer. It prevents memory leaks and undefined behavior.

33. **What is an interface?**
    **Answer:** An interface in OOP defines a contract for classes to implement certain methods or behaviors without providing any implementation details. It specifies what

 a class can do, but not how it does it.

34. **What is an abstract class?**
    **Answer:** An abstract class in OOP is a class that cannot be instantiated on its own and is meant to be subclassed. It may contain abstract methods that must be implemented by its subclasses.

35. **What are access specifiers?**
    **Answer:** Access specifiers (public, private, protected) in C++ define the visibility and accessibility of class members. They control how and from where the members of a class can be accessed.
