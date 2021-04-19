import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { BiHome, BiMessageRoundedEdit, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";

import { Icon } from "../Icon";
import { Offer } from "../Offer/Offer";
import { OfferHeader } from "../Offer/OfferHeader";
import { Avatar } from "./Avatar";
import { useOffer, OfferModal } from "../../hooks/useOffer";

const USERPROFILE_QUERY = gql`
  query singleUser($id: ID!) {
    UserProfile(where: { id: $id }) {
      id
      name
      userImage {
        image {
          publicUrlTransformed
        }
      }
      offers {
        id
        title
        description
        offerImages {
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function UserProfilePage({ query }) {
  const {
    handleOfferClick,
    isOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
  } = useOffer();
  const [allImages, setAllImages] = useState([]);

  const { id } = query;
  const { data, error, loading } = useQuery(USERPROFILE_QUERY, {
    variables: { id },
  });
  const { name, offers, userImage } = data?.UserProfile || {};

  const userImg = userImage?.image?.publicUrlTransformed;

  const offerProps = {
    isOpen,
    onClose,
    selectedOfferIndex,
    setSelectedOfferIndex,
    offer: offers?.[selectedOfferIndex],
    maxIndex: offers?.length - 1,
  };

  useEffect(() => {
    // get all offerImages belong to the user
    const allImages = offers?.reduce((pre, cur) => {
      const currentImages = cur?.offerImages?.image || [];
      return pre.concat(currentImages);
    }, []);
    setAllImages(allImages);
  }, [name]);

  return (
    <Flex direction="column" id="vstack" color="brand.900" h="100%">
      <HStack w="100%" borderBottomWidth="1px" pb="24px">
        <Avatar src={userImg} />
        <Text fontSize="xl">{name}</Text>
      </HStack>
      <Flex direction="column" flex="1" h="100%" overflow="auto">
        <OfferHeader marginBottom="16px">{`${name}'s on-going offers (${offers?.length})`}</OfferHeader>
        <VStack marginBottom={9} spacing="16px" as="ul">
          {offers?.map(({ title, id }, index) => (
            <Offer as="li" id={id} key={id} onClick={handleOfferClick(index)}>
              {title}
            </Offer>
          ))}
        </VStack>
        <HStack spacing={5}>
          {allImages?.map(({ publicUrlTransformed, id }) => (
            <Image
              key={id}
              boxSize={["150px", "180px", "220px"]}
              objectFit="cover"
              src={publicUrlTransformed}
              alt="offerImage"
              borderRadius="lg"
            />
          ))}
        </HStack>
      </Flex>
      <Flex justifyContent="space-evenly" mt="8px">
        <Link href="/" passHref>
          <Icon icon={BiHome} text="Home" />
        </Link>
        <Icon icon={BiMessageRoundedEdit} text="Message" />
        <Icon icon={BiPlusCircle} text="Add Offer" />
      </Flex>
      <OfferModal {...offerProps} />
    </Flex>
  );
}
