**PIEA**:

1. **Polymorphism**:
   polymorphism means “many forms”. By its name, it is a feature that allows you to perform an action in multiple or different ways. When we talk about polymorphism, there isn’t a lot to discuss unless we talk about its types.

There are two types of polymorphism:

Method Overloading – Static Polymorphism (Static Binding)
Method Overriding – Dynamic Polymorphism (Dynamic Binding)


   - **Real-life Example**: A "Vehicle" class with subclasses "Car," "Motorcycle," and "Truck." Each of these subclasses can have a method called "startEngine," and the implementation of this method can vary based on the specific type of vehicle. Polymorphism allows you to call "startEngine" on any vehicle object, and the appropriate version of the method is executed for that specific vehicle type.

3. **Inheritance**:
   Inheritance is a technique of acquiring the properties of another class having features in common. It allows us to increase the reusability and reduce the duplication of code. It is also known as a child-parent relationship, where a child inherits the properties of its parent. This is the reason it is called ‘is-a relationship’ where the child is-a type of parent.
   
   - **Real-life Example**: In a university management system, you can have a base class "Person" with properties like "name" and "address." Then, you can create derived classes like "Student" and "Professor" that inherit from "Person." Both student and professor objects will have the properties of a person, but they can also have their own unique properties and methods.

4. **Encapsulation**:
   Encapsulation is a technique of restricting a user from directly modifying the data members or variables of a class in order to maintain the integrity of the data.
   
   - **Real-life Example**: Consider a coffee machine. The internal mechanisms, like the heating element and water pump, are encapsulated within the machine. Users can interact with the machine through a simple interface, such as buttons for selecting the type of coffee. They don't need to know the intricate details of how the machine works internally, ensuring that the complex parts are hidden.

5. **Abstraction**:
   Abstraction is a technique of providing only the essential details to the user by hiding the unnecessary or irrelevant details of an entity. 
   - **Real-life Example**: A "Bank Account" class can be abstracted from the real-world concept of a bank account. It defines essential operations like "deposit" and "withdraw" without specifying the implementation details for different types of accounts (e.g., savings, checking, or investment accounts). The abstraction allows you to create concrete subclasses for various account types while adhering to the common interface.

These examples demonstrate how the pillars of OOP (PIEA) help model and solve real-world problems by providing a structured and organized way to represent objects, their behaviors, and their interactions.
