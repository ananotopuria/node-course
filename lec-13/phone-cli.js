const { Command } = require("commander");
const { read, write } = require("./utils/helper");

const program = new Command();

const filePath = "phones.json";

program.name("phone-cli").description("Phone CLI app").version("1.0.0");

program
  .command("add")
  .argument("<name>", "person name")
  .argument("<phone>", "phone number")
  .option("--america", "add 011 before phone number")
  .action(async (name, phone, options) => {
    const phones = await read(filePath, true);

    const newPhone = {
      id: Date.now(),
      name,
      phone: options.america ? `011${phone}` : phone,
    };

    phones.push(newPhone);

    await write(filePath, phones, true);

    console.log("Phone added:", newPhone);
  });

program
  .command("delete")
  .argument("<id>", "phone id")
  .action(async (id) => {
    const phones = await read(filePath, true);

    const filteredPhones = phones.filter((phone) => phone.id !== Number(id));

    await write(filePath, filteredPhones, true);

    console.log("Phone deleted");
  });

program
  .command("get")
  .argument("<id>", "phone id")
  .action(async (id) => {
    const phones = await read(filePath, true);

    const foundPhone = phones.find((phone) => phone.id === Number(id));

    if (!foundPhone) {
      console.log("Phone not found");
      return;
    }

    console.log(foundPhone);
  });

program.command("list").action(async () => {
  const phones = await read(filePath, true);
  console.log(phones);
});

program.parse();
