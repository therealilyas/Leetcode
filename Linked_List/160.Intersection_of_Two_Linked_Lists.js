/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = getLen(headA);
  let lenB = getLen(headB);
  let diff = Math.abs(lenA - lenB);

  if (lenA > lenB) {
    while (diff--) headA = headA.next;
  } else {
    while (diff--) headB = headB.next;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

let getLen = function (head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
};
