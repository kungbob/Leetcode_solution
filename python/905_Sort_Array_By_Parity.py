class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        return sorted(A, key = lambda x: x % 2)