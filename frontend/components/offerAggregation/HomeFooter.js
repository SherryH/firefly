import { Flex } from '@chakra-ui/layout';
import { FaRegUser } from 'react-icons/fa';
import { BiMessageRoundedEdit, BiPlusCircle } from 'react-icons/bi';
import { Icon } from '../Icon';

export const HomeFooter = () => (
  <Flex
    justify="space-evenly"
    marginTop={5}
    borderTop="1px"
    borderColor="gray.100"
    paddingTop="16px"
  >
    <Icon icon={FaRegUser} text="My Profile" disabled />
    <Icon icon={BiMessageRoundedEdit} text="Message" />
    <Icon icon={BiPlusCircle} text="Add Offer" />
  </Flex>
);
