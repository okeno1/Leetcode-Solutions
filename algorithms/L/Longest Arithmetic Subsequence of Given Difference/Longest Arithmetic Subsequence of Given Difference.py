class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        d = defaultdict(int)
        for num in arr:
            if num - difference in d:
                d[num] =  d[num - difference] + 1
            else:
                d[num] = 1
        return max((d[x] for x in d))
    
