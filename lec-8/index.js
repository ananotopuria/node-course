// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop

let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]];
const flattened = arr.flat(Infinity);
const unique = [];

for (let i = 0; i < flattened.length; i++) {
  if (!unique.includes(flattened[i])) {
    unique.push(flattened[i]);
  }
}

unique.sort((a, b) => a - b);

console.log(unique);

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.

let products = [
  { name: "Phone", price: 1200, rating: 4.5 },
  { name: "Laptop", price: 2500, rating: 4.8 },
  { name: "Book", price: 30, rating: 4.9 },
  { name: "TV", price: 800, rating: 4.0 },
];

const bestProduct = products.reduce((best, current) => {
  if (current.price >= 1000) return best;

  if (!best || current.rating > best.rating) {
    return current;
  }

  return best;
}, null);

console.log(bestProduct);

// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული

let sentence = "dog cat dog bird cat dog fish bird";

let words = sentence.split(" ");

let counts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(counts);

let maxWord = "";
let maxCount = 0;

for (let word in counts) {
  if (counts[word] > maxCount) {
    maxCount = counts[word];
    maxWord = word;
  }
}

console.log(maxWord); // dog
console.log(maxCount); // 3

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში.

function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("javascript", "a"));
console.log(countLetter("hello world", "l"));

// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig)

function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("ana"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("gig"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.

function mergeAndSum(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  const unique = [...new Set(merged)];

  return unique.reduce((sum, num) => sum + num, 0);
}

console.log(mergeAndSum([1, 2, 3], [3, 4, 5]));

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად.

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, -7, -8], -15));
