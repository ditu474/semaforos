const operation = require("./services/operation");

const main = () => {
  console.log("Operaciones iniciadas");

  const promises = [];
  for (let i = 1; i <= 6; i++) {
    promises.push(operation(i));
  }

  Promise.all(promises).then(() => {
    console.log("Operaciones terminadas");
  });
};

main();
