import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Error: React.FC = () => {
  const location = useLocation();
  const [reason, setReason] = useState<string>('');

  useEffect(() => {
    setReason(location.state.reason);
  }, [location.state.reason]);

  return (
    <div>
      <h1>Error</h1>
      <p>{reason}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
