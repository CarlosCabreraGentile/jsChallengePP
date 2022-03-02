// 1 - Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
// The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
 
const minSumMoney = (coins) => {
   let minSum = 0;
 
   coins
       .sort((a, b) => a - b)
       .map(coin => {
           if (minSum + 1 < coin) {
               return;
           } else {
               minSum += coin;
           }
       })
 
   return minSum + 1;
}
 
const coins = [5, 7, 1, 1, 2, 3, 22];
// const coins = [1, 1, 1, 1, 1];
// const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
 
console.log(minSumMoney(coins));