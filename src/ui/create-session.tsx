import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CreateSession: React.FC = () => {
  const [platform, setPlatform] = useState<string>('');
  const location = useLocation();
  const handleCreateSession = () => {
    chrome.runtime.sendMessage(
      {
        type: 'create-session',
        payload: { platform },
        source: 'popup',
      },
      (response) => {
        console.log('Session created:', response);
      },
    );
  };

  useEffect(() => {
    setPlatform(location.state.platform);
  }, [location.state.platform]);

  return (
    <div>
      <h1>Create Session</h1>
      <h2>You are on {platform}</h2>
      <button onClick={handleCreateSession}>Create Session</button>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default CreateSession;
