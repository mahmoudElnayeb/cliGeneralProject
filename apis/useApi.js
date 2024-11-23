import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const request = async (...args) => {
    setLoading(true);
    setError(false);
    setErrorMessage("");

    try {
      const response = await apiFunc(...args);
      setLoading(false);

      if (!response.ok) {
        setError(true);
        setErrorMessage(response.data?.error || 'An error occurred');
        console.log('API Error:', {
          status: response.status,
          data: response.data,
          problem: response.problem
        });
        return false;
      }

      setData(response.data);
      return true;
    } catch (error) {
      console.log('API Exception:', error);
      setError(true);
      setErrorMessage(error.message);
      setLoading(false);
      return false;
    }
  };

  return { 
    data, 
    error, 
    loading, 
    request,
    errorMessage 
  };
};