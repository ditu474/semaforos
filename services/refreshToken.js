import Semaphore from "../models/Semaphore";

const semaphoreInstance = new Semaphore();

const refreshToken = async () => {
  const [isFirst, release] = await monoSemaphore.acquire();
  if (!isFirst) return;

  // TODO: operation

  release();
};
