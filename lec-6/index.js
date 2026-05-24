// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }
// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

function block() {
  for (let i = 1; i < 10000000000; i++) {}
}

console.log("one");

Promise.resolve().then(() => block());

console.log("two");

// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და
// ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად Allsetteld გამოიყენე.

const resPromise = new Promise((res, rej) => res("success"));
const rejPromise = new Promise((res, rej) => rej("error"));

async function handlePromises() {
  try {
    const result = await resPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  try {
    const result = await rejPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

handlePromises();

Promise.allSettled([resPromise, rejPromise]).then((result) => {
  console.log(result);
});

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

const p1 = new Promise((res, rej) => {
  rej("error 1");
});

const p2 = new Promise((res, rej) => {
  rej("error 2");
});

const p3 = new Promise((res, rej) => {
  res("success 3");
});

const p4 = new Promise((res, rej) => {
  res("success 4");
});

Promise.any([p1, p2, p3, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი

const p11 = Promise.resolve("ok 1");
const p22 = Promise.reject("error 1");
const p33 = Promise.resolve("ok 2");
const p44 = Promise.reject("error 2");

Promise.allSettled([p11, p22, p33, p44]).then((results) => {
  const summary = results.reduce(
    (acc, item) => {
      if (item.status === "fulfilled") {
        acc.success++;
      } else {
        acc.error++;
      }
      return acc;
    },
    { success: 0, error: 0 },
  );

  console.log(summary);
});

// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

const p111 = Promise.resolve("ok 1");
const p222 = Promise.reject("error 1");
const p333 = Promise.resolve("ok 2");
const p444 = Promise.reject("error 2");
const p555 = Promise.reject("error 3");

Promise.allSettled([p111, p222, p333, p444, p555]).then((results) => {
  const failed = results
    .filter((item) => item.status === "rejected")
    .map((item) => item.reason);

  console.log(failed);
});

// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

Promise.all([
  fetch(api1).then((res) => res.json()),
  fetch(api2).then((res) => res.json()),
]).then(([users, posts]) => {
  console.log("Users:", users);
  console.log("Posts:", posts);
});
