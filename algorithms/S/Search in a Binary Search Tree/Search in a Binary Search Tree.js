//====== Recursion ======
var searchBST = function(root, val) {
    if (!root) return null;
    if (root.val===val) return root;
    return searchBST(root.left, val) || searchBST(root.right, val)
}

//====== Iteration ======
var searchBST = function(root, val) {
    if (!root) return null;
    let node = root
    
    while (node) {
        if (node.val === val) return node;        
        else node = node.val > val ? node.left : node.right
    }
    
    return node
}