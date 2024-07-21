### Dynamic Sum of Two Numbers in a Linked List

#### Problem Description:
Given two linked lists representing numbers, write a function to add the numbers and store the result in a new linked list. Each node contains a single digit, and the digits are stored in reverse order, i.e., the 1's digit is at the head of the list.

#### Pseudocode:
1. Initialize a dummy node to act as a placeholder for the result linked list.
2. Initialize two pointers to traverse the given linked lists.
3. Initialize a variable to keep track of carry.
4. Traverse both linked lists until both are exhausted and there is no carry left:
   - Add the values of the current nodes and the carry.
   - Update the carry.
   - Create a new node with the resultant digit and add it to the result linked list.
5. Return the result linked list.

#### C++ Code:
```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;
    Node(int x) : data(x), next(nullptr) {}
};

Node* addTwoNumbers(Node* l1, Node* l2) {
    Node* dummy = new Node(0);
    Node* p = l1;
    Node* q = l2;
    Node* current = dummy;
    int carry = 0;
    
    while (p != nullptr || q != nullptr) {
        int x = (p != nullptr) ? p->data : 0;
        int y = (q != nullptr) ? q->data : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        current->next = new Node(sum % 10);
        current = current->next;
        if (p != nullptr) p = p->next;
        if (q != nullptr) q = q->next;
    }
    if (carry > 0) {
        current->next = new Node(carry);
    }
    return dummy->next;
}

void printList(Node* node) {
    while (node != nullptr) {
        std::cout << node->data << " ";
        node = node->next;
    }
    std::cout << std::endl;
}

int main() {
    Node* l1 = new Node(7);
    l1->next = new Node(1);
    l1->next->next = new Node(6);
    
    Node* l2 = new Node(5);
    l2->next = new Node(9);
    l2->next->next = new Node(2);

    Node* result = addTwoNumbers(l1, l2);
    printList(result);

    return 0;
}
```

### Middle to Reverse in Array

#### Problem Description:
Given an array, reverse it from the middle point to the start.

#### Pseudocode:
1. Calculate the middle index of the array.
2. Reverse the array elements from the start to the middle index.
3. Print or return the modified array.

#### C++ Code:
```cpp
#include <iostream>
#include <vector>

void reverseFromMiddle(std::vector<int>& arr) {
    int n = arr.size();
    int mid = n / 2;

    for (int i = 0; i < mid / 2; ++i) {
        std::swap(arr[i], arr[mid - 1 - i]);
    }
}

void printArray(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    reverseFromMiddle(arr);
    printArray(arr);

    return 0;
}
```

### Linked List in Array Form (Dynamic Sum Example)

#### Problem Description:
Given two arrays representing numbers, write a function to add the numbers and store the result in a new array. Each element contains a single digit, and the digits are stored in reverse order, i.e., the 1's digit is at the beginning of the array.

#### Pseudocode:
1. Initialize a result array with enough size to store the sum.
2. Traverse both arrays, adding corresponding digits and the carry.
3. Update the carry.
4. Store the result in the result array.
5. Remove any leading zeros in the result.

#### C++ Code:
```cpp
#include <iostream>
#include <vector>

std::vector<int> addTwoNumbers(const std::vector<int>& l1, const std::vector<int>& l2) {
    std::vector<int> result;
    int carry = 0;
    int n1 = l1.size(), n2 = l2.size();
    int maxLength = std::max(n1, n2);

    for (int i = 0; i < maxLength; ++i) {
        int x = (i < n1) ? l1[i] : 0;
        int y = (i < n2) ? l2[i] : 0;
        int sum = carry + x + y;
        carry = sum / 10;
        result.push_back(sum % 10);
    }

    if (carry > 0) {
        result.push_back(carry);
    }
    
    return result;
}

void printArray(const std::vector<int>& arr) {
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> l1 = {7, 1, 6}; // represents number 617
    std::vector<int> l2 = {5, 9, 2}; // represents number 295

    std::vector<int> result = addTwoNumbers(l1, l2);
    printArray(result); // Outputs: 2 1 9 (represents number 912)

    return 0;
}
```