// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე

const numbers = [];

for (let i = 5; i <= 15; i++) {
  numbers.push(i);
}

console.log(numbers);

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]

let arrR = [1, 2, 3, 4, 5];
const reversedNums = arrR.reverse();
console.log(reversedNums);

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]

let arr2 = [100, 2, 3, 9];

let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}

console.log(min);

// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]

let arr3 = [1, 2, 3, 4, 5, 6, 7];

const middle = arr3.slice(3, 4);

console.log(middle);

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]

let arr4 = [1, 2];
let arr5 = [3, 4];

const wholeArr = arr4.concat(arr5);
console.log(wholeArr);

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]

let arr6 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
const uniqueArr = [...new Set(arr6)];

console.log(uniqueArr);

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]

let arr7 = [1, 2, 3, 4, 5, 6, 7];

let even = [];
let odd = [];

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    even.push(arr7[i]);
  } else {
    odd.push(arr7[i]);
  }
}

console.log(even);
console.log(odd);

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
let arr8 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];

let positiveCount = 0;
let negativeSum = 0;

for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > 0) {
    positiveCount++;
  } else if (arr8[i] < 0) {
    negativeSum += arr8[i];
  }
}

console.log(positiveCount);
console.log(negativeSum);

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])

let arr9 = [1, -2, 3, -4];

let inverted = [];

for (let i = 0; i < arr9.length; i++) {
  inverted.push(-arr9[i]);
}

console.log(inverted);

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]

let arr10 = [1, [2, [3]], [4]];

let flatArr = arr10.flat(Infinity);

console.log(flatArr);

// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)

let fruits = ["apple", "banana", "orange", "kiwi"];

// 1) წაშალე "banana"
fruits.splice(1, 1);

// 2) "orange"-ის წინ დაამატე "mango"
fruits.splice(1, 0, "mango");

console.log(fruits);
