import { Heading } from "@chakra-ui/layout";

export const OfferHeader = ({ children, ...rest }) => {
  return (
    <Heading
      as="h6"
      size={["md", "lg"]}
      marginTop="24px"
      fontWeight="normal"
      color="brand.100"
      {...rest}
    >
      {children}
    </Heading>
  );
};
