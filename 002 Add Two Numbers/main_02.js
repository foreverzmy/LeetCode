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
 * @property {any} ListNode.val
 * @property {ListNode|null} ListNode.next
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  /** @type {ListNode} */
  const res = new ListNode(0); // 用于储存结果
  let carry = 0; // 保存进位

  let copy = res;
  while (l1 !== null || l2 !== null) {
    const sum = getValue(l1) + getValue(l2) + carry; // tempList.val可能为0
    if (sum % 10 !== sum) {
      carry = 1;
    } else {
      carry = 0; // 初始化进位
    }
    copy.next = new ListNode(sum % 10);
    copy = copy.next;
    l1 = getNextOrStop(l1);
    l2 = getNextOrStop(l2);
  }

  // 如果还有进位，就再push一个
  if (carry) {
    copy.next = new ListNode(carry);
  }

  return res.next;
};

/**
 * @description 获取当前节点的值
 *
 * @param {ListNode|null} list
 */
function getValue(list) {
  return list ? list.val : 0;
}

/**
 * @description 获取下一个节点或者如果没下一个节点，设置val为0
 *
 * @param {ListNode|null} list
 */
function getNextOrStop(list) {
  if (list === null) return list;
  if (list.next === null) {
    list.val = 0;
  }
  return list.next;
}
