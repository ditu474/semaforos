const refreshToken = require("./refreshToken");

let token = "anyToken";

const operation = async (counter) => {
  if (!token || counter % 3 === 0) {
    token = null;
    token = await refreshToken(counter);
  }

  console.log(`Haciendo operacion #${counter}`);
  await fetch("https://hub.dummyapis.com/delay?seconds=1");
  console.log(`Operacion #${counter} terminada`);
};

module.exports = operation;
