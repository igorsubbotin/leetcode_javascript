// 2. Add Two Numbers - https://leetcode.com/problems/add-two-numbers
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
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let node = dummy;
    let shift = 0;
    while (l1 != null || l2 != null) {
        if (l1 != null) {
            shift += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            shift += l2.val;
            l2 = l2.next;
        }
        node.next = new ListNode(shift % 10);
        node = node.next;
        shift = Math.floor(shift/10);
    }
    if (shift > 0) node.next = new ListNode(shift);
    return dummy.next;
};