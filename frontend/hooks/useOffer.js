import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";

export { default as OfferModal } from "../components/OfferModal";

export const useOffer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(null);
  const handleOfferClick = (index) => () => {
    setSelectedOfferIndex(index);
    onOpen();
  };

  const offerProps = {
    isOpen,
    onOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
  };

  // ATTEMPT: Pass the offerProps to the OfferModal directly here w
  // However, the whole Modal gets teared down and rebuilt again when working through the navigation
  // useMemo freezes the content
  // https://stackoverflow.com/questions/58469220/react-hooks-return-children-wrapping-component
  // Export the useOffer hook and the OfferModal separately for now

  // const OfferModalComp = useMemo(
  //   ({ offer, maxIndex }) => {
  //     // return "hihi";
  //     return <OfferModal {...offerProps} offer={offer} maxIndex={maxIndex} />;
  //   },
  //   [onClose, onOpen, isOpen]
  // );

  return {
    isOpen,
    onOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
    handleOfferClick,
    // OfferModalComp,
  };
};
