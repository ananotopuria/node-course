import { Command } from "commander";
import fs from "fs/promises";

const program = new Command();
const filePath = "./products.json";

async function readProducts() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeProducts(products) {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2));
}

function checkIsExpired(date) {
  const today = new Date();
  const productDate = new Date(date);
  return productDate < today;
}

program.name("products-cli").description("Products CRUD CLI").version("1.0.0");

program
  .command("add")
  .requiredOption("--name <name>")
  .requiredOption("--description <description>")
  .requiredOption("--date <date>")
  .requiredOption("--category <category>")
  .option("--isexpire")
  .action(async (options) => {
    const products = await readProducts();
    const newProduct = {
      id: Date.now(),
      name: options.name,
      description: options.description,
      date: options.date,
      category: options.category,
    };

    if (options.isexpire) {
      newProduct.isExpired = checkIsExpired(options.date);
    }

    products.push(newProduct);
    await writeProducts(products);
    console.log("Product added:", newProduct);
  });

program.command("read").action(async () => {
  const products = await readProducts();
  console.log(products);
});

program
  .command("get")
  .requiredOption("--id <id>")
  .action(async (options) => {
    const products = await readProducts();
    const product = products.find(
      (product) => product.id === Number(options.id),
    );
    console.log(product || "Product not found");
  });

program
  .command("delete")
  .requiredOption("--id <id>")
  .action(async (options) => {
    const products = await readProducts();
    const filteredProducts = products.filter(
      (product) => product.id !== Number(options.id),
    );
    await writeProducts(filteredProducts);
    console.log("Product deleted");
  });

program
  .command("update")
  .requiredOption("--id <id>")
  .option("--name <name>")
  .option("--description <description>")
  .option("--date <date>")
  .option("--category <category>")
  .option("--isexpire")
  .action(async (options) => {
    const products = await readProducts();
    const product = products.find(
      (product) => product.id === Number(options.id),
    );

    if (!product) {
      console.log("Product not found");
      return;
    }

    if (options.name) product.name = options.name;
    if (options.description) product.description = options.description;
    if (options.date) product.date = options.date;
    if (options.category) product.category = options.category;
    if (options.isexpire) {
      product.isExpired = checkIsExpired(product.date);
    }

    await writeProducts(products);
    console.log("Product updated:", product);
  });

program.parse();
