/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var insertionSortList = function(head) {
    if (!head) { return null }
    let resNodeList = {
        val: null,
        next: head,
    }
    while(head && head.next !== null) {
        // 把前一个大于后一个的值取出来
        if (head.val > head.next.val) {
            let temp = head.next;
            head.next = temp.next;
            temp.next = null;
            // 之后开始遍历
            let node = resNodeList;
            let isAdd = false;
            while(node && node.next !== null) {
                // 当发现后面一个比这个大的时候，开始插入
                if (node.next.val > temp.val) {
                  temp.next = node.next;
                  node.next = temp;
                  isAdd = true;
                  break;
                }
                // 正常往后挪一个
                node = node.next;
            }
            // 结果发现挪到底都没，那就当前这个最大，放最后
            if (!isAdd) {
                node.next = temp;
            }
        }
        if (head.next && head.next.val >= head.val) {
          head = head.next;
        }
    }
    return resNodeList.next;
};

insertionSortList({
    val: 5,
    next:{ 
        val: 1, 
        next: { 
            val: 3, 
            next: null
        } 
    }
});