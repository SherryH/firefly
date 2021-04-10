const { Text, Relationship } = require('@keystonejs/fields');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Wysiwyg,
      editorConfig: {
        branding: false,
      },
    },
    owner: {
      type: Relationship,
      ref: 'UserProfile.offers',
    },
    offerImages: {
      type: Relationship,
      ref: 'OfferImage.offer',
      many: true,
    },
  },
};
