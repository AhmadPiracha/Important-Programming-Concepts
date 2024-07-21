### Data Structures

### 1. Palindrome

#### Pseudocode
1. Define a function `isPalindrome` that takes a string `s`.
2. Initialize two indices, `left` to 0 and `right` to the length of `s` - 1.
3. While `left` is less than `right`:
   - If `s[left]` is not equal to `s[right]`, return `false`.
   - Increment `left` and decrement `right`.
4. Return `true` (the string is a palindrome).

#### C++ Code
```cpp
#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int left = 0;
    int right = s.length() - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

int main() {
    string str = "racecar";
    if (isPalindrome(str)) {
        cout << str << " is a palindrome." << endl;
    } else {
        cout << str << " is not a palindrome." << endl;
    }
    return 0;
}
```

### 2. Fibonacci

#### Pseudocode
1. Define a function `fibonacci` that takes an integer `n`.
2. If `n` is 0, return 0.
3. If `n` is 1, return 1.
4. Initialize two variables `a` to 0 and `b` to 1.
5. Loop from 2 to `n`:
   - Set `c` to `a + b`.
   - Set `a` to `b`.
   - Set `b` to `c`.
6. Return `b`.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int n = 10;
    cout << "Fibonacci of " << n << " is " << fibonacci(n) << endl;
    return 0;
}
```

### 3. Recursion

#### Pseudocode for Factorial
1. Define a function `factorial` that takes an integer `n`.
2. If `n` is 0 or 1, return 1.
3. Return `n * factorial(n - 1)`.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int n = 5;
    cout << "Factorial of " << n << " is " << factorial(n) << endl;
    return 0;
}
```
Here are the solutions for the specified problems:

### 4. Reverse an Array

#### Pseudocode
1. Define a function `reverseArray` that takes an array `arr` and its length `n`.
2. Initialize two indices, `left` to 0 and `right` to `n - 1`.
3. While `left` is less than `right`:
   - Swap `arr[left]` and `arr[right]`.
   - Increment `left` and decrement `right`.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

void reverseArray(int arr[], int n) {
    int left = 0;
    int right = n - 1;
    
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    reverseArray(arr, n);
    
    cout << "Reversed array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### 5. Find Middle of Linked List

#### Pseudocode
1. Define a class `Node` with an integer `data` and a pointer `next`.
2. Define a function `findMiddle` that takes the head of the linked list.
3. Initialize two pointers, `slow` and `fast`, to the head.
4. While `fast` and `fast.next` are not `NULL`:
   - Move `slow` one step.
   - Move `fast` two steps.
5. Return `slow` (the middle node).

#### C++ Code
```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    
    Node* middle = findMiddle(head);
    if (middle != nullptr) {
        cout << "Middle element is " << middle->data << endl;
    }
    
    return 0;
}
```

### 6. Detect a Loop in a Linked List

#### Pseudocode
1. Define a class `Node` with an integer `data` and a pointer `next`.
2. Define a function `detectLoop` that takes the head of the linked list.
3. Initialize two pointers, `slow` and `fast`, to the head.
4. While `fast` and `fast.next` are not `NULL`:
   - Move `slow` one step.
   - Move `fast` two steps.
   - If `slow` equals `fast`, return `true` (loop detected).
5. Return `false` (no loop).

#### C++ Code
```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

bool detectLoop(Node* head) {
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = head->next; // Create a loop

    if (detectLoop(head)) {
        cout << "Loop detected in the linked list." << endl;
    } else {
        cout << "No loop in the linked list." << endl;
    }

    return 0;
}
```

### 7. Find Intersection Point of Two Linked Lists

#### Pseudocode
1. Define a class `Node` with an integer `data` and a pointer `next`.
2. Define a function `getIntersectionNode` that takes two heads of linked lists.
3. Initialize two pointers, `ptr1` and `ptr2`, to the heads of the two lists.
4. While `ptr1` is not equal to `ptr2`:
   - Move `ptr1` to the next node, or to the head of the second list if `ptr1` is `NULL`.
   - Move `ptr2` to the next node, or to the head of the first list if `ptr2` is `NULL`.
5. Return `ptr1` (the intersection point, or `NULL` if no intersection).

#### C++ Code
```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* getIntersectionNode(Node* head1, Node* head2) {
    Node* ptr1 = head1;
    Node* ptr2 = head2;

    while (ptr1 != ptr2) {
        ptr1 = (ptr1 == nullptr) ? head2 : ptr1->next;
        ptr2 = (ptr2 == nullptr) ? head1 : ptr2->next;
    }

    return ptr1;
}

int main() {
    // Create two linked lists
    Node* head1 = new Node(1);
    head1->next = new Node(2);
    head1->next->next = new Node(3);
    head1->next->next->next = new Node(4);
    head1->next->next->next->next = new Node(5);

    Node* head2 = new Node(6);
    head2->next = new Node(7);
    head2->next->next = head1->next->next; // Intersection at node 3

    Node* intersection = getIntersectionNode(head1, head2);
    if (intersection != nullptr) {
        cout << "Intersection point is " << intersection->data << endl;
    } else {
        cout << "No intersection point." << endl;
    }

    return 0;
}
```

### 8. Merge Two Sorted Arrays

#### Pseudocode
1. Define a function `mergeArrays` that takes two sorted arrays `arr1` and `arr2`, and their sizes `n1` and `n2`.
2. Initialize an empty array `merged` with size `n1 + n2`.
3. Initialize three indices, `i` to 0, `j` to 0, and `k` to 0.
4. While `i` is less than `n1` and `j` is less than `n2`:
   - If `arr1[i]` is less than or equal to `arr2[j]`, set `merged[k]` to `arr1[i]` and increment `i`.
   - Else, set `merged[k]` to `arr2[j]` and increment `j`.
   - Increment `k`.
5. Copy the remaining elements of `arr1` (if any) to `merged`.
6. Copy the remaining elements of `arr2` (if any) to `merged`.
7. Return `merged`.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

void mergeArrays(int arr1[], int n1, int arr2[], int n2, int merged[]) {
    int i = 0, j = 0, k = 0;
    
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }
    
    while (i < n1) {
        merged[k++] = arr1[i++];
    }
    
    while (j < n2) {
        merged[k++] = arr2[j++];
    }
}

int main() {
    int arr1[] = {1, 3, 5, 7};
    int arr2[] = {2, 4, 6, 8};
    int n1 = sizeof(arr1) / sizeof(arr1[0]);
    int n2 = sizeof(arr2) / sizeof(arr2[0]);
    int merged[n1 + n2];

    mergeArrays(arr1, n1, arr2, n2, merged);

    cout << "Merged array: ";
    for (int i = 0; i < n1 + n2; i++) {
        cout << merged[i] << " ";
    }
    cout << endl;

    return 0;
}
```

### 9. Remove Duplicates from Sorted Array

#### Pseudocode
1. Define a function `removeDuplicates` that takes a sorted array `arr` and its size `n`.
2. If `n` is 0 or 1, return `n`.
3. Initialize a variable `j` to 0.
4. Loop through the array from index 1 to `n - 1`:
   - If `arr[i]` is not equal to `arr[j]`, increment `j` and set `arr[j]` to `arr[i]`.
5. Return `j + 1` (the new length of the array without duplicates).

#### C++ Code
```cpp
#include <iostream>
using namespace std;

int removeDuplicates(int arr[], int n) {
    if (n == 0 || n == 1) {
        return n;
    }
    
    int j = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] != arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}

int main() {
    int arr[] = {1, 1, 2, 2, 3, 4, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    n = removeDuplicates(arr, n);
    
    cout << "Array after removing duplicates: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```


### 10. Find nth Element in a Linked List from the End

#### Pseudocode
1. Define a function `printNthFromLast` that takes `head` of the linked list and `n`.
2. Initialize `len` to 0.
3. Initialize `temp` to `head`.
4. Count the number of nodes in the linked list:
   - While `temp` is not `NULL`:
     - Move `temp` to the next node.
     - Increment `len` by 1.
5. Check if `n` is greater than `len`:
   - If true, return.
6. Reset `temp` to `head`.
7. Find the (len - n + 1)th node from the beginning:
   - Loop from `i = 1` to `len - n`:
     - Move `temp` to the next node.
8. Print `temp.data`.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

void printNthFromLast(Node* head, int n) {
    int len = 0;
    Node* temp = head;
    
    // Count the number of nodes in the linked list
    while (temp != nullptr) {
        temp = temp->next;
        len++;
    }
    
    // Check if n is greater than the length of the list
    if (len < n) return;
    
    temp = head;
    
    // Get the (len - n + 1)th node from the beginning
    for (int i = 1; i < len - n + 1; i++) {
        temp = temp->next;
    }
    
    cout << temp->data << endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    
    int n = 2;
    cout << "The " << n << "th element from the end is: ";
    printNthFromLast(head, n);
    
    return 0;
}
```

### 11. Find Middle of Linked List and Reverse from Middle

#### Pseudocode
1. Define a class `Node` with an integer `data` and a pointer `next`.
2. Define a function `findMiddle` that takes the head of the linked list and returns the middle node.
3. Define a function `reverseList` that takes the head of a linked list and returns the new head of the reversed list.
4. Define a function `reverseFromMiddle` that takes the head of the linked list:
   - Find the middle node using `findMiddle`.
   - Reverse the list starting from the middle node using `reverseList`.
   - Return the head of the modified list.

#### C++ Code
```cpp
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    Node* next = nullptr;
    
    while (curr != nullptr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

Node* reverseFromMiddle(Node* head) {
    if (head == nullptr || head->next == nullptr) return head;
    
    Node* middle = findMiddle(head);
    Node* reversedSecondHalf = reverseList(middle);
    
    Node* temp = head;
    while (temp->next != middle) {
        temp = temp->next;
    }
    temp->next = reversedSecondHalf;
    
    return head;
}

void printList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(5);
    
    cout << "Original list: ";
    printList(head);
    
    head = reverseFromMiddle(head);
    
    cout << "Modified list after reversing from middle: ";
    printList(head);
    
    return 0;
}
```
### 12. Find the nth element in a linked list from the end

### Pseudocode

1. **Define a function `printNthFromLast`** that takes `head` of the linked list and `n` as inputs.
2. **Initialize `len` to 0**.
3. **Initialize `temp` to `head`**.
4. **Count the number of nodes** in the linked list:
   - While `temp` is not `NULL`:
     - Move `temp` to the next node.
     - Increment `len` by 1.
5. **Check if `n` is greater than `len`**:
   - If true, return (because there are not enough nodes).
6. **Reset `temp` to `head`**.
7. **Find the (len - n + 1)th node** from the beginning:
   - Loop from `i = 1` to `len - n`:
     - Move `temp` to the next node.
8. **Print `temp.data`** (the nth node from the end).
9. **Return** from the function.

### Pseudocode Steps

```plaintext
function printNthFromLast(head, n):
    initialize len to 0
    initialize temp to head

    // Step 1: Count the number of nodes in the linked list
    while temp is not NULL:
        temp = temp.next
        len = len + 1

    // Step 2: Check if value of n is more than length of the linked list
    if len < n:
        return

    // Step 3: Reset temp to head
    temp = head

    // Step 4: Get the (len - n + 1)th node from the beginning
    for i from 1 to len - n:
        temp = temp.next

    // Step 5: Print the data of the nth node from the end
    print(temp.data)

    return
```
