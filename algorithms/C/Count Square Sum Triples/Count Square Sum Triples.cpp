class Solution {
public:
    int countTriples(int n) {
        int res = 0;
        for (int a = 3, sqa; a < n; a++) {
            sqa = a * a;
            for (int b = 3, sqc, c; b < n; b++) {
                sqc = sqa + b * b;
                c = sqrt(sqc);
                if (c > n) break;
                res += c * c == sqc;
            }
        }
        return res;
    }
};
