import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const request = async (...args) => {
    setLoading(true);
    setErrorMessage("");
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setErrorMessage(response.data?.error || 'An error occurred');
      return setError(true);
    }
    setError(false);
    return setData(response.data);  };

  return {
    request,
    data,
    loading,
    error,
    errorMessage
  };
};