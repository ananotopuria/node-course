const fs = require("fs");
// 1)წაიკითხე ყველა რიცხვი ფაილიდან, გამოთვალე მათი ჯამი და ჩაწერე სხვა ფაილში

fs.readFile("./txt/numbers.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const numbers = data.split(",").map((num) => Number(num.trim()));
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  fs.writeFile("./txt/sum.txt", String(sum), (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file written !!");
  });
});

// 2)ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  const output = data.split(" ").reverse().join(" ");
  console.log(output);
  fs.writeFile("./txt/output.txt", output, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file written !!");
  });
});

// 3)შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში

const users = [
  {
    name: "Ana",
    age: 25,
    email: "ana@gmail.com",
  },
  {
    name: "Nika",
    age: 16,
    email: "nika@gmail.com",
  },
  {
    name: "Gio",
    age: 28,
    email: "gio@gmail.com",
  },
];

fs.writeFile("./data.json", JSON.stringify(users, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Users saved successfully!");
});

// 4)წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში

fs.readFile("./txt/input.txt", "utf8", (err, data1) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile("./txt/output.txt", "utf8", (err, data2) => {
    if (err) {
      console.log(err);
      return;
    }

    const mergedData = `${data1}\n${data2}`;

    fs.writeFile("./txt/output2.txt", mergedData, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("Files merged successfully!");
    });
  });
});

// 5)ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

fs.writeFile(
  "./txt/text.txt",
  "Node.js is very useful for backend development",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }

    fs.readFile("./txt/text.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const wordsCount = data.split(" ").length;

      console.log("Words count:", wordsCount);
    });
  },
);

// 6)წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე

fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const users = JSON.parse(data);

  const adults = users.filter((user) => user.age > 18);

  fs.writeFile("./users.json", JSON.stringify(adults, null, 2), (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Filtered users saved!");
  });
});

// 7)შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ "passed.json" - ში

const students = [
  {
    name: "Ana",
    score: 85,
    passed: true,
  },
  {
    name: "Nika",
    score: 40,
    passed: false,
  },
  {
    name: "Gio",
    score: 70,
    passed: true,
  },
  {
    name: "Mari",
    score: 45,
    passed: false,
  },
];

fs.writeFile("./students.json", JSON.stringify(students, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile("./students.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const students = JSON.parse(data);

    const passedStudents = students.filter((student) => student.score > 50);

    fs.writeFile(
      "./passed.json",
      JSON.stringify(passedStudents, null, 2),
      (err) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("Passed students saved!");
      },
    );
  });
});

// 8)წაიკითხე "users.json", და ყველას, ვისაც არ აქვს "@" ელფოსტაში, წაშალე
// [
//   { "name": "Gio", "email": "gio@gmail.com" },
//   { "name": "Nika", "email": "nikaexample.com" },
//   { "name": "Mariam", "email": "mariam@reeducate.ge" },
//   { "name": "Lasha", "email": "lashareeducate.ge" },
//   { "name": "Ana", "email": "ana@mail.com" }
// ]

fs.readFile("./users2.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  const users = JSON.parse(data);

  const validUsers = users.filter((user) => user.email.includes("@"));

  fs.writeFile(
    "./validUsers.json",
    JSON.stringify(validUsers, null, 2),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("Valid users saved!");
    },
  );
});
