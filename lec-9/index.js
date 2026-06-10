// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]

function evenNumsAverage(arr) {
  const evenNums = arr.filter((el) => el % 2 === 0);
  const sum = evenNums.reduce((acc, curr) => acc + curr, 0);
  return sum / evenNums.length;
}

console.log(evenNumsAverage([1, 2, 3, 4, 5, 6]));

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"

function countWords(sentence) {
  return sentence.split(" ").length;
}

console.log(countWords("I love JavaScript"));

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა

const words = ["dog", "elephant", "cat", "hippopotamus"];

function longestWord(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestWord(words));
// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ

const arr = [3, 5, 3, 2, 5, 5, 3, 5];

function mostFrequent(arr) {
  const counts = {};
  let maxCount = 0;
  let result;
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      result = num;
    }
  }
  return result;
}

console.log(mostFrequent(arr));
// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even, odd };
}

console.log(countEvenOdd(nums));

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
const minNums = [10, 2, 33, 5, 7];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin(minNums));
