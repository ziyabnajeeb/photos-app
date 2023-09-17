import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchComments, fetchImages, fetchPhotos } from './api/api';
import { Section } from './components/ui/Tag/Tag';
import { Error, LoadMore, Loading, Photos, Refresh } from './components';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const removePhoto = (id) => {
    const newPhoto = photos.filter((photo) => photo.id !== id);
    setPhotos(newPhoto);
  };

  const setPhotosData = async (page) => {
    setLoading(true);
    try {
      const [pics, chats, fetchedImages] = await Promise.all([
        fetchPhotos(page),
        fetchComments(page),
        fetchImages(page),
      ]);
      const photosMergedData = pics.map((item, index) => ({ ...item, ...chats[index] }));
      const photosMergedImages = photosMergedData.map((item, index) => ({ ...item, ...fetchedImages[index] }));
      setHasMore(photosMergedImages.length > 0);
      setPhotos((prevPhotos) => [...prevPhotos, ...photosMergedImages]);
    } catch (error) {
      setErrorMsg('Something went wrong, Please try again later');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPhotosData(page);
  }, [page]);

  const handleLoadMore = () => {
    // prevent click if the state is loading
    if (loading) return;
    setPage((prev) => prev + 1);
  };

  return (
    <Container as="main" className="py-5">
      <Row className="justify-content-center align-items-center flex-column">
        <Col lg={4}>
          <Section className="text-test-gray mt-4">
            {errorMsg && <Error errorMsg={errorMsg} />}
            {loading && !photos ? <Loading /> : <Photos photos={photos} removePhoto={removePhoto} />}
            {photos.length === 0 && <Refresh loading={loading} setPhotosData={setPhotosData} />}
            {photos?.length > 1 && hasMore && <LoadMore loading={loading} handleLoadMore={handleLoadMore} />}
          </Section>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
