import { useState } from 'react';
import { Button, Card, Col, Stack } from 'react-bootstrap';

const Photo = ({ id, download_url, title, author, body, removePhoto }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Col sm={12} className="mt-5" data-bs-theme="dark">
      <Card className="shadow rounded-4 pb-4">
        <Card.Img variant="top" className="rounded-top-4" src={download_url} alt={title} />
        <Card.Body>
          <Card.Title className="fw-bolder text-warning text-capitalize">{author}</Card.Title>
          <Card.Text className="fs-6 mt-2 mb-4 text-capitalize">
            {readMore ? body : `${body.substring(0, 120)}...`}
            <Button
              variant="link"
              className="text-warning text-decoration-none p-0 ms-2"
              onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show Less' : 'Read More'}
            </Button>
          </Card.Text>
          <Stack>
            <Button variant="outline-warning" size="lg" className="fw-bold" onClick={() => removePhoto(id)}>
              Not Interested
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Photo;
