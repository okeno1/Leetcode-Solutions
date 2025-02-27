class Solution {
    public void deleteNode(ListNode node) {
        
        // 4    5    1    9   :  Node = 5
        
        node.val = node.next.val;
        
        //Copy next node val to current node.
        //4    1     1    9
        //     ------------
        
        //Point node.next = node.next.next
        // 4 -----> 1 ----> 9
        
        node.next = node.next.next;
        // 4     1    9
    }
}
