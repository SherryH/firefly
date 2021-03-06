require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { FacebookAuthStrategy } = require('@keystonejs/auth-passport');
const initialiseData = require('./initial-data');
const UserProfileSchema = require('./lists/UserProfile.js');
const OfferSchema = require('./lists/Offer.js');
const UserImageSchema = require('./lists/UserImage.js');
const OfferImageSchema = require('./lists/OfferImage.js');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'backend';
const adapterConfig = {
  mongoUri: process.env.DATABASE_URL,
};

const cookie = {
  secure: true, //<-- needed on non-SSL servers. Set to true if SSL enabled
  maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  sameSite: false,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== 'true' && initialiseData,
  cookieSecret: process.env.COOKIE_SECRET,
  cookie,
  cors:
    process.env.NODE_ENV === 'production'
      ? { origin: /firefly-tau\.vercel\.app/ }
      : { origin: true, credentials: true },
  secureCookies: true, //<-- needed on non-SSL servers
  sessionStore: new MongoStore({
    url: process.env.MONGO_URL,
  }),
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

keystone.createList('UserProfile', UserProfileSchema);
keystone.createList('Offer', OfferSchema);
keystone.createList('UserImage', UserImageSchema);
keystone.createList('OfferImage', OfferImageSchema);

// comment this authStrategy and use Facebook Strategy
const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  // config: { protectIdentities: false },
  config: { protectIdentities: process.env.NODE_ENV === 'production' },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // new AdminUIApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
