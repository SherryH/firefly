import { css } from "@emotion/react";

export const pointerCss = css`
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
  }
`;

export const disabledCssObj = {
  "&:hover,&:active,&:focus": {
    cursor: "default",
  },
  color: "gray.300",
};
