// 1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: g
// etPerimeter(), getArea() , isRightTriangle().

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = this.getPerimeter() / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  isRightTriangle() {
    const sides = [this.a, this.b, this.c].sort((a, b) => a - b);

    return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
  }
}

const triangle = new Triangle(3, 4, 5);

console.log(triangle.getPerimeter());
console.log(triangle.getArea());
console.log(triangle.isRightTriangle());

// 2) შექმენი Smartphone (სმარტფონი) კლასი property-ებით: brand, model, releaseYear.
// გააკეთე ექსტენშენი GamingPhone, რომელსაც დაემატება gpuScore და batteryCapacity, და დაამატე მეთოდი performanceIndex().

class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}

class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);

    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }

  performanceIndex() {
    return this.gpuScore * 0.7 + this.batteryCapacity * 0.3;
  }
}

const phone = new GamingPhone("Asus", "ROG Phone", 2025, 9500, 6000);

console.log(phone.performanceIndex());

// 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),

class CryptoWallet {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;

    this.history.push({
      type: "deposit",
      amount,
    });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;

    this.history.push({
      type: "withdraw",
      amount,
    });
  }

  transfer(receiverWallet, amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }

    this.balance -= amount;
    receiverWallet.balance += amount;

    this.history.push({
      type: "transfer-out",
      amount,
      to: receiverWallet.owner,
    });

    receiverWallet.history.push({
      type: "transfer-in",
      amount,
      from: this.owner,
    });
  }

  getHistory() {
    return this.history;
  }
}

const wallet1 = new CryptoWallet("Anano");
const wallet2 = new CryptoWallet("Nino");

wallet1.deposit(1000);
wallet1.transfer(wallet2, 300);

console.log(wallet1.getHistory());
console.log(wallet2.getHistory());

// 4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

class Wishlist {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  updateItem(id, updatedData) {
    const item = this.items.find((item) => item.id === id);
    if (!item) return;
    Object.assign(item, updatedData);
  }
}

const wishlist = new Wishlist();

wishlist.addItem({
  id: 1,
  name: "MacBook",
});

wishlist.updateItem(1, {
  name: "MacBook Pro",
});
wishlist.deleteItem(1);
console.log(wishlist.items);

// 5)შექმენი Freelancer (ფრილანსერი) კლასი მეთოდით calculateEarnings(),
// რომელიც დათვლის შემოსავალს შესრულებული საათებისა და საათობრივი ტარიფის მიხედვით, დამატებით optional bonus-ს გადამეტებულ საათებზე (მაგ >160 სთ).1) შექმენი Triangle (სამკუთხედი) კლასი, რომელიც იღებს სამ გვერდს (a, b, c) და დაამატე მეთოდები: getPerimeter(), getArea() , isRightTriangle().

class Freelancer {
  constructor(hourlyRate) {
    this.hourlyRate = hourlyRate;
  }

  calculateEarnings(hoursWorked, bonusPerExtraHour = 0) {
    let earnings = hoursWorked * this.hourlyRate;
    if (hoursWorked > 160) {
      const extraHours = hoursWorked - 160;
      earnings += extraHours * bonusPerExtraHour;
    }
    return earnings;
  }
}

const freelancer = new Freelancer(25);

console.log(freelancer.calculateEarnings(150));
console.log(freelancer.calculateEarnings(170, 10));
