/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @typedef ListNode
 * @type {object}
 * @property {any} val
 * @property {ListNode|null} next
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res = new ListNode('start');

  let temp = res;
  while(l1 !== null || l2 !== null) {
      const res1 = l1 ? l1.val : 0;
      const res2 = l2 ? l2.val : 0;
      const res = res1 + res2 + carry;
      carry = res % 10 === res ? 0 : 1;
      temp.next = new ListNode(res % 10);
      temp = temp.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  if (carry) {
      temp.next = new ListNode(1);
  }

  return res.next
};