import { Tag } from "@chakra-ui/tag";
import { pointerCss } from "../../lib/commonCss";

export const OfferModalFooterTag = ({ children, ...rest }) => {
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
    >
      {children}
    </Tag>
  );
};
