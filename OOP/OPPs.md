## Inheritance vs. Polymorphism

### Inheritance
- With inheritance, a derived class inherits the already existing class's features (base class).
- Inheritance refers to using the structure and behavior of a parent class in a subclass.
- Inheritance is applied to classes.
- Inheritance can be of single, hybrid, multiple, hierarchical, multipath, and multilevel types.
- Inheritance supports code reusability and reduces lines of code.

### Polymorphism
- Polymorphism allows class methods to exist in multiple forms.
- Polymorphism intends on changing the behavior of parent class's method.
- Polymorphism is applied to methods.
- Polymorphism has two types: compile-time and run-time polymorphism.
- Polymorphism decides which form of the function to be invoked.

## OOPS Concepts

- OOPS is a programming technique that employs objects rather than just functions and procedures.
- All objects are grouped into classes in object-oriented programming.
- OOPS integrates real-world concepts into programming such as inheritance, polymorphism, and abstraction.

## Why OOPS Is Important?

- OOPS allows more clarity in programming, thereby allowing simplicity in solving complex problems.
- OOPS reduces redundancy.
- OOPS provides the ability to bind both data and code together.
- Allows in keeping sensitive data confidential.
- OOPS improves code readability.
- Polymorphism gives flexibility to the programs by allowing the entities to have multiple forms.

## Encapsulation

- Encapsulation is the process of binding data members and methods of a program together to do a specific job, without revealing unnecessary details.

### Types of Encapsulation
- **Data Hiding**: It is the process of hiding unwanted information, such as restricting access to any member of an object by making it private.
- **Data Binding**: It binds the data members and the methods together as a whole, as a class to be precise.

You only need to know how to drive a car properly, not how the wires inside it are connected.

## Abstraction

- Abstraction is the method of hiding unnecessary details from the necessary ones. It is one of the main features of OOPs.

## Method Overloading

- Method Overloading is a concept in OOP which employs two or more methods in a class with the same name but different method signatures.

## Method Overriding

- If a method with the same method signature is presented in both child and parent class is known as method overriding.

## Additional Important OOP Concepts

### Classes and Objects

- **Class**: A blueprint for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).
- **Object**: An instance of a class. It contains state and behavior defined by the class.

### Constructors and Destructors

- **Constructor**: A special method in a class that is called when an object is instantiated. It is used to initialize the object.
- **Destructor**: A method called when an object is destroyed. It is used to perform clean-up operations.

### Interfaces

- An interface is a reference type in OOP, it is a collection of abstract methods. A class that implements an interface must implement all the methods described in the interface.

### Inheritance Types

- **Single Inheritance**: A class inherits from one superclass.
- **Multiple Inheritance**: A class inherits from more than one superclass.
- **Multilevel Inheritance**: A class inherits from a class, which in turn inherits from another class.
- **Hierarchical Inheritance**: Multiple classes inherit from a single superclass.
- **Hybrid Inheritance**: A combination of two or more types of inheritance.

### Access Modifiers

- **Private**: The member is accessible only within the same class.
- **Protected**: The member is accessible within the same class and its derived classes.
- **Public**: The member is accessible from any other code.
- **Default**: (package-private in Java) The member is accessible only within its own package.

### Static Members

- **Static Variables**: Class variables shared among all instances of the class.
- **Static Methods**: Methods that belong to the class rather than any object instance, and can be called on the class itself.

### Composition vs. Inheritance

- **Composition**: A design principle where a class is composed of one or more objects of other classes, rather than inheriting from them.
- **Inheritance**: A mechanism where a new class inherits the properties and behavior of an existing class.

### Design Patterns

- **Singleton Pattern**: Ensures a class has only one instance and provides a global point of access to it.
- **Factory Pattern**: Defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.
- **Observer Pattern**: A design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them of any state changes.
