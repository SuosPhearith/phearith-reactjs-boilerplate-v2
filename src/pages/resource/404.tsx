import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <h1>
      404<Link to="/">Back to dashboard</Link>
    </h1>
  );
};

export default NotFoundPage;
