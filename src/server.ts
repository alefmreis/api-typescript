import dotenv from 'dotenv';

dotenv.config({});

import Application from './shared/application';

(async (): Promise<void> => {
  try {
    const server = new Application();
    server.init();
  } catch (error) {
    console.log(error);
  }
})();