class Solution:
    def maxDotProduct(self, A, B):
        dp = [float('-inf')] * (len(B)+1)
        for i in range(len(A)):
            prev = float('-inf')
            for j in range(len(B)):
                product = A[i] * B[j]
                prev, dp[j+1] =  dp[j+1], max(dp[j+1], dp[j], product, prev + product)
        return dp[-1]
