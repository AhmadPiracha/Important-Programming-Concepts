## Object Oriented Programming

### Pillars of OOP
1. **Encapsulation**: Bundling data and methods that operate on the data within a single unit or class.
2. **Abstraction**: Hiding the complex implementation details and showing only the necessary features.
3. **Inheritance**: Creating a new class from an existing class to reuse, extend, or modify behaviors.
4. **Polymorphism**: Ability to present the same interface for different underlying forms (e.g., method overriding and overloading).

### Types of Inheritance
1. **Single Inheritance**: A class inherits from one superclass.
2. **Multiple Inheritance**: A class inherits from more than one superclass.
3. **Multilevel Inheritance**: A class inherits from a class which is also inherited from another class.
4. **Hierarchical Inheritance**: Multiple classes inherit from a single superclass.
5. **Hybrid Inheritance**: A combination of two or more types of inheritance.

### Diamond Problem
Occurs in multiple inheritance when two classes B and C inherit from A, and class D inherits from both B and C. D ends up with two copies of A’s attributes/methods, causing ambiguity.

### Compile Time & Runtime Polymorphism
- **Compile Time (Static Binding)**: Method overloading; resolved during compile time.
- **Runtime (Dynamic Binding)**: Method overriding; resolved during runtime.

### Constructor & Destructor
- **Constructor**: A special method called when an object is instantiated.
- **Destructor**: A method called when an object is destroyed to free resources.

### Access Modifiers
- **Private**: Accessible only within the class.
- **Protected**: Accessible within the class and its subclasses.
- **Public**: Accessible from any other class.

### Static Keyword
- **Static Class**: Cannot be instantiated, contains only static members.
- **Static Method**: Belongs to the class rather than any instance.
- **Static Field**: Shared among all instances of the class.

### Final Keyword
- **Final Class**: Cannot be subclassed.
- **Final Method**: Cannot be overridden.
- **Final Field**: Its value cannot be changed once initialized.

### Composition, Aggregation & Association
- **Composition**: Strong relationship; the composed object cannot exist without the container object.
- **Aggregation**: Weak relationship; the aggregated object can exist independently.
- **Association**: General relationship where one object uses or interacts with another.

### Multithreading
Concurrent execution of two or more threads to maximize CPU utilization.

### Singleton Pattern & Factory Pattern
- **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access.
- **Factory Pattern**: Provides an interface for creating objects without specifying the exact class of object that will be created.

### SOLID Principles
1. **Single Responsibility Principle**: A class should have only one reason to change.
2. **Open/Closed Principle**: Classes should be open for extension, but closed for modification.
3. **Liskov Substitution Principle**: Subtypes must be substitutable for their base types.
4. **Interface Segregation Principle**: Clients should not be forced to depend on methods they do not use.
5. **Dependency Inversion Principle**: Depend on abstractions, not on concretions.

### Coupling & Cohesion
- **Coupling**: Degree of direct knowledge one class has about another.
- **Cohesion**: Degree to which elements of a module belong together.

### Abstraction vs Encapsulation
- **Abstraction**: Hiding complexity by providing a simplified interface.
- **Encapsulation**: Hiding the internal state and requiring all interaction to be performed through an object's methods.

### Abstract Class vs Interface
- **Abstract Class**: Can have both abstract and concrete methods.
- **Interface**: Can only have abstract methods (in some languages like Java, it can have default methods).

### Overriding & Overloading
- **Overriding**: Redefining a method in a subclass.
- **Overloading**: Same method name with different parameters.

### Static & Dynamic Binding
- **Static Binding**: Occurs at compile time.
- **Dynamic Binding**: Occurs at runtime.

---