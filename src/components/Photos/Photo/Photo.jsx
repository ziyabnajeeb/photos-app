import { useState } from 'react';
import { Button, Card, Col, Placeholder, Stack } from 'react-bootstrap';

const Photo = ({ id, download_url, title, author, body, removePhoto }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Col sm={12} className="mt-5" data-bs-theme="dark">
      <Card className="shadow rounded-4 pb-4">
        <Placeholder
          as="div"
          animation="glow"
          className="card-img-wrapper"
          style={{ height: '250px', overflow: 'hidden' }}>
          <Placeholder
            as={Card.Img}
            animation="glow"
            variant="top"
            className="rounded-top-4"
            src={download_url}
            alt={title}
            fluid
          />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow" className="fw-bolder text-warning text-capitalize">
            {author}
          </Placeholder>
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
