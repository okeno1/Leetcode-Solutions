import math

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        
        a = 0
        
        while a ** 2 <= c:
            b = math.sqrt(c - a ** 2)
            
            if b.is_integer():
                return True
            
            a += 1
        
        return False
