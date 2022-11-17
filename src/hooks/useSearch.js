import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (defaultSearchTerm) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });

    setResults(data.query.search);
  };
  return [results, search];
};

export default useSearch;
