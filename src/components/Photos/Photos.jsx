import { Row } from 'react-bootstrap';
import { H2 } from '../ui/Tag/Tag';
import Photo from './Photo/Photo';

const Photos = ({ photos, removePhoto }) => (
  <>
    <H2 className="fw-bolder text-center text-light">Our Photos</H2>
    <Row className="row justify-content-center align-items-center">
      {photos && photos.map((photo, i) => <Photo key={i} {...photo} removePhoto={removePhoto} />)}
    </Row>
  </>
);

export default Photos;
