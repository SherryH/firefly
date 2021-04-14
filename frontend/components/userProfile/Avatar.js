import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";

export const Avatar = ({ src }) => {
  const size = useBreakpointValue({ base: "lg", md: "xl" });
  return <ChakraAvatar size={size} src={src} />;
};
