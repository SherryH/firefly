import { Box, Flex, Heading } from '@chakra-ui/layout';
import { useUserRegion } from '../../hooks/useUserRegion';

export const HomeHeader = () => {
  const { region } = useUserRegion();
  const currentDate = new Date();

  const date = new Intl.NumberFormat('en-GB', {
    minimumIntegerDigits: 2,
  }).format(currentDate.getDate());

  const month = currentDate.toLocaleDateString('default', { month: 'long' });

  const year = currentDate.getFullYear().toString().slice(-2);

  return (
    <Flex
      justify="space-around"
      padding="24px"
      borderBottom="brand.100"
      borderBottomWidth="1px"
    >
      <Box>
        <Heading fontSize="2xl">
          {date}. {month}. {year}
        </Heading>
      </Box>
      <Heading fontSize="2xl">{region}</Heading>
    </Flex>
  );
};
