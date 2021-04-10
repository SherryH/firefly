import React from 'react';
import { Tag } from '@chakra-ui/react';
import { css } from '@emotion/react';

const OfferComponent = ({ id, children, ...rest }, ref) => {
  const hoverCss = css`
    &:focus, &:hover,&:active{
      font-weight: 700;
      box-shadow: 4px 4px 4px rgba(68, 68, 68, 0.1);
    }
  `
  return (
    <Tag
      key={id}
      fontSize="2xl"
      px="24px"
      py="12px"
      borderRadius="30px"
      color="brand.900"
      bgColor="bg.100"
      w="100%"
      lineHeight="1.5"
      textOverflow="ellipsis"
      overflow="hidden"
      whiteSpace="nowrap"
      display="inline-block"
      css={hoverCss}
      {...rest}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

export const Offer = React.forwardRef(OfferComponent);
