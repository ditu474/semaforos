let counter = 0;
let token = "fake-token";

const operation = async () => {
  console.log(`Haciendo operacion #${counter} con token: ${token}`);

  await fetch("https://hub.dummyapis.com/delay?seconds=2");
};

module.exports = operation;
