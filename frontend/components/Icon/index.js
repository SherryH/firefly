import React from "react";
import { Icon as ChakraIcon, Text, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";

const IconComponent = (
  { icon, text, disabled, iconWrapperProps, iconProps, ...rest },
  ref
) => {
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
      as="a"
      width="82px"
      direction="column"
      align="center"
      css={[!disabled && hoverCss]}
      {...iconWrapperProps}
      {...rest}
      ref={ref}
    >
      <ChakraIcon
        aria-label={text}
        as={icon}
        w={[12, 16]}
        h={[12, 16]}
        marginX="auto"
        color={color}
        {...iconProps}
      />
      {text && (
        <Text fontSize={["sm", "md"]} color={textColor}>
          {text}
        </Text>
      )}
    </Flex>
  );
};

export const Icon = React.forwardRef(IconComponent);
