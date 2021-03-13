import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';

export default function OfferModal({ isOpen, onOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>菠蘿麵包試賣分享</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="60vh">
            <Text>
              🖖嗨大家好，幫忙推薦一下朋友在試賣的菠蘿麵包，每個售價2€，目前一週只出貨一次喔！趁著春暖花開，外出走春之際，不妨買個菠蘿麵包，解解鄉愁，保證值得。
              <p>地點：S-Bahn Friedenau 時間：March 10 (Wed) After 12pm</p>
              <p>有意者pm，祝大家身心健康！</p>
            </Text>
            <Flex justify="center" marginTop={10}>
              <Image
                boxSize="200px"
                objectFit="cover"
                src="/static/wine.jpg"
                alt="Dan Abramov"
                borderRadius="lg"
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Icon as={FaUserAlt} w={16} h={16} marginX="auto" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
