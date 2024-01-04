1. What is Node.js?
   Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.

2. Explain the event-driven architecture of Node.js.
   Node.js is built on an event-driven, non-blocking I/O model. It uses an event loop to handle asynchronous operations, allowing it to scale efficiently.

3. What is npm?
   npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage third-party packages or libraries in their projects.

4. How does Node.js handle asynchronous code execution?
   Node.js uses a single-threaded event loop to handle asynchronous operations. Callbacks, Promises, and async/await are common mechanisms for managing asynchronous code.

5. Explain the difference between Callbacks and Promises.
   Callbacks are functions passed as arguments to other functions and executed after the completion of a task. Promises provide a more structured way to handle asynchronous code, offering better readability and error handling.

6. What is the purpose of the package.json file in a Node.js project?
   The package.json file contains metadata about a Node.js project, including its dependencies, scripts, and other configuration settings. It is crucial for managing and building Node.js applications.

7. How does Node.js handle child processes?
   Node.js provides the `child_process` module to create and manage child processes. This allows the execution of external system commands or scripts from within a Node.js application.

8. Explain the concept of middleware in Express.js.
   Middleware in Express.js are functions that have access to the request, response, and the next function in the application's request-response cycle. They can be used to perform tasks such as logging, authentication, and error handling.

9. What is the purpose of the `module.exports` in Node.js?
   `module.exports` is used to expose functions, objects, or primitive values from a module so that they can be used in other modules. It defines what will be available for other modules when they require the current module.

10. What is the purpose of the `require` function in Node.js?
    The `require` function is used to include external modules or files in a Node.js application. It allows you to modularize your code and use functionality defined in other files.

11. What is the role of the `global` object in Node.js?
    The `global` object represents the global namespace in Node.js. Variables declared without the `var`, `let`, or `const` keyword become properties of the `global` object.

12. Explain the concept of the event loop in Node.js.
    The event loop is a core concept in Node.js that allows asynchronous, non-blocking I/O operations to be handled efficiently. It continuously checks the message queue for tasks to execute.

13. What is the purpose of the `Buffer` class in Node.js?
    The `Buffer` class is used to handle binary data directly in Node.js. It provides a way to work with raw binary data without requiring the use of a separate library.

14. How does error handling work in Node.js?
    In Node.js, errors can be handled using try-catch blocks for synchronous code and through the use of callback functions, Promises, or the `async/await` syntax for asynchronous code. The `process.on('uncaughtException')` event can also be used to catch unhandled exceptions.

15. Explain the difference between process.nextTick() and setImmediate().
    Both `process.nextTick()` and `setImmediate()` are used to execute a function asynchronously in the next iteration of the event loop. However, `process.nextTick()` has a higher priority and executes before other events in the current phase of the event loop.

16. How does Node.js support multi-core systems?
    Node.js is inherently single-threaded, but it can take advantage of multi-core systems by using the `cluster` module. The `cluster` module allows the creation of child processes that share the same server port, enabling better utilization of multiple CPU cores.

17. What is the purpose of the `__dirname` and `__filename` variables?
    `__dirname` represents the current directory name of the current module's file. `__filename` represents the absolute path of the current module's file.

18. How can you handle cross-origin requests in a Node.js application?
    Cross-origin requests can be handled by enabling Cross-Origin Resource Sharing (CORS). The `cors` middleware in Express.js is commonly used for this purpose.

19. Explain the concept of streams in Node.js.
    Streams in Node.js are used to handle large amounts of data efficiently. They allow you to read or write data piece by piece rather than loading the entire data into memory. The `fs` module provides readable and writable streams for file operations.

20. What is the purpose of the `util` module in Node.js?
    The `util` module provides utility functions that are helpful in debugging and error handling. For example, it includes the `util.promisify()` method for converting callback-based functions into Promise-based functions.