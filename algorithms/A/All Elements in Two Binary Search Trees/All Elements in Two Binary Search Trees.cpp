class Solution {
public:
    vector<int> v;
    void Temp(TreeNode* root)
    {
        if(root!=NULL){
        Temp(root->left);
        v.push_back(root->val);
        Temp(root->right);
        }
    }
    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {
        Temp(root1);
        Temp(root2);
        sort(v.begin(), v.end());
        
        return v;
    }
};
