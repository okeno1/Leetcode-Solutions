class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        step  = 0
        while step < len(nums):
            if nums[step] == val:
                nums.pop(step)
                continue
            step+=1
        return len(nums)
