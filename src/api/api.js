const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
const url2 = 'https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5';
const url3 = 'https://picsum.photos/v2/list?page=2&limit=5';

export const fetchPhotos = async () => {
  try {
    const response = await fetch(url);
    const photosData = await response.json();
    return photosData;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const fetchComments = async () => {
  try {
    const response = await fetch(url2);
    const res = await response.json();
    const commentsData = res.map(({ body }) => ({ body }));
    return commentsData;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export const fetchImages = async () => {
  try {
    const response = await fetch(url3);
    const res = await response.json();
    const imagesData = res.map(({ download_url }) => ({ download_url }));
    return imagesData;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};
