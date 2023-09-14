import React from 'react';
import { Spinner } from 'react-bootstrap';
import { H1 } from '../ui/Tag/Tag';

const Loading = () => (
  <Spinner animation="border" variant="warning">
    <H1 className="visually-hidden text-gray-150">Loading...</H1>
  </Spinner>
);

export default Loading;
