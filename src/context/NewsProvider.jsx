import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL =
  "https://newsapi.org/v2/everything?apiKey=YOUR_NEWS_API_KEY_GOES_HERE&pageSize=30";

const NewsContext = createContext({});

export const NewsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(buildApiUrl());
        console.log(response.data);
        setData(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]); // Update the effect when searchTerm  changes

  const buildApiUrl = () => {
    let apiUrl = "";

    // Include search term in the API URL if present
    if (searchTerm) {
      apiUrl += `&q=${encodeURIComponent(searchTerm)}`;
    }

    if (!searchTerm) {
      apiUrl += "&q=tesla";
    }

    return API_BASE_URL + apiUrl;
  };

  const searchNews = (term) => {
    setSearchTerm(term);
  };

  // Context value
  const contextValue = {
    data,
    isLoading,
    error,
    searchNews,
  };

  return (
    <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>
  );
};

export default NewsContext;
