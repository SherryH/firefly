import { Image } from '@chakra-ui/react';

export const OfferImage = (props) => {
  const { src, alt } = props;
  return (
    <Image
      boxSize="150px"
      objectFit="cover"
      src={src}
      alt={alt}
      borderRadius="lg"
    />
  );
};
