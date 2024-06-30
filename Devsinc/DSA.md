### Data Structures and Algorithms (DSA)

1. **What's wrong in this code?**
    ```cpp
    double x= 12.0; 
    double y=3.0; 
    double result = x%y; 
    cout<<result<<endl;
    ```
   **Answer:** The `%` operator cannot be used with `double` or `float` types. It can only be used with integers.

2. **Reverse the linked list in chunks of n**
   **Answer:**
   ```cpp
   ListNode* reverseKGroup(ListNode* head, int k) {
       if (!head || k == 1) return head;
       ListNode dummy(0);
       dummy.next = head;
       ListNode *cur = &dummy, *nex = &dummy, *pre = &dummy;
       int count = 0;
       while (cur->next) {
           cur = cur->next;
           count++;
       }
       while (count >= k) {
           cur = pre->next;
           nex = cur->next;
           for (int i = 1; i < k; ++i) {
               cur->next = nex->next;
               nex->next = pre->next;
               pre->next = nex;
               nex = cur->next;
           }
           pre = cur;
           count -= k;
       }
       return dummy.next;
   }
   ```

3. **Delete a node of BST**
   **Answer:**
   ```cpp
   TreeNode* deleteNode(TreeNode* root, int key) {
       if (!root) return root;
       if (key < root->val) root->left = deleteNode(root->left, key);
       else if (key > root->val) root->right = deleteNode(root->right, key);
       else {
           if (!root->left) return root->right;
           else if (!root->right) return root->left;
           TreeNode* temp = minValueNode(root->right);
           root->val = temp->val;
           root->right = deleteNode(root->right, temp->val);
       }
       return root;
   }
   TreeNode* minValueNode(TreeNode* node) {
       TreeNode* current = node;
       while (current && current->left) current = current->left;
       return current;
   }
   ```

4. **Merge two sorted arrays into a new array**
   **Answer:**
   ```cpp
   vector<int> mergeSortedArrays(vector<int>& arr1, vector<int>& arr2) {
       int n1 = arr1.size(), n2 = arr2.size();
       vector<int> result(n1 + n2);
       int i = 0, j = 0, k = 0;
       while (i < n1 && j < n2) {
           if (arr1[i] <= arr2[j]) result[k++] = arr1[i++];
           else result[k++] = arr2[j++];
       }
       while (i < n1) result[k++] = arr1[i++];
       while (j < n2) result[k++] = arr2[j++];
       return result;
   }
   ```

5. **Reverse a linked list using any data structure**
   **Answer:**
   ```cpp
   ListNode* reverseList(ListNode* head) {
       ListNode* prev = nullptr;
       while (head) {
           ListNode* next = head->next;
           head->next = prev;
           prev = head;
           head = next;
       }
       return prev;
   }
   ```

6. **Reverse linked list in O(1) space complexity**
   **Answer:** Same as above. Reversing a linked list in O(1) space complexity can be done by adjusting the pointers without using any extra space.

7. **Return indexes of the number which sum up to target number in O(N) time and O(1) space**
   **Answer:**
   ```cpp
   vector<int> twoSum(vector<int>& nums, int target) {
       unordered_map<int, int> num_map;
       for (int i = 0; i < nums.size(); ++i) {
           int complement = target - nums[i];
           if (num_map.find(complement) != num_map.end()) {
               return {num_map[complement], i};
           }
           num_map[nums[i]] = i;
       }
       return {};
   }
   ```

8. **Print even or odd based on the given number without if-else or ternary operator**
   **Answer:**
   ```cpp
   cout << ((number % 2) ? "Odd" : "Even");
   ```

9. **Find distance between two nodes in a BST**
   **Answer:**
   ```cpp
   int findDistance(TreeNode* root, int a, int b) {
       TreeNode* lca = findLCA(root, a, b);
       return distance(lca, a) + distance(lca, b);
   }
   TreeNode* findLCA(TreeNode* root, int a, int b) {
       if (!root) return nullptr;
       if (root->val == a || root->val == b) return root;
       TreeNode* left = findLCA(root->left, a, b);
       TreeNode* right = findLCA(root->right, a, b);
       if (left && right) return root;
       return left ? left : right;
   }
   int distance(TreeNode* root, int val) {
       if (!root) return -1;
       if (root->val == val) return 0;
       int dist = root->val > val ? distance(root->left, val) : distance(root->right, val);
       return dist == -1 ? -1 : 1 + dist;
   }
   ```

10. **Populate a BST from a given unsorted array**
    **Answer:**
    ```cpp
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (!root) return new TreeNode(val);
        if (val < root->val) root->left = insertIntoBST(root->left, val);
        else root->right = insertIntoBST(root->right, val);
        return root;
    }
    TreeNode* arrayToBST(vector<int>& nums) {
        TreeNode* root = nullptr;
        for (int num : nums) {
            root = insertIntoBST(root, num);
        }
        return root;
    }
    ```

11. **Flatten a nested array**
    **Answer:**
    ```python
    def flatten(arr):
        result = []
        for i in arr:
            if isinstance(i, list):
                result.extend(flatten(i))
            else:
                result.append(i)
        return result
    ```

12. **Find the intersection point in a linked list**
    **Answer:**
    ```cpp
    ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
        if (!headA || !headB) return nullptr;
        ListNode *a = headA, *b = headB;
        while (a != b) {
            a = a ? a->next : headB;
            b = b ? b->next : headA;
        }
        return a;
    }
    ```

13. **Check whether the linked list is a palindrome or not**
    **Answer:**
    ```cpp
    bool isPalindrome(ListNode* head) {
        if (!head) return true;
        ListNode *slow = head, *fast = head, *prev, *temp;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        prev = slow;
        slow = slow->next;
        prev->next = nullptr;
        while (slow) {
            temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }
        fast = head;
        while (prev) {
            if (fast->val != prev->val) return false;
            fast = fast->next;
            prev = prev->next;
        }
        return true;
    }
    ```

14. **Sum of consecutive k elements equals the sum**
    **Answer:**
    ```cpp
    bool sumConsecutiveK(int arr[], int n, int k, int sum) {
        int current_sum = 0;
        for (int i = 0; i < k; ++i) current_sum += arr[i];
        if (current_sum == sum) return true;
        for (int i = k; i < n; ++i) {
            current_sum += arr[i] - arr[i - k];
            if (current_sum == sum) return true;
        }
        return false;
    }
    ```

15. **Remove the node you are pointing to**
    **Answer:**
    ```cpp
    void deleteNode(ListNode* node) {
        node->val = node->next->val;
        ListNode* temp = node->next;
        node->next = node->next->next;
        delete temp;
    }
    ```

16. **Product of Array except itself**
    **Answer:**
    ```cpp
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> output(n, 1);
        int left = 1, right = 1;
        for (int i = 0; i < n; ++i) {
            output[i] *= left;
            left

 *= nums[i];
            output[n - 1 - i] *= right;
            right *= nums[n - 1 - i];
        }
        return output;
    }
    ```

17. **Sum of all nodes in a linked list**
    **Answer:**
    ```cpp
    int sumNodes(ListNode* head) {
        int sum = 0;
        while (head) {
            sum += head->val;
            head = head->bottom;
        }
        return sum;
    }
    ```

18. **Find the middle of a linked list in O(N)**
    **Answer:**
    ```cpp
    ListNode* findMiddle(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
    ```

19. **Detect and remove cycle in a linked list**
    **Answer:**
    ```cpp
    ListNode* detectCycle(ListNode* head) {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow->next;
                    fast = fast->next;
                }
                return slow;
            }
        }
        return nullptr;
    }
    void removeCycle(ListNode* head) {
        ListNode* cycleStart = detectCycle(head);
        if (!cycleStart) return;
        ListNode* ptr = cycleStart;
        while (ptr->next != cycleStart) {
            ptr = ptr->next;
        }
        ptr->next = nullptr;
    }
    ```

20. **Mirror the BST**
    **Answer:**
    ```cpp
    void mirror(TreeNode* node) {
        if (node == nullptr) return;
        mirror(node->left);
        mirror(node->right);
        swap(node->left, node->right);
    }
    ```

21. **Traversal of BST in worst case**
    **Answer:** Traversing a BST in the worst case (skewed tree) would require O(N) time complexity where N is the number of nodes.

22. **Find the missing number in an unsorted array from 1 to 100**
    **Answer:**
    ```cpp
    int findMissingNumber(vector<int>& nums) {
        int n = 100;
        int total_sum = n * (n + 1) / 2;
        int sum = accumulate(nums.begin(), nums.end(), 0);
        return total_sum - sum;
    }
    ```

23. **InOrder Traversal using Recursion**
    **Answer:**
    ```cpp
    void inOrderTraversal(TreeNode* root) {
        if (root == nullptr) return;
        inOrderTraversal(root->left);
        cout << root->val << " ";
        inOrderTraversal(root->right);
    }
    ```

24. **Find all non-repeating elements from Array O(N)**
    **Answer:**
    ```cpp
    vector<int> findNonRepeatingElements(vector<int>& nums) {
        unordered_map<int, int> freq;
        for (int num : nums) freq[num]++;
        vector<int> result;
        for (int num : nums) {
            if (freq[num] == 1) result.push_back(num);
        }
        return result;
    }
    ```

25. **Find the 2nd largest number in array using 1 loop**
    **Answer:**
    ```cpp
    int secondLargest(vector<int>& nums) {
        int first = INT_MIN, second = INT_MIN;
        for (int num : nums) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second;
    }
    ```

26. **Frequency of characters in a string with O(n) time and O(1) space complexity**
    **Answer:**
    ```cpp
    void characterFrequency(const string& str) {
        vector<int> freq(256, 0);
        for (char c : str) freq[c]++;
        for (int i = 0; i < 256; ++i) {
            if (freq[i] != 0) cout << (char)i << ": " << freq[i] << endl;
        }
    }
    ```

27. **Vending machine cash return algorithm**
    **Answer:**
    ```cpp
    vector<int> getChange(int amount, vector<int>& coins) {
        sort(coins.rbegin(), coins.rend());
        vector<int> change;
        for (int coin : coins) {
            while (amount >= coin) {
                amount -= coin;
                change.push_back(coin);
            }
        }
        return change;
    }
    ```

28. **Types of Data Structures**
    **Answer:**
    - **Linear Data Structures:** Arrays, Linked Lists, Stacks, Queues.
    - **Non-linear Data Structures:** Trees, Graphs.
    - **Hash-based Data Structures:** Hash Tables, Hash Maps.
    - **Advanced Data Structures:** Heaps, Tries, Disjoint Sets.

29. **Remove a node given only a pointer to that node**
    **Answer:** Same as question 15.

30. **Move all zeroes in an array to the left side in O(n)**
    **Answer:**
    ```cpp
    void moveZeroes(vector<int>& nums) {
        int j = nums.size() - 1;
        for (int i = nums.size() - 1; i >= 0; --i) {
            if (nums[i] != 0) {
                swap(nums[i], nums[j--]);
            }
        }
    }
    ```

31. **Return 12 if 18 passed and 18 if 12 passed without if-else**
    **Answer:**
    ```cpp
    int foo(int x) {
        return 30 - x;
    }
    ```

32. **Check whether the tree is balanced or not**
    **Answer:**
    ```cpp
    bool isBalanced(TreeNode* root) {
        return height(root) != -1;
    }
    int height(TreeNode* node) {
        if (!node) return 0;
        int left = height(node->left);
        if (left == -1) return -1;
        int right = height(node->right);
        if (right == -1) return -1;
        if (abs(left - right) > 1) return -1;
        return max(left, right) + 1;
    }
    ```

33. **Operations on a LinkedList that take constant time**
    **Answer:** Insertion, deletion, and access operations (head and tail) can be performed in constant time on a linked list.

34. **Algorithm to detect prime number**
    **Answer:**
    ```cpp
    bool isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
    ```

35. **Count the occurrence of a number in an array with O(N) time complexity and constant space complexity**
    **Answer:** Using hash maps would require extra space, making it O(N) space. However, if the values are within a known range, we can use a fixed-size array to keep the counts:
    ```cpp
    int countOccurrences(vector<int>& nums, int target) {
        int count = 0;
        for (int num : nums) {
            if (num == target) count++;
        }
        return count;
    }
    ```

36. **Pre Order Traversal**
    **Answer:**
    ```cpp
    void preOrderTraversal(TreeNode* root) {
        if (root == nullptr) return;
        cout << root->val << " ";
        preOrderTraversal(root->left);
        preOrderTraversal(root->right);
    }
    ```

37. **BFS traversal**
    **Answer:**
    ```cpp
    void bfs(TreeNode* root) {
        if (!root) return;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            cout << node->val << " ";
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
    }
    ```

38. **TwoSum problem with O(n) time complexity**
    **Answer:** Same as question 7.

39. **Sum of all the nodes of a binary tree**
    **Answer:**
    ```cpp
    int sumNodes(TreeNode* root) {
        if (!root) return 0;
        return root->val + sumNodes(root->left) + sumNodes(root->right);
    }
    ```