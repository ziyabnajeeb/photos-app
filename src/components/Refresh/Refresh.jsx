import { Button, Col, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import ArrowRepeat from '../../assets/images/arrow-repeat.svg';
import { H4 } from '../ui/Tag/Tag';

const Refresh = ({ loading, setPhotosData }) => (
  <Row className="row justify-content-center align-items-center mt-5">
    <Col sm={8} className="text-center">
      <H4 className="text-light">No Photos! Click to fetch</H4>
      <Button
        onClick={setPhotosData}
        size="lg"
        variant="rusted"
        className="text-uppercase fw-bolder rounded-circle p-3 d-flex mx-auto">
        {loading ? <Loading /> : <ArrowRepeat className="fs-1 text-warning" />}
      </Button>
    </Col>
  </Row>
);

export default Refresh;
