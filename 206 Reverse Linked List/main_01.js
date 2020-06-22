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
  if (head === null) return head;

  /** @type {ListNode} */
  let reversedList = null;
  let currentList = head;

  while (currentList !== null) {
    const temp = currentList.next;
    currentList.next = reversedList;
    reversedList = currentList;
    currentList = temp;
  }

  return reversedList;
};