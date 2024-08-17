import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const InsideSession: React.FC = () => {
  const [platform, setPlatform] = useState<string>('');
  const location = useLocation();
  const handlePlay = () => {
    chrome.runtime.sendMessage(
      {
        type: 'play',
        payload: { platform },
        source: 'popup',
      },
      (response) => {
        console.log('Session created:', response);
      },
    );
  };

  const handlePause = () => {
    chrome.runtime.sendMessage(
      {
        type: 'pause',
        payload: { platform },
        source: 'popup',
      },
      (response) => {
        console.log('Session paused:', response);
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
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default InsideSession;
