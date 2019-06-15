/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var start = new ListNode(null);
    
    var head = start
    
    while (l1 != null && l2 != null) {
        if (l1.val > l2.val){
            head.next = l2;
            l2 = l2.next;
            
        } else {
            head.next = l1;
            l1 = l1.next;
        }
        head = head.next;
    }
    
    if (l1 !== null) {
        head.next = l1
    } else if (l2 !== null) {
        head.next = l2
    }
    
    return start.next;
};