class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) return root;
        while (root.val < low || root.val > high) {
            root = root.val < low ? root.right : root.left;
            if (root == null) 
                return root;
        }   
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
}
