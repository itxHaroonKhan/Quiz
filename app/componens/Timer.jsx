import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(3600); 

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div>
      Time Left: {hours}h {minutes}m {seconds}s
    </div>
  );
}

export default Timer;