/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  function DFS(v){
      if(!v) return v;
      let w = v.next;
      if(!w) return v;
      v.next = DFS(w.next);
      w.next = v;
      return w;
  }
  return DFS(head);
};