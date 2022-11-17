import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCHKEY } from "../api/config";

const useGoogle = (defaultSearchTerm) => {
  const [googleResults, setGoogleResults] = useState([]);

  const cxKey = "016b426eac6ca44da";

  const searchGoogle = async (term) => {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=${SEARCHKEY}&cx=${cxKey}&q=${term}`
    );

    console.log(response.data.items);

    setGoogleResults(response.data.items);
  };

  useEffect(() => {
    searchGoogle(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [googleResults, searchGoogle];
};

export default useGoogle;
