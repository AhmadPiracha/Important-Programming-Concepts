### 1. Reverse a String
**Logic**: Iterate through the string from the end to the beginning, appending each character to a new string.

**Pseudocode**:
```
1. Initialize an empty string `reverse`.
2. Get the length of the string.
3. Loop from the last index to the first:
   a. Append the current character to `reverse`.
4. Print the reversed string.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    string str = "hello";
    string reverse = "";
    int length = str.length();

    for (int i = length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    cout << reverse << endl;
    return 0;
}
```

---

### 2. Determine if a String is a Palindrome
**Logic**: Reverse the string and check if it matches the original.

**Pseudocode**:
```
1. Reverse the string.
2. Compare the reversed string with the original.
3. If they match, it's a palindrome; otherwise, it's not.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    string str = "madam";
    string reverse = "";
    int length = str.length();

    for (int i = length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    if (str == reverse) {
        cout << "Palindrome" << endl;
    } else {
        cout << "Not Palindrome" << endl;
    }

    return 0;
}
```

---

### 3. Find the Number of Occurrences of a Character in a String
**Logic**: Loop through the string and count occurrences of the target character.

**Pseudocode**:
```
1. Initialize a counter to 0.
2. Loop through the string:
   a. If the current character matches the target, increment the counter.
3. Print the counter.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    string str = "hello world";
    char search = 'l';
    int count = 0;

    for (int i = 0; i < str.length(); i++) {
        if (str[i] == search) {
            count++;
        }
    }

    cout << count << endl;
    return 0;
}
```

---

### 4. Check if Two Strings are Anagrams
**Logic**: Sort both strings and compare them.

**Pseudocode**:
```
1. Check if the lengths of the strings are equal.
2. Sort both strings.
3. Compare the sorted strings.
4. If they are equal, the strings are anagrams.
```

**Code**:
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    string str1 = "listen";
    string str2 = "silent";

    if (str1.length() != str2.length()) {
        cout << "Not anagrams" << endl;
        return 0;
    }

    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());

    if (str1 == str2) {
        cout << "Anagrams" << endl;
    } else {
        cout << "Not anagrams" << endl;
    }

    return 0;
}
```

---

### 5. Calculate the Number of Vowels and Consonants in a String
**Logic**: Loop through the string and count vowels and consonants.

**Pseudocode**:
```
1. Initialize vowel and consonant counters.
2. Loop through the string:
   a. If the character is a vowel, increment the vowel counter.
   b. Otherwise, increment the consonant counter.
3. Print both counters.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    string str = "hello world";
    int vowels = 0, consonants = 0;

    for (int i = 0; i < str.length(); i++) {
        char c = tolower(str[i]);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowels++;
        } else if (isalpha(c)) {
            consonants++;
        }
    }

    cout << "Vowels: " << vowels << endl;
    cout << "Consonants: " << consonants << endl;
    return 0;
}
```

---

### 6. Get Matching Elements in an Integer Array
**Logic**: Use nested loops to compare each element with the others.

**Pseudocode**:
```
1. Loop through the array with index i.
2. For each i, loop through the array starting from i+1.
3. If any elements match, print the element.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5, 1, 2, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                cout << arr[i] << " ";
            }
        }
    }

    return 0;
}
```

---

### 7. Implement Bubble Sort
**Logic**: Compare adjacent elements and swap them if they are in the wrong order.

**Pseudocode**:
```
1. Loop through the array.
2. For each element, loop again to compare it with the next element.
3. If the current element is greater than the next, swap them.
4. Repeat until the array is sorted.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 7, 6, 4, 9, 12};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```

---

### 8. Implement Insertion Sort
**Logic**: Assume the first element is sorted and insert the next element in the correct position.

**Pseudocode**:
```
1. Start from the second element.
2. Compare it with the elements before it.
3. Insert it in the correct position by shifting other elements.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 7, 6, 4, 9, 12};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```

---

### 9. Reverse an Array
**Logic**: Swap the elements at the start and end, moving towards the center.

**Pseudocode**:
```
1. Loop through the first half of the array.
2. Swap the current element with the corresponding element from the end.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 7, 6, 4, 9, 12};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
```

---

### 10. Swap Two Numbers Without Using a Third Variable
**Logic**: Use arithmetic operations to swap the values.

**Pseudocode**:
```
1. Add both numbers and store the result in the second variable.
2. Subtract the first number from the sum to get the second number's value.
3. Subtract the new second number from the sum to get the first number's value.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 20;

    b = b + a; // b now holds the sum of a and b
    a = b - a; // a now holds the original value of b
    b = b - a; // b now holds the original value of a

    cout << "After swapping: a = " << a << ", b = " << b << endl;

    return 0;
}
```
---

### 11. Print a Fibonacci Series Using Recursion
**Logic**: The Fibonacci series is generated by adding the previous two numbers in the series. The base cases are when `n` is 0 or 1.

**Pseudocode**:
```
1. Define a recursive function that:
   a. Returns 0 if n == 0.
   b. Returns 1 if n == 1.
   c. Otherwise, returns the sum of the function called with n-1 and n-2.
2. Loop from 0 to n-1 and call the function for each index to print the series.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10; // Number of terms in the Fibonacci series
    for (int i = 0; i < n; i++) {
        cout << fibonacci(i) << " ";
    }
    return 0;
}
```

---

### 12. Find the Factorial of an Integer
**Logic**: The factorial of a number `n` is the product of all positive integers less than or equal to `n`. 

**Pseudocode**:
```
1. Define a recursive function that:
   a. Returns 1 if n == 0.
   b. Otherwise, returns n * function(n-1).
2. Call this function with the desired integer.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    cout << "Factorial of " << n << " is " << factorial(n) << endl;
    return 0;
}
```

---

### 13. Reverse a Linked List
**Logic**: Traverse through the linked list and reverse the pointers of each node.

**Pseudocode**:
```
1. Initialize three pointers: prev as NULL, curr as head, and next as NULL.
2. Traverse the list:
   a. Store the next node.
   b. Reverse the current node's pointer.
   c. Move pointers one position forward.
3. Set head to prev.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void reverse(Node** head) {
    Node* prev = NULL;
    Node* curr = *head;
    Node* next = NULL;

    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    *head = prev;
}

void printList(Node* head) {
    while (head != NULL) {
        cout << head->data << " ";
        head = head->next;
    }
}

int main() {
    Node* head = new Node{1, NULL};
    head->next = new Node{2, NULL};
    head->next->next = new Node{3, NULL};
    head->next->next->next = new Node{4, NULL};

    reverse(&head);
    printList(head);
    return 0;
}
```

---

### 14. Implement Binary Search
**Logic**: Binary search works by repeatedly dividing the search interval in half.

**Pseudocode**:
```
1. Initialize two pointers, low and high, to the first and last indices of the array.
2. While low <= high:
   a. Find the middle index.
   b. If the middle element equals the target, return the index.
   c. If the target is less, adjust the high pointer.
   d. If the target is greater, adjust the low pointer.
3. If not found, return -1.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int size, int target) {
    int low = 0, high = size - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1; // Target not found
}

int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 10;
    int result = binarySearch(arr, n, target);
    if(result != -1)
        cout << "Element is present at index " << result << endl;
    else
        cout << "Element is not present in array" << endl;
    return 0;
}
```

---

### 15. Find the Second Largest Number in an Array
**Logic**: Traverse the array while maintaining the largest and second-largest values.

**Pseudocode**:
```
1. Initialize two variables, largest and second_largest.
2. Traverse the array:
   a. If the current element is greater than largest, update second_largest and then largest.
   b. Else if the current element is greater than second_largest, update second_largest.
3. Print the second largest.
```

**Code**:
```cpp
#include <iostream>
#include <climits>
using namespace std;

int main() {
    int arr[] = {10, 20, 4, 45, 99, 99};
    int n = sizeof(arr) / sizeof(arr[0]);

    int largest = INT_MIN;
    int second_largest = INT_MIN;

    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            second_largest = largest;
            largest = arr[i];
        } else if (arr[i] > second_largest && arr[i] != largest) {
            second_largest = arr[i];
        }
    }

    if (second_largest == INT_MIN)
        cout << "No second largest element" << endl;
    else
        cout << "The second largest element is " << second_largest << endl;

    return 0;
}
```

---

### 16. Remove All Occurrences of a Given Character from a String
**Logic**: Traverse the string and append characters to a new string if they do not match the target character.

**Pseudocode**:
```
1. Initialize an empty string result.
2. Loop through the original string:
   a. If the character is not the target, append it to result.
3. Print the result.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    string str = "hello world";
    char remove_char = 'l';
    string result = "";

    for (int i = 0; i < str.length(); i++) {
        if (str[i] != remove_char) {
            result += str[i];
        }
    }

    cout << result << endl;
    return 0;
}
```

---

### 17. Showcase Inheritance
**Logic**: Demonstrate inheritance by creating a base class and a derived class.

**Pseudocode**:
```
1. Define a base class with a method.
2. Define a derived class that inherits the base class.
3. Override the method in the derived class.
4. Create objects of both classes and call their methods.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

class Animal {
public:
    void sound() {
        cout << "This is a generic animal sound" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        cout << "Bark" << endl;
    }
};

int main() {
    Animal a;
    Dog d;

    a.sound(); // Calls base class method
    d.sound(); // Calls derived class method
    return 0;
}
```

---

### 18. Explain Overloading and Overriding
**Overloading**: Having multiple functions with the same name but different parameters.
**Overriding**: A derived class provides a specific implementation of a method that is already defined in its base class.

**Example of Overloading**:
```cpp
#include <iostream>
using namespace std;

class Example {
public:
    void func(int x) {
        cout << "Function with int argument: " << x << endl;
    }

    void func(double x) {
        cout << "Function with double argument: " << x << endl;
    }
};

int main() {
    Example obj;
    obj.func(10);   // Calls int version
    obj.func(5.5);  // Calls double version
    return 0;
}
```

**Example of Overriding**:
```cpp
#include <iostream>
using namespace std;

class Base {
public:
    virtual void show() {
        cout << "Base class show function" << endl;
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived class show function" << endl;
    }
};

int main() {
    Base* bptr;
    Derived d;
    bptr = &d;

    bptr->show();  // Calls Derived class's show function
    return 0;


}
```

---

### 19. Check If a Number Is Prime
**Logic**: A prime number is only divisible by 1 and itself.

**Pseudocode**:
```
1. Check if n is less than 2; if so, return false.
2. Loop from 2 to sqrt(n):
   a. If n is divisible by any number, return false.
3. Return true.
```

**Code**:
```cpp
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1)
        return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}

int main() {
    int n = 29;
    if (isPrime(n))
        cout << n << " is a prime number" << endl;
    else
        cout << n << " is not a prime number" << endl;
    return 0;
}
```

---

### 20. Sum All Elements in an Array
**Logic**: Traverse through the array and accumulate the sum of its elements.

**Pseudocode**:
```
1. Initialize sum to 0.
2. Loop through each element in the array:
   a. Add the element to sum.
3. Print the sum.
```

**Code**:
```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int sum = 0;

    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }

    cout << "Sum of all elements in the array: " << sum << endl;
    return 0;
}
```

---

These solutions cover the remaining problems you asked for. If you need further explanations or additional problems, feel free to ask!
