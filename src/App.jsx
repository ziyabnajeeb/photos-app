import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { Section } from './components/ui/Tag/Tag';
import Loading from './components/Loading/Loading';
import Photos from './components/Photos/Photos/Photos';
import { fetchComments, fetchImages, fetchPhotos } from './api/api';
import ArrowDown from './assets/images/arrow-down.svg';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const setPhotosData = async () => {
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
    setPhotosData();
  }, [page]);

  const handleLoadMore = () => {
    // prevent click if the state is loading
    if (loading) return;
    setPage((prev) => prev + 1);
  };

  return (
    <Container as="main" className="py-5">
      <Row className="justify-content-center align-items-center flex-column">
        <Col lg={8}>
          <Section className="text-test-gray mt-4">
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            {loading && photos === null ? <Loading /> : <Photos photos={photos} />}

            <Row className="row justify-content-center align-items-center mt-5">
              <Col sm={8} className="text-center">
                {!loading && hasMore && (
                  <Button
                    onClick={handleLoadMore}
                    size="lg"
                    variant="rusted"
                    className="text-uppercase fw-bolder rounded-circle p-3 d-flex mx-auto">
                    {loading ? <Loading /> : <ArrowDown className="fs-1 text-warning" />}
                  </Button>
                )}
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
