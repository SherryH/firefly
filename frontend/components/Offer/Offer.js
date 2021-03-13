import React from 'react';
import { Tag } from '@chakra-ui/react';

const OfferComponent = ({ children, ...rest }, ref) => {
  return (
    <Tag
      fontSize="2xl"
      px={5}
      py={3}
      borderRadius="30px"
      bgColor="orange.100"
      w="100%"
      {...rest}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

export const Offer = React.forwardRef(OfferComponent);
