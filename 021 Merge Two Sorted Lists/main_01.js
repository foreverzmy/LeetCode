/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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
var mergeTwoLists = function (l1, l2) {
  // 终止条件
  if (l1 === null || l2 === null) return l1 || l2;

  const l1Val = l1.val;
  const l2Val = l2.val;
  if (l1Val <= l2Val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
