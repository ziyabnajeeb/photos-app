// api.js
export const fetchPhotos = async (page) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/photos?_start=${(page - 1) * 5}&_limit=5`;
    const response = await fetch(url);
    const photosData = await response.json();
    return photosData;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};

export const fetchComments = async (page) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/comments?_start=${(page - 1) * 5}&_limit=5`;
    const response = await fetch(url);
    const res = await response.json();
    const commentsData = res.map(({ body }) => ({ body }));
    return commentsData;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

export const fetchImages = async (page) => {
  try {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=5`;
    const response = await fetch(url);
    const res = await response.json();
    const imagesData = res.map(({ download_url }) => ({ download_url }));
    return imagesData;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
