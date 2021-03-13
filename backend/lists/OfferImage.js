const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');
const { Relationship } = require('@keystonejs/fields');

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'firefly',
});

module.exports = {
  fields: {
    image: { type: CloudinaryImage, adapter: fileAdapter },
    offer: {
      type: Relationship,
      ref: 'Offer.offerImages',
    },
  },
};
