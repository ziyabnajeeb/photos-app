import { Button, Col, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import ArrowDown from '../../assets/images/arrow-down.svg';

const LoadMore = ({ loading, handleLoadMore }) => (
  <Row className="row justify-content-center align-items-center mt-5">
    <Col sm={8} className="text-center">
      <Button
        onClick={handleLoadMore}
        size="lg"
        variant="rusted"
        className="text-uppercase fw-bolder rounded-circle p-3 d-flex mx-auto">
        {loading ? <Loading /> : <ArrowDown className="fs-1 text-warning" />}
      </Button>
    </Col>
  </Row>
);

export default LoadMore;
