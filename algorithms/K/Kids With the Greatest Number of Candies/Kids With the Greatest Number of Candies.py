class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        
        maxCandies = 0
        for candy in candies :
            if candy >= maxCandies:
                maxCandies = candy
        
        for i, candy in enumerate(candies):
            if candy + extraCandies >= maxCandies:
                candies[i] = True
            else:
                candies[i]  = False
        return candies
                
                
