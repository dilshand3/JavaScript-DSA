function buyAndSellStock(prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        }
        max = Math.max(max,prices[i] - min);
    }
    return [min,max];
}
console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]))