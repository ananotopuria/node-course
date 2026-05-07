// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."

let fullName = "Lika Mamaladze";

const firstLetters = fullName
  .split(" ")
  .map((name) => {
    return name.charAt();
  })
  .join(".");

console.log(firstLetters);

// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"

let email = " EXAMPLE@MAIL.COM ";
const correctMail = email.trim().toLocaleLowerCase();
console.log(correctMail);

const mailCheck = email.includes("@");
console.log(mailCheck);

// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად

let str = "luka";
const lastUppercaseLetter = str[str.length - 1].toUpperCase();

console.log(lastUppercaseLetter);

// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FooBar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 5 === 0) {
    console.log("Bar");
  } else {
    console.log(i);
  }
}

// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.

const newTxt = `JS is ${"stupid".replace("stupid", "s****d")} but sometimes cool`;
console.log(newTxt);
