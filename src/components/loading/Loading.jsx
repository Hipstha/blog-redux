import { Spinner } from 'react-bootstrap';
import './Loading.scss';


const Loading = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="grow" className="loading-spinner" />
    </div>
  );
};

export default Loading;


