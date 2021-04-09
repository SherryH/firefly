import { Box, Flex, Heading } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';

export const HomeHeader = () => {
  const [region, setRegion] = useState('');
  const currentDate = new Date();

  const date = new Intl.NumberFormat('en-GB', {
    minimumIntegerDigits: 2,
  }).format(currentDate.getDate());

  const month = currentDate.toLocaleDateString('default', { month: 'long' });

  const year = currentDate.getFullYear().toString().slice(-2);

  useEffect(() => {
    fetch('https://extreme-ip-lookup.com/json/')
      .then((res) => res.json())
      .then(({ region, city, country }) => {
        const location = region || city || country;
        setRegion(location);
      })
      .catch((data, status) => {
        console.log('Request failed', data, status);
      });
  }, []);

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
