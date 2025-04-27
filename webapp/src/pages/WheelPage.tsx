import React, { useState } from 'react';
import WheelCanvas from '../components/WheelCanvas';
import Button from '../components/Button';

const WheelPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const handleResult = (res: string) => setMessage(res);

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <WheelCanvas onFinish={handleResult} tickets={1} />
      <Button onClick={() => {/* отправить команду спина боту */}}>
        Крутить (1 билет)
      </Button>
      {message && <p className="text-lg">{message}</p>}
    </div>
  );
};

export default WheelPage;
