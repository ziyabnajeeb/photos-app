// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getData = async (url) => {
//     setLoading(true);
//     try {
//       const request = await axios.get(url);
//       console.log('🚀 ~ file: useFetch.jsx:13 ~ getData ~ request:', request);
//       const response = await request.json();
//       setData(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData(url);
//   }, [url]);

//   const refetch = (url) => getData(url);

//   return { data, loading, error, refetch };
// };

// export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getData = async (url) => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const request = await axios.get(url, { cancelToken: source.token });
        const response = await request.json();
        if (response.data.content) setData(response.data.content);
        if (response.content) setData(response.content);
      } catch (error) {
        setError('An error occurred. Awkward..');
      } finally {
        setLoading(false);
      }
    };

    getData(url);

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
