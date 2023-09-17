import axios from 'axios';

const getData = async (url) => {
  try {
    const { data } = await axios.get(url);
    // console.log('🚀 ~ file: api.js:6 ~ getData ~ data:', data);
    return data;
  } catch (error) {
    console.log('An error occurred. Awkward..');
    return [];
  }
};

export const fetchPhotos = async (page) => {
  const response = await getData(`https://jsonplaceholder.typicode.com/photos?_start=${(page - 1) * 5}&_limit=5`);
  return response;
};

export const fetchComments = async (page) => {
  const response = await getData(`https://jsonplaceholder.typicode.com/comments?_start=${(page - 1) * 5}&_limit=5`);
  return response;
};

export const fetchImages = async (page) => {
  const response = await getData(`https://picsum.photos/v2/list?page=${page}&limit=5`);
  return response;
};
