const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
    },
    offers: {
      type: Relationship,
      ref: 'Offer.owner',
      many: true,
    },
  },
};
