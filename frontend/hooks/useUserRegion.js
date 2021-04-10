import { useEffect, useState } from 'react';

export const useUserRegion = () => {
  const [region, setRegion] = useState('');
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
  return { region };
};
