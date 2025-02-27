var getDescentPeriods = function(prices) {
    const n = prices.length;
    
    let left = 0;
    let totRes = 0;
    
    while (left < n) {
        let count = 1;
        
        let right = left + 1;
        
        while (right < n && prices[right] + 1 === prices[right - 1]) {
            count += (right - left + 1);
            ++right;
        }
       
        totRes += count;
        
        left = right;
    }
    
    return totRes;
};
