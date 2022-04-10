import { useEffect, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../utils/consts';

const useFetch = (method, url, body) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const fetchData = async () => {
    try {
      const resp = await axios({
        method: method,
        url: url,
        data: body,
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const data = await resp?.data;
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, apiData, serverError };
};

export default useFetch;
