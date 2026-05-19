// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
const arr = [1, 2, 3];

const tripleNums = arr.map((num) => num * 3);
console.log(tripleNums);

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე

const nums = [1, 4, 5, 7, 8, 9, 11, 54, 18];

const filteredNums = nums.filter((num) => num % 3 === 0);

console.log(filteredNums);

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი

const numbers = [1, 4, -5, 7, 8, 9, 11, -54, 18];

const sumOfPositiveNumbers = numbers.reduce(
  (acc, curr) => (curr > 0 ? acc + curr : acc),
  0,
);
console.log(sumOfPositiveNumbers);

// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
let namesArr = ["giorgi", "nika", "mariami"];

const newNamesArr = namesArr.map((el) => el.slice(0, -1));

console.log(newNamesArr);

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე

const randomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 21, 75, 54, 99, 18];

const newDoublesFilteredArr = randomNums
  .map((el) => el * 2)
  .filter((el) => el % 3 === 0);
console.log(newDoublesFilteredArr);

// 6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]

let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];

const sortedArr = numsArr.sort((a, b) => a - b);
console.log(sortedArr);

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbersArr = numbersArr.map((num) => num * 2).filter((num) => num > 5);
console.log(newNumbersArr);

// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]

const arr1 = [1, 1, 1, 1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr1)];
console.log(unique);

// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]

const arr2 = [-1, 20, 90, 4, 5, 111];
const sorted = [...arr2].sort((a, b) => a - b);
const sum = sorted[0] + sorted[1];
console.log(sum);
