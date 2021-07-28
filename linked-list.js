// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
const d3 = { val: 3, next: null };
const d2 = { val: 4, next: d3 };
const d1 = { val: 2, next: d2 };

const g3 = { val: 4, next: null };
const g2 = { val: 6, next: g3 };
const g1 = { val: 5, next: g2 };

var addTwoNumbers = function (l1, l2) {
  // console.log('l1=', l1);

  let head = null;
  let carry = null;
  let next = null;

  while (l1 || l2) {
    sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);

    let node = { val: Math.floor(sum % 10) };

    if (!next) {
      head = node;
      next = node;
    } else {
      next.next = node;
      next = node;
    }
  }

  // head = null

  return head;
};

console.log(addTwoNumbers(d1, g1));
