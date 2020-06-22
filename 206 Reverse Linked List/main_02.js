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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head.next === null) {
    return head;
  }

  // 如果没有到结尾
  const newList = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newList;
};