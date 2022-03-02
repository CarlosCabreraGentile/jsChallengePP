// 2 - Sorted Squared Array
// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
 
const sortedSquareArray = (sortedArray) => {
 
   const squareArray = sortedArray
       .map(item => {
           return item * item;
       })
       .sort((a, b) => a - b);
   return squareArray;
 
}
 
const sortedArray = [1, 2, 3, 5, 6, 8, 9];
// const sortedArray =  [-2, -1];
// const sortedArray = [-10, -5, 0, 5, 10];
 
console.log(sortedSquareArray(sortedArray));