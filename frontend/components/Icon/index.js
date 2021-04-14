import { Icon as ChakraIcon, Text, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";

export const Icon = ({ icon, text, disabled, iconWrapperProps, iconProps }) => {
  const color = disabled ? "gray.300" : "brand.100";
  const textColor = disabled ? "gray.300" : "brand.900";

  const hoverCss = css`
    &:focus,
    &:hover,
    &:active {
      font-weight: 800;
      cursor: pointer;
    }
  `;

  return (
    <Flex
      width="82px"
      direction="column"
      align="center"
      css={[!disabled && hoverCss]}
      {...iconWrapperProps}
    >
      <ChakraIcon
        aria-label={text}
        as={icon}
        w={12}
        h={12}
        marginX="auto"
        color={color}
        {...iconProps}
      />
      {text && <Text color={textColor}>{text}</Text>}
    </Flex>
  );
};
