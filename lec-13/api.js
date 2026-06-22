const axios = require("axios");

const api = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

async function getBothApis() {
  try {
    const [users, posts] = await Promise.all([axios.get(api), axios.get(api2)]);

    console.log("Users:", users.data);
    console.log("Posts:", posts.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

async function getFirstApi() {
  try {
    const first = await Promise.race([axios.get(api), axios.get(api2)]);

    console.log("First resolved:", first.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

async function getStatuses() {
  const result = await Promise.allSettled([axios.get(api), axios.get(api2)]);

  console.log(result);
}

getBothApis();
getFirstApi();
getStatuses();
