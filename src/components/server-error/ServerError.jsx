import { Alert } from 'react-bootstrap';
import './ServerError.scss';

const ServerError = () => {
  return (
    <div className="server-error-container">
      <Alert variant="danger">
        <Alert.Heading>Error 505! :( </Alert.Heading>
        <p>
          We are having problems, sorry
        </p>
      </Alert>
    </div>
  );
};

export default ServerError;