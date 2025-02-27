class Solution:
    def minInsertions(self, s: str) -> int:
        @cache
        def dfs(l, r):
            if l >= r: return 0
            if s[l] == s[r]: return dfs(l+1, r-1)
            else: return 1 + min(dfs(l+1, r), dfs(l, r-1))
        return dfs(0, len(s)-1)
