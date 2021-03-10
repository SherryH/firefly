const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
      isMultiline: true,
    },
    owner: {
      type: Relationship,
      ref: 'UserProfile.offers',
    },
  },
};
