const Semaphore = require("../models/Semaphore");

const semaphoreInstance = new Semaphore();

const refreshToken = async (counter) => {
  console.log(`Esperando refrescar token en operacion #${counter}`);
  const [isFirst, release] = await semaphoreInstance.acquire();
  if (!isFirst) return;

  console.log(`Refrescando token en operacion #${counter}`);
  await fetch("https://hub.dummyapis.com/delay?seconds=3");
  console.log(`Token refrescado en operacion #${counter}`);
  release();

  return "newToken";
};

module.exports = refreshToken;
