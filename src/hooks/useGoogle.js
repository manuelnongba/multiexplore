import { useEffect, useState } from 'react';
import axios from 'axios';
import { cxKey, SEARCHKEY } from '../api/config';

const useGoogle = (defaultSearchTerm) => {
  const [googleResults, setGoogleResults] = useState([]);

  const searchGoogle = async (term) => {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${SEARCHKEY}&cx=${cxKey}&q=${term}`
    );

    setGoogleResults(response.data.items);
  };

  useEffect(() => {
    searchGoogle(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [googleResults, searchGoogle];
};

export default useGoogle;
