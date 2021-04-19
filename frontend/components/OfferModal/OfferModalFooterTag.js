import React from "react";
import { Tag } from "@chakra-ui/tag";
import { pointerCss } from "../../lib/commonCss";

const OfferModalFooterTagComponent = ({ children, ...rest }, ref) => {
  return (
    <Tag
      css={pointerCss}
      fontSize={["md", "2xl"]}
      px="24px"
      py="8px"
      borderRadius="30px"
      bgColor="brand.50"
      fontWeight="300"
      color="brand.900"
      {...rest}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

export const OfferModalFooterTag = React.forwardRef(
  OfferModalFooterTagComponent
);
