
### Pillars of OOP (Object-Oriented Programming)


#### 1. Encapsulation
Encapsulation means hiding the code and data into a single unit e.g. class or
method to protect inner workings of an object from the outside world.


**Example:**
- You have a class `Student` that contains private variables `id` and `name`.
- Public methods `setId`, `getId`, `setName`, and `getName` control access to these variables, ensuring they are manipulated in a controlled way.

#### 2. Abstraction
Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It helps to reduce complexity and allows for efficient design and implementation.

**Example:**
- You have a `CoffeeMachine` class with a method `makeCoffee()`.
- The details of how water is boiled, coffee is brewed, and coffee is poured into a cup are hidden from the user of the class.

#### 3. Inheritance
Inheritance allows a new class to inherit properties and behavior (methods) from an existing class. This promotes code reusability and can lead to a hierarchical class structure.

**Example:**
- You have a base class `Animal` with a method `eat()`.
- A derived class `Dog` inherits from `Animal` and adds a new method `bark()`.

#### 4. Polymorphism
The word polymorphism means having many forms. It is achieved through method overriding (runtime polymorphism) and method overloading (compile-time polymorphism).

**Example:**
- Method overloading: A `Print` class with multiple `display` methods that take different parameter types (int, double, string).
- Method overriding: A `Base` class with a method `show()` and a `Derived` class that overrides `show()` to provide a specific implementation.


### Function Overloading and Function Overriding

#### Function Overloading
Function overloading is when multiple functions have the same name but different parameters (type or number of parameters). The correct function to call is determined by the arguments passed.

**Example:**
- A `Math` class has several `add` methods with different parameter lists (two integers, two doubles, three integers).

#### Function Overriding
Function overriding occurs when a derived class provides a specific implementation of a method that is already defined in its base class. The method in the derived class should have the same name, return type, and parameters as in the base class.

**Example:**
- A `Base` class has a method `show()`.
- A `Derived` class overrides `show()` to provide its own implementation.


### Indexing

Indexing refers to accessing elements of arrays, lists, or other data structures using their indices. It allows for efficient retrieval and modification of elements.

**Example in Arrays:**
- An array `arr` of five integers, accessing the third element with `arr[2]`.

**Example in Linked Lists:**
- To access the nth element in a linked list, you traverse the list from the head node, following the links until you reach the desired node.

**Arrays**
Arrays store elements in contiguous memory locations, resulting in easily calculable addresses for the elements stored and this allows faster access to an element at a specific index.

**Linked lists**
Linked lists are less rigid in their storage structure and elements are usually not stored in contiguous locations, hence they need to be stored with additional tags giving a reference to the next element. 

![image](https://github.com/user-attachments/assets/4a099b1c-63e0-4a86-8158-6c2f25f7ee1c)



**Stack:**
Stack is a linear data structure which orders LIFO(Last In First Out) or FILO(First In Last Out)
for accessing elements. Basic operations of stack are : Push, Pop , Peek.


**Queue:**
Queue is a linear structure which follows the order is First In First Out (FIFO) to access
elements. Mainly the following are basic operations on queue: Enqueue, Dequeue, Front, Rear


The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added. Both Queues and Stacks can be implemented using Arrays and Linked Lists.



**Access specifiers in Inheritance**
When creating a derived class from a base class, you can use different access specifiers to inherit the data members of the base class. These can be public, protected or private.

**The diamond problem**
The diamond problem occurs when two superclasses of a class have a common base class. For example, in the following diagram, the TA class gets two copies of all attributes of Person class, this causes ambiguities.


**What is Graph?**
A graph data structure is a collection of nodes (also called vertices) and edges that connect them. Nodes can represent entities, such as people, places, or things, while edges represent relationships between those entities.

Graphs are used to model a wide variety of real-world systems, such as social networks, transportation networks, and computer networks.

**What is Tree?**
A tree data structure is a hierarchical data structure that consists of nodes connected by edges. Each node can have multiple child nodes, but only one parent node. The topmost node in the tree is called the root node.


**What is a Constructor?**
It is a member function that has the same name as the name of the class. It calls automatically whenever the object of the class is built.

**What is a Destructor?**
Destructors are typically used to deallocate memory. Also, they are used to clean up for objects and class members when the object gets terminated.
