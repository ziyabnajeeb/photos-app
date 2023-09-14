import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Section } from './components/ui/Tag/Tag';
import Loading from './components/Loading/Loading';
import Photos from './components/Photos/Photos/Photos';
import { fetchComments, fetchImages, fetchPhotos } from './api/api';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const setPhotosData = async () => {
    setLoading(true);

    try {
      const [pics, chats, fetchedImages] = await Promise.all([fetchPhotos(), fetchComments(), fetchImages()]);
      const photosMergedData = pics.map((item, index) => ({ ...item, ...chats[index] }));
      const photosMergedImages = photosMergedData.map((item, index) => ({ ...item, ...fetchedImages[index] }));
      setPhotos([...photos, ...photosMergedImages]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPhotosData();
  }, []);

  return (
    <Container as="main" className="py-5">
      <Row className="justify-content-center align-items-center flex-column">
        <Col lg={8}>
          <Section className="text-test-gray mt-4">{loading ? <Loading /> : <Photos photos={photos} />}</Section>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
