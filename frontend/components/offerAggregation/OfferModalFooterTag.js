import { Tag } from "@chakra-ui/tag";
import { pointerCss } from "../../lib/commonCss";

export const OfferModalFooterTag = ({ children, ...rest }) => {
  return (
    <Tag
      css={pointerCss}
      fontSize="2xl"
      px="24px"
      py="8px"
      borderRadius="30px"
      bgColor="brand.50"
      fontWeight="300"
      {...rest}
    >
      {children}
    </Tag>
  );
};
