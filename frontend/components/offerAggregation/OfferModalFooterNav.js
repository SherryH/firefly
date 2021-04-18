import { Icon as ChakraIcon } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { disabledCssObj } from "../../lib/commonCss";

export const OfferModalFooterNav = ({
  selectedOfferIndex,
  maxIndex,
  setSelectedOfferIndex,
}) => {
  const disablePreNav = selectedOfferIndex === 0;
  const disableNextNav = selectedOfferIndex === maxIndex;

  const handleNavigationClick = (offset) => {
    const newIndex = selectedOfferIndex + offset;
    if (newIndex < 0 || newIndex > maxIndex) return;
    setSelectedOfferIndex(newIndex);
  };
  return (
    <>
      <ChakraIcon
        sx={disablePreNav && { ...disabledCssObj }}
        as={BiChevronLeft}
        w={10}
        h={10}
        onClick={() => handleNavigationClick(-1)}
      />
      <ChakraIcon
        sx={disableNextNav && { ...disabledCssObj }}
        as={BiChevronRight}
        w={10}
        h={10}
        onClick={() => handleNavigationClick(1)}
      />
    </>
  );
};
