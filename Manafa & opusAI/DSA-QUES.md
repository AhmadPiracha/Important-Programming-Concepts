### 1. Reverse a Linked List

**Pseudocode:**
```
function reverseLinkedList(head)
    previous = null
    current = head

    while current is not null
        next = current.next
        current.next = previous
        previous = current
        current = next

    return previous
```

**C++ Code:**
```cpp
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* reverseLinkedList(Node* head) {
    Node* previous = nullptr;
    Node* current = head;
    Node* next = nullptr;
    
    while (current != nullptr) {
        next = current->next;
        current->next = previous;
        previous = current;
        current = next;
    }
    
    return previous;
}
```

### 2. Find the Middle Element of a Linked List

**Pseudocode:**
```
function findMiddle(head)
    slow = head
    fast = head

    while fast is not null and fast.next is not null
        slow = slow.next
        fast = fast.next.next

    return slow
```

**C++ Code:**
```cpp
Node* findMiddle(Node* head) {
    if (head == nullptr) return nullptr;
    
    Node* slow = head;
    Node* fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}
```

### 3. Implement a Stack using Arrays/Linked List

**Pseudocode for Array:**
```
class Stack
    data = array of size N
    top = -1

    function push(value)
        if top >= N - 1
            throw StackOverflow
        top = top + 1
        data[top] = value

    function pop()
        if top < 0
            throw StackUnderflow
        value = data[top]
        top = top - 1
        return value

    function peek()
        if top < 0
            throw StackUnderflow
        return data[top]
```

**C++ Code for Array:**
```cpp
class Stack {
private:
    static const int MAX = 1000;
    int top;
    int data[MAX];
    
public:
    Stack() : top(-1) {}
    
    bool push(int value) {
        if (top >= MAX - 1) {
            std::cout << "Stack Overflow";
            return false;
        }
        data[++top] = value;
        return true;
    }
    
    int pop() {
        if (top < 0) {
            std::cout << "Stack Underflow";
            return -1;
        }
        return data[top--];
    }
    
    int peek() {
        if (top < 0) {
            std::cout << "Stack is Empty";
            return -1;
        }
        return data[top];
    }
};
```

**Pseudocode for Linked List:**
```
class StackNode
    data
    next

class Stack
    top = null

    function push(value)
        newNode = new StackNode(value)
        newNode.next = top
        top = newNode

    function pop()
        if top is null
            throw StackUnderflow
        value = top.data
        top = top.next
        return value

    function peek()
        if top is null
            throw StackUnderflow
        return top.data
```

**C++ Code for Linked List:**
```cpp
struct StackNode {
    int data;
    StackNode* next;
    StackNode(int val) : data(val), next(nullptr) {}
};

class Stack {
private:
    StackNode* top;
    
public:
    Stack() : top(nullptr) {}
    
    void push(int value) {
        StackNode* newNode = new StackNode(value);
        newNode->next = top;
        top = newNode;
    }
    
    int pop() {
        if (top == nullptr) {
            std::cout << "Stack Underflow";
            return -1;
        }
        int value = top->data;
        StackNode* temp = top;
        top = top->next;
        delete temp;
        return value;
    }
    
    int peek() {
        if (top == nullptr) {
            std::cout << "Stack is Empty";
            return -1;
        }
        return top->data;
    }
};
```

### 4. Implement a Queue using Arrays/Linked List

**Pseudocode for Array:**
```
class Queue
    data = array of size N
    front = 0
    rear = -1
    size = 0

    function enqueue(value)
        if size == N
            throw QueueOverflow
        rear = (rear + 1) % N
        data[rear] = value
        size = size + 1

    function dequeue()
        if size == 0
            throw QueueUnderflow
        value = data[front]
        front = (front + 1) % N
        size = size - 1
        return value

    function peek()
        if size == 0
            throw QueueUnderflow
        return data[front]
```

**C++ Code for Array:**
```cpp
class Queue {
private:
    static const int MAX = 1000;
    int front, rear, size;
    int data[MAX];
    
public:
    Queue() : front(0), rear(-1), size(0) {}
    
    bool enqueue(int value) {
        if (size == MAX) {
            std::cout << "Queue Overflow";
            return false;
        }
        rear = (rear + 1) % MAX;
        data[rear] = value;
        size++;
        return true;
    }
    
    int dequeue() {
        if (size == 0) {
            std::cout << "Queue Underflow";
            return -1;
        }
        int value = data[front];
        front = (front + 1) % MAX;
        size--;
        return value;
    }
    
    int peek() {
        if (size == 0) {
            std::cout << "Queue is Empty";
            return -1;
        }
        return data[front];
    }
};
```

**Pseudocode for Linked List:**
```
class QueueNode
    data
    next

class Queue
    front = null
    rear = null

    function enqueue(value)
        newNode = new QueueNode(value)
        if rear is null
            front = newNode
            rear = newNode
        else
            rear.next = newNode
            rear = newNode

    function dequeue()
        if front is null
            throw QueueUnderflow
        value = front.data
        front = front.next
        if front is null
            rear = null
        return value

    function peek()
        if front is null
            throw QueueUnderflow
        return front.data
```

**C++ Code for Linked List:**
```cpp
struct QueueNode {
    int data;
    QueueNode* next;
    QueueNode(int val) : data(val), next(nullptr) {}
};

class Queue {
private:
    QueueNode* front;
    QueueNode* rear;
    
public:
    Queue() : front(nullptr), rear(nullptr) {}
    
    void enqueue(int value) {
        QueueNode* newNode = new QueueNode(value);
        if (rear == nullptr) {
            front = rear = newNode;
            return;
        }
        rear->next = newNode;
        rear = newNode;
    }
    
    int dequeue() {
        if (front == nullptr) {
            std::cout << "Queue Underflow";
            return -1;
        }
        int value = front->data;
        QueueNode* temp = front;
        front = front->next;
        if (front == nullptr) rear = nullptr;
        delete temp;
        return value;
    }
    
    int peek() {
        if (front == nullptr) {
            std::cout << "Queue is Empty";
            return -1;
        }
        return front->data;
    }
};
```

### 5. Find the Factorial of a Number using Recursion

**Pseudocode:**
```
function factorial(n)
    if n == 0
        return 1
    else
        return n * factorial(n - 1)
```

**C++ Code:**
```cpp
int factorial(int n) {
    if (n == 0) return 1;
    else return n * factorial(n - 1);
}
```

### 6. Implement Binary Search in an Array

**Pseudocode:**
```
function binarySearch(arr, left, right, target)
    if right >= left
        mid = left + (right - left) / 2
        
        if arr[mid] == target
            return mid
        else if arr[mid] > target
            return binarySearch(arr, left, mid - 1, target)
        else
            return binarySearch(arr, mid + 1, right, target)
    return -1
```

**C++ Code:**
```cpp
int binarySearch(int arr[], int left, int right, int target) {
    if (right >= left) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] > target)
            return binarySearch(arr, left

, mid - 1, target);
        else
            return binarySearch(arr, mid + 1, right, target);
    }
    return -1;
}
```

### 7. Find the Largest/Smallest Element in an Array

**Pseudocode:**
```
function findLargest(arr)
    largest = arr[0]
    for i = 1 to arr.length - 1
        if arr[i] > largest
            largest = arr[i]
    return largest
```

**C++ Code:**
```cpp
int findLargest(int arr[], int n) {
    int largest = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
```

### 8. Implement Merge Sort

**Pseudocode:**
```
function mergeSort(arr, left, right)
    if left < right
        mid = left + (right - left) / 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)

function merge(arr, left, mid, right)
    n1 = mid - left + 1
    n2 = right - mid
    leftArray = array of size n1
    rightArray = array of size n2

    for i = 0 to n1 - 1
        leftArray[i] = arr[left + i]
    for j = 0 to n2 - 1
        rightArray[j] = arr[mid + 1 + j]

    i = 0, j = 0, k = left
    while i < n1 and j < n2
        if leftArray[i] <= rightArray[j]
            arr[k] = leftArray[i]
            i = i + 1
        else
            arr[k] = rightArray[j]
            j = j + 1
        k = k + 1

    while i < n1
        arr[k] = leftArray[i]
        i = i + 1
        k = k + 1

    while j < n2
        arr[k] = rightArray[j]
        j = j + 1
        k = k + 1
```

**C++ Code:**
```cpp
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int leftArray[n1], rightArray[n2];
    
    for (int i = 0; i < n1; i++)
        leftArray[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArray[j] = arr[mid + 1 + j];
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

### 9. Implement Quick Sort

**Pseudocode:**
```
function quickSort(arr, low, high)
    if low < high
        pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

function partition(arr, low, high)
    pivot = arr[high]
    i = low - 1
    for j = low to high - 1
        if arr[j] < pivot
            i = i + 1
            swap arr[i] with arr[j]
    swap arr[i + 1] with arr[high]
    return i + 1
```

**C++ Code:**
```cpp
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

### 10. Detect a Cycle in a Linked List

**Pseudocode:**
```
function detectCycle(head)
    slow = head
    fast = head

    while fast is not null and fast.next is not null
        slow = slow.next
        fast = fast.next.next
        if slow == fast
            return true

    return false
```

**C++ Code:**
```cpp
bool detectCycle(Node* head) {
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
```

### 11. Find the Intersection Point of Two Linked Lists

**Pseudocode:**
```
function getIntersectionNode(headA, headB)
    lenA = getLength(headA)
    lenB = getLength(headB)
    
    while lenA > lenB
        headA = headA.next
        lenA = lenA - 1

    while lenB > lenA
        headB = headB.next
        lenB = lenB - 1

    while headA != headB
        headA = headA.next
        headB = headB.next

    return headA

function getLength(head)
    length = 0
    while head != null
        length = length + 1
        head = head.next
    return length
```

**C++ Code:**
```cpp
int getLength(Node* head) {
    int length = 0;
    while (head != nullptr) {
        length++;
        head = head->next;
    }
    return length;
}

Node* getIntersectionNode(Node* headA, Node* headB) {
    int lenA = getLength(headA);
    int lenB = getLength(headB);
    
    while (lenA > lenB) {
        headA = headA->next;
        lenA--;
    }
    
    while (lenB > lenA) {
        headB = headB->next;
        lenB--;
    }
    
    while (headA != headB) {
        headA = headA->next;
        headB = headB->next;
    }
    
    return headA;
}
```

### 12. Check if a Binary Tree is a Binary Search Tree (BST)

**Pseudocode:**
```
function isBST(root)
    return isBSTUtil(root, MIN_INT, MAX_INT)

function isBSTUtil(node, min, max)
    if node is null
        return true
    if node.data <= min or node.data >= max
        return false
    return isBSTUtil(node.left, min, node.data) and isBSTUtil(node.right, node.data, max)
```

**C++ Code:**
```cpp
bool isBSTUtil(Node* node, int min, int max) {
    if (node == nullptr)
        return true;
    if (node->data <= min || node->data >= max)
        return false;
    return isBSTUtil(node->left, min, node->data) && isBSTUtil(node->right, node->data, max);
}

bool isBST(Node* root) {
    return isBSTUtil(root, INT_MIN, INT_MAX);
}
```

### 13. Print All Leaf Nodes of a Binary Tree

**Pseudocode:**
```
function printLeafNodes(root)
    if root is null
        return
    if root.left is null and root.right is null
        print(root.data)
    printLeafNodes(root.left)
    printLeafNodes(root.right)
```

**C++ Code:**
```cpp
void printLeafNodes(Node* root) {
    if (root == nullptr) return;
    if (root->left == nullptr && root->right == nullptr) {
        std::cout << root->data << " ";
        return;
    }
    printLeafNodes(root->left);
    printLeafNodes(root->right);
}
```

### 14. Reverse a Binary Tree

**Pseudocode:**
```
function reverseBinaryTree(root)
    if

 root is null
        return null
    temp = root.left
    root.left = root.right
    root.right = temp
    reverseBinaryTree(root.left)
    reverseBinaryTree(root.right)
```

**C++ Code:**
```cpp
void reverseBinaryTree(Node* root) {
    if (root == nullptr) return;
    Node* temp = root->left;
    root->left = root->right;
    root->right = temp;
    reverseBinaryTree(root->left);
    reverseBinaryTree(root->right);
}
```

### 15. Find the Height of a Binary Tree

**Pseudocode:**
```
function findHeight(root)
    if root is null
        return -1
    leftHeight = findHeight(root.left)
    rightHeight = findHeight(root.right)
    return max(leftHeight, rightHeight) + 1
```

**C++ Code:**
```cpp
int findHeight(Node* root) {
    if (root == nullptr) return -1;
    int leftHeight = findHeight(root->left);
    int rightHeight = findHeight(root->right);
    return std::max(leftHeight, rightHeight) + 1;
}
```

### 16. Implement Depth-First Search (DFS) on a Graph

**Pseudocode:**
```
function DFS(graph, startVertex)
    create a stack to store vertices
    push startVertex to stack
    mark startVertex as visited

    while stack is not empty
        vertex = pop from stack
        print(vertex)
        for each neighbor of vertex
            if neighbor is not visited
                push neighbor to stack
                mark neighbor as visited
```

**C++ Code:**
```cpp
void DFS(std::vector<std::vector<int>>& graph, int startVertex) {
    std::stack<int> stack;
    std::vector<bool> visited(graph.size(), false);
    
    stack.push(startVertex);
    visited[startVertex] = true;
    
    while (!stack.empty()) {
        int vertex = stack.top();
        stack.pop();
        std::cout << vertex << " ";
        
        for (int neighbor : graph[vertex]) {
            if (!visited[neighbor]) {
                stack.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}
```

### 17. Implement Breadth-First Search (BFS) on a Graph

**Pseudocode:**
```
function BFS(graph, startVertex)
    create a queue to store vertices
    enqueue startVertex to queue
    mark startVertex as visited

    while queue is not empty
        vertex = dequeue from queue
        print(vertex)
        for each neighbor of vertex
            if neighbor is not visited
                enqueue neighbor to queue
                mark neighbor as visited
```

**C++ Code:**
```cpp
void BFS(std::vector<std::vector<int>>& graph, int startVertex) {
    std::queue<int> queue;
    std::vector<bool> visited(graph.size(), false);
    
    queue.push(startVertex);
    visited[startVertex] = true;
    
    while (!queue.empty()) {
        int vertex = queue.front();
        queue.pop();
        std::cout << vertex << " ";
        
        for (int neighbor : graph[vertex]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}
```

### 18. Check if a Graph is Connected

**Pseudocode:**
```
function isConnected(graph)
    create a visited set
    startVertex = first vertex in graph
    DFS(graph, startVertex, visited)
    return size of visited set == number of vertices in graph

function DFS(graph, vertex, visited)
    mark vertex as visited
    for each neighbor of vertex
        if neighbor is not visited
            DFS(graph, neighbor, visited)
```

**C++ Code:**
```cpp
void DFS(std::vector<std::vector<int>>& graph, int vertex, std::vector<bool>& visited) {
    visited[vertex] = true;
    for (int neighbor : graph[vertex]) {
        if (!visited[neighbor]) {
            DFS(graph, neighbor, visited);
        }
    }
}

bool isConnected(std::vector<std::vector<int>>& graph) {
    std::vector<bool> visited(graph.size(), false);
    DFS(graph, 0, visited);
    
    for (bool v : visited) {
        if (!v) return false;
    }
    return true;
}
```

### 19. Implement Dijkstra's Algorithm for Shortest Path

**Pseudocode:**
```
function dijkstra(graph, startVertex)
    create distance array and set all to infinity except startVertex
    create a priority queue
    enqueue startVertex with distance 0

    while priority queue is not empty
        vertex = dequeue from priority queue
        for each neighbor of vertex
            alt = distance[vertex] + weight(vertex, neighbor)
            if alt < distance[neighbor]
                distance[neighbor] = alt
                enqueue neighbor with distance[neighbor]
    return distance array
```

**C++ Code:**
```cpp
void dijkstra(std::vector<std::vector<std::pair<int, int>>>& graph, int startVertex) {
    std::vector<int> distance(graph.size(), INT_MAX);
    distance[startVertex] = 0;
    
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    pq.push({0, startVertex});
    
    while (!pq.empty()) {
        int vertex = pq.top().second;
        pq.pop();
        
        for (auto neighbor : graph[vertex]) {
            int neighborVertex = neighbor.first;
            int weight = neighbor.second;
            if (distance[vertex] + weight < distance[neighborVertex]) {
                distance[neighborVertex] = distance[vertex] + weight;
                pq.push({distance[neighborVertex], neighborVertex});
            }
        }
    }
    
    for (int i = 0; i < distance.size(); i++) {
        std::cout << "Distance from " << startVertex << " to " << i << " is " << distance[i] << std::endl;
    }
}
```

### 20. Implement Prim's Algorithm for Minimum Spanning Tree

**Pseudocode:**
```
function primMST(graph)
    create a min heap and insert all vertices with key value as infinity
    key value of startVertex = 0
    parent array = -1
    while min heap is not empty
        extract min from min heap
        for each neighbor of extracted vertex
            if neighbor is in min heap and weight(extracted vertex, neighbor) < key[neighbor]
                key[neighbor] = weight(extracted vertex, neighbor)
                parent[neighbor] = extracted vertex
                decrease key of neighbor in min heap
    return parent array
```

**C++ Code:**
```cpp
void primMST(std::vector<std::vector<std::pair<int, int>>>& graph) {
    int n = graph.size();
    std::vector<int> key(n, INT_MAX);
    std::vector<int> parent(n, -1);
    std::vector<bool> inMST(n, false);
    key[0] = 0;
    
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    pq.push({0, 0});
    
    while (!pq.empty()) {
        int vertex = pq.top().second;
        pq.pop();
        
        inMST[vertex] = true;
        
        for (auto neighbor : graph[vertex]) {
            int neighborVertex = neighbor.first;
            int weight = neighbor.second;
            if (!inMST[neighborVertex] && weight < key[neighborVertex]) {
                key[neighborVertex] = weight;
                pq.push({key[neighborVertex], neighborVertex});
                parent[neighborVertex] = vertex;
            }
        }
    }
    
    for (int i = 1; i < n; i++) {
        std::cout << "Edge: " << parent[i] << " - " << i << " with weight " << key[i] << std::endl;
    }
}
```
