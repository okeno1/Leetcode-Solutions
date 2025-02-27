var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0, head);
    let slow = start, fast = start;
    
    for (let i =1; i <= n; i++) {
        fast = fast.next;
    }
    
    while(fast && fast.next) {
        slow = slow.next;
        fast =  fast.next;
    }
    
    let nthNode = slow.next
    slow.next = nthNode.next;
    
    return start.next;
};
