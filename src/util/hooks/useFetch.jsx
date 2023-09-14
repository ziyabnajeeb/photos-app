import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    setLoading(true);
    try {
      const request = await axios.get(url);
      console.log('🚀 ~ file: useFetch.jsx:13 ~ getData ~ request:', request);
      const response = await request.json();
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  const refetch = (url) => getData(url);

  return { data, loading, error, refetch };
};

export default useFetch;
