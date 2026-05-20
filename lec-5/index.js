// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

function countdown(sec) {
  const interval = setInterval(() => {
    console.log(sec);
    if (sec === 0) {
      clearInterval(interval);
    }
    sec--;
  }, 1000);
}

countdown(5);

// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი
// იქამდე სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს

function matchNums(num) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * 20) + 1;
    console.log(`random number: ${randomNum}`);
  } while (randomNum !== num);

  console.log(`match found random number: ${randomNum} = number: ${num}`);
}

matchNums(5);

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს
// callback-ი რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში
// დააკონსოლე რომ n ნაკლებია

function checkNumber(n, callback = (n) => console.log(`${n} > 27`)) {
  if (n > 27) {
    callback(n);
  } else {
    console.log(`${n} < 27`);
  }
}

(checkNumber(20), (n) => console.log(`${n} > 27`));
(checkNumber(50), (n) => console.log(`${n} > 27`));
checkNumber(10);
checkNumber(80);

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ
// 4 - users. https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await

async function getUsers(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
    const fourUser = users.slice(0, 4);
    fourUser.forEach((user) => {
      console.log(user.id, user.name);
    });
  } catch (error) {
    console.log("error:", error);
  }
}

getUsers("https://jsonplaceholder.typicode.com/users");

// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20

let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 },
];

const grouped = people.reduce(
  (acc, person) => {
    if (person.age > 10) {
      acc.morethan10.push(person);
    }
    if (person.age < 20) {
      acc.lessthan20.push(person);
    }
    return acc;
  },
  { morethan10: [], lessthan20: [] },
);

console.log("age > 10", grouped.morethan10);
console.log("age < 20", grouped.lessthan20);

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს.
// თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია",
// სხვა შემთხვევაში "ნაკლები ან ტოლია".

function checkNumbers(a, b, callback) {
  if (a > b) {
    callback("მეტია");
  } else {
    callback("ნაკლები ან ტოლია");
  }
}

function printResult(message) {
  console.log(message);
}

checkNumbers(10, 5, printResult);
checkNumbers(3, 7, printResult);

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები

let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 },
];

const grouped2 = products.reduce(
  (acc, product) => {
    if (product.price > 20) {
      acc.moreThan20.push(product);
    } else {
      acc.lessOrEqual20.push(product);
    }
    return acc;
  },
  { moreThan20: [], lessOrEqual20: [] },
);

console.log(grouped2);
