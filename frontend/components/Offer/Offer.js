import React from 'react';
import { Tag } from '@chakra-ui/react';

const OfferComponent = ({ id, children, ...rest }, ref) => {
  return (
    <Tag
      key={id}
      fontSize="2xl"
      px="24px"
      py="24px"
      borderRadius="30px"
      bgColor="bg.100"
      w="100%"
      maxH="1.5rem"
      {...rest}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

export const Offer = React.forwardRef(OfferComponent);
