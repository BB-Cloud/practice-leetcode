const deepCycle = (node, nodeList = []) => {
    if (node) {
        nodeList.push(node);
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
            deepCycle(children[i], nodeList);
        }
    }
    return nodeList;
}

var root = document.getElementById('root')
console.log(deepTraversal(root, []))


// 把递归改成循环
const deepWhileCycle = (node) => {
    let nodeList = [];
    if (node) {
        let stack = [];
        stack.push(node);
        while(stack.length > 0) {
            const child = stack.pop();
            nodeList.push(child);
            let children = child.children;
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(childrenList[i]);
            }
        }
    }
    return nodeList
}
