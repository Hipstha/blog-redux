import { Alert } from 'react-bootstrap';
import './ServerError.scss';

const ServerError = () => {
  return (
    <div className="server-error-container">
      <Alert variant="danger">
        <Alert.Heading>Error: 503 Service Unavailable! :( </Alert.Heading>
        <p>
          Right now the server is off, try it again later.
        </p>
        <p>
          If the problem is not solved, call to the site administrator
        </p>
      </Alert>
    </div>
  );
};

export default ServerError;