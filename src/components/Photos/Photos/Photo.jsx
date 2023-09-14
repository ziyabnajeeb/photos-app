import { Button, Card, Col, Stack } from 'react-bootstrap';

const Photo = ({ download_url, title, body }) => (
  <Col sm={8} className="mt-5" data-bs-theme="dark">
    <Card className="shadow rounded-4 pb-4">
      <Card.Img variant="top" className="rounded-top-4" src={download_url} alt={title} />
      <Card.Body>
        <Card.Title className="fw-bolder text-warning text-capitalize">{title}</Card.Title>
        <Card.Text className="fs-6 mt-2 mb-4 text-capitalize">{body}</Card.Text>
        <Stack>
          <Button variant="outline-warning" size="lg" className="fw-bold">
            Not Interested
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  </Col>
);

export default Photo;
