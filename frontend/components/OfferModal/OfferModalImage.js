import { Image } from "@chakra-ui/image";

export const OfferModalImage = ({ offerImages, title }) => {
  if (Array.isArray(offerImages)) {
    console.log("Error: Handle offerImages as an array!");
    return null;
  }
  if (!offerImages) return null;
  return (
    <Image
      key={offerImages?.image.id}
      width="100%"
      objectFit="cover"
      src={offerImages?.image.publicUrlTransformed}
      alt={title}
      borderRadius="3xl"
    />
  );
};
