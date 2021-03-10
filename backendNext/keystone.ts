import { config, createSchema } from '@keystone-next/keystone/schema';

import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret:
    process.env.COOKIE_SECRET || 'this secret should only be used in testing',
};

// config({ server, db, list, ui, session });
// https://github.com/keystonejs/keystone/blob/e0f5727832f4e56dcd5b1febaeb09f9e46329a41/packages-next/types/src/config/index.ts
export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    onConnect(ks) {
      console.log('keystone context', ks);
      // usually we seed db onConnect by checking the build flag
      return Promise.resolve();
    },
  },
  lists: createSchema({}),
  ui: {},
  // session: {},
});
