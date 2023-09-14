import { useState, useEffect } from 'react';

const useLoadMore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [curPage, setCurPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const getData = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  // https://picsum.photos/
  useEffect(() => {
    const url = `https://picsum.photos/v2/list?page=${curPage}&limit=10`;
    setLoading(true);
    getData(url)
      .then((res) => {
        setHasMore(res.length > 0);
        setData((prev) => [...prev, ...res]);
        setErrorMsg('');
      })
      .catch((err) => {
        // set the error msg
        setErrorMsg('Something went wrong, Please try again later');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [curPage]);

  /**
   * The function `loadMoreOnClick` increments the current page state by 1 if the loading state is
   * false.
   * @returns the current page number incremented by 1, if loading is false.
   */
  const loadMoreOnClick = () => {
    // prevent click if the state is loading
    if (loading) return;
    setCurPage((prev) => prev + 1);
  };
};

export default List;
