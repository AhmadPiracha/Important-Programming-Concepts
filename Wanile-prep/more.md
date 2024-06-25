
## SDLC Models
### 1. Waterfall Model
- **Sequential design process**: Each phase must be completed before the next begins.
- **Phases**: Requirements, Design, Implementation, Verification, Maintenance.
- **Pros**: Simple, easy to manage.
- **Cons**: Not flexible, difficult to accommodate changes.

### 2. Agile Model
- **Iterative and incremental**: Promotes adaptive planning and flexibility.
- **Phases**: Planning, Development, Testing, Deployment, Review, Repeat.
- **Pros**: Flexible, customer feedback, adaptive to changes.
- **Cons**: Requires experienced team, scope creep.

### 3. Iterative Model
- **Repetition of phases**: Allows refinement through multiple iterations.
- **Phases**: Initial Planning, Design, Implementation, Testing, Review, Repeat.
- **Pros**: Early product availability, flexible.
- **Cons**: Requires good planning, risk of scope creep.

### 4. V-Model
- **Validation and verification model**: Each development stage has a corresponding testing phase.
- **Phases**: Requirements, System Design, Architectural Design, Module Design, Coding, Testing.
- **Pros**: Simple, easy to understand, emphasis on testing.
- **Cons**: Inflexible, high risk.

### 5. Spiral Model
- **Risk-driven process model**: Combines iterative nature with systematic aspects of the Waterfall model.
- **Phases**: Planning, Risk Analysis, Engineering, Evaluation.
- **Pros**: Risk management, flexibility.
- **Cons**: Can be complex, expensive.

## SDLC Phases
1. **Requirement Analysis**: Collect and analyze user requirements.
2. **Design**: Create architecture and design specifications.
3. **Implementation**: Write code and build the system.
4. **Testing**: Verify that the system works as intended.
5. **Deployment**: Release the system to users.
6. **Maintenance**: Fix issues, update, and improve the system.

## Scrum Framework
- **Roles**:
  - **Product Owner**: Defines product backlog, prioritizes needs.
  - **Scrum Master**: Facilitates the process, removes impediments.
  - **Development Team**: Develops the product increment.
- **Artifacts**:
  - **Product Backlog**: List of tasks and requirements.
  - **Sprint Backlog**: Tasks selected for the current sprint.
  - **Increment**: Sum of all completed backlog items.
- **Events**:
  - **Sprint**: Time-boxed iteration (typically 2-4 weeks).
  - **Sprint Planning**: Define what will be done in the sprint.
  - **Daily Scrum**: 15-minute daily meeting to synchronize activities.
  - **Sprint Review**: Demonstrate what has been accomplished.
  - **Sprint Retrospective**: Reflect on the past sprint and plan improvements.

## Whitebox, Greybox, and Blackbox Testing
- **Whitebox Testing**: Internal testing where the tester has knowledge of the code.
  - **Examples**: Unit testing, integration testing.
- **Greybox Testing**: Combination of blackbox and whitebox testing, limited knowledge of internal workings.
  - **Examples**: Penetration testing, functional testing with some internal insights.
- **Blackbox Testing**: External testing with no knowledge of internal code.
  - **Examples**: Functional testing, system testing.

## Scheduling Algorithms
1. **First-Come, First-Served (FCFS)**: Processes are executed in the order they arrive.
2. **Shortest Job Next (SJN)**: Executes the process with the shortest expected processing time next.
3. **Priority Scheduling**: Processes are executed based on priority.
4. **Round Robin (RR)**: Each process is assigned a fixed time slice and executed in a cyclic order.
5. **Multilevel Queue Scheduling**: Processes are divided into queues based on priority and each queue has its own scheduling algorithm.

## MVC Framework
### Model-View-Controller
- **Model**: Manages data and business logic.
- **View**: Displays data and sends user commands to the controller.
- **Controller**: Processes user commands, makes calls to model objects, and decides which view to display.

## Unit Testing & Integration Testing
- **Unit Testing**: Testing individual components or units of code to ensure they work as expected.
  - **Example**: Testing a single function or method.
- **Integration Testing**: Testing combined parts of an application to determine if they function together correctly.
  - **Example**: Testing the interaction between a database and a web server.

## HTTP Session
- **HTTP session**: A way to store information (state) about a user across multiple HTTP requests.
  - **Example**: Shopping cart contents, user authentication status.

## TCP/IP Model vs OSI Model
### TCP/IP Model
1. **Application**: HTTP, FTP, SMTP.
2. **Transport**: TCP, UDP.
3. **Internet**: IP, ICMP.
4. **Network Access**: Ethernet, Wi-Fi.

### OSI Model
1. **Application**: HTTP, FTP.
2. **Presentation**: SSL, TLS.
3. **Session**: NetBIOS.
4. **Transport**: TCP, UDP.
5. **Network**: IP, ICMP.
6. **Data Link**: Ethernet, PPP.
7. **Physical**: Cables, Hubs.

## SOAP vs RESTful API
### SOAP (Simple Object Access Protocol)
- **Protocol**: Strict standards, relies on XML.
- **Transport**: Works over HTTP, SMTP, and more.
- **Pros**: Security, ACID compliance.
- **Cons**: Complex, heavier.

### REST (Representational State Transfer)
- **Architecture**: Uses standard HTTP methods.
- **Format**: Can use JSON, XML.
- **Pros**: Simple, flexible, scalable.
- **Cons**: Stateless, can be less secure.

## Check if a String is a Palindrome
```python
def is_palindrome(s):
    return s == s[::-1]

# Example
print(is_palindrome("radar"))  # Output: True
print(is_palindrome("hello"))  # Output: False
```

## POST & GET Request
### GET Request
- **Purpose**: Retrieve data from the server.
- **Example**:
  ```http
  GET /users?id=123 HTTP/1.1
  Host: example.com
  ```

### POST Request
- **Purpose**: Send data to the server.
- **Example**:
  ```http
  POST /users HTTP/1.1
  Host: example.com
  Content-Type: application/json

  {
      "name": "John Doe",
      "email": "john@example.com"
  }
  ```

## Cookies
- **Purpose**: Store data on the client side to maintain stateful information.
- **Usage**: Authentication tokens, user preferences.
- **Example**:
  ```python
  from http.cookies import SimpleCookie

  # Create a cookie
  cookie = SimpleCookie()
  cookie["username"] = "john_doe"
  cookie["username"]["domain"] = "example.com"
  cookie["username"]["path"] = "/"
  cookie["username"]["max-age"] = 3600  # 1 hour

  print(cookie.output())
  ```

## Program to Print Fibonacci Series
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
    print()

# Example
fibonacci(10)  # Output: 0 1 1 2 3 5 8 13 21 34
```

## Program to Print Factorial of a Number
```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# Example
print(factorial(5))  # Output: 120
```

---
Sure, here are the examples in C++ and JavaScript:

---

## Check if a String is a Palindrome

### C++
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

bool is_palindrome(string s) {
    string rev = s;
    reverse(rev.begin(), rev.end());
    return s == rev;
}

int main() {
    cout << is_palindrome("radar") << endl;  // Output: 1 (true)
    cout << is_palindrome("hello") << endl;  // Output: 0 (false)
    return 0;
}
```

### JavaScript
```javascript
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

console.log(isPalindrome("radar"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
```

---

## POST & GET Request

### GET Request Example

#### C++
```cpp
#include <iostream>
#include <string>
#include <curl/curl.h>

int main() {
    CURL *curl;
    CURLcode res;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://example.com/users?id=123");
        res = curl_easy_perform(curl);

        if(res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));

        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
    return 0;
}
```

#### JavaScript (Using Fetch API)
```javascript
fetch('http://example.com/users?id=123')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### POST Request Example

#### C++
```cpp
#include <iostream>
#include <string>
#include <curl/curl.h>

int main() {
    CURL *curl;
    CURLcode res;

    curl_global_init(CURL_GLOBAL_DEFAULT);
    curl = curl_easy_init();

    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "http://example.com/users");

        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Content-Type: application/json");
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        std::string json = "{\"name\":\"John Doe\", \"email\":\"john@example.com\"}";
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json.c_str());

        res = curl_easy_perform(curl);

        if(res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));

        curl_easy_cleanup(curl);
    }

    curl_global_cleanup();
    return 0;
}
```

#### JavaScript (Using Fetch API)
```javascript
fetch('http://example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

---

## Cookies

### C++
```cpp
#include <iostream>
#include <string>
#include <ctime>

int main() {
    std::time_t t = std::time(nullptr) + 3600;  // 1 hour from now
    std::tm* tm = std::gmtime(&t);
    char buffer[80];
    strftime(buffer, sizeof(buffer), "%a, %d-%b-%Y %H:%M:%S GMT", tm);

    std::cout << "Set-Cookie: username=john_doe; Domain=example.com; Path=/; Expires=" << buffer << std::endl;
    return 0;
}
```

### JavaScript
```javascript
document.cookie = "username=john_doe; domain=example.com; path=/; max-age=3600";

console.log(document.cookie);
```

---

## Program to Print Fibonacci Series

### C++
```cpp
#include <iostream>
using namespace std;

void fibonacci(int n) {
    int a = 0, b = 1, next;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
}

int main() {
    fibonacci(10);  // Output: 0 1 1 2 3 5 8 13 21 34
    return 0;
}
```

### JavaScript
```javascript
function fibonacci(n) {
    let a = 0, b = 1, next;
    for (let i = 0; i < n; i++) {
        console.log(a);
        next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(10);  // Output: 0 1 1 2 3 5 8 13 21 34
```

---

## Program to Print Factorial of a Number

### C++
```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << endl;  // Output: 120
    return 0;
}
```

### JavaScript
```javascript
function factorial(n) {
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120
```

---
