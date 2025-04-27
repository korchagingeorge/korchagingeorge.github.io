import React, { useRef, useEffect } from 'react';
import Winwheel from 'winwheel';

interface Props { onFinish: (result: string) => void; tickets: number; }
const WheelCanvas: React.FC<Props> = ({ onFinish, tickets }) => {
  const canvasId = 'wheelcanvas';
  useEffect(() => {
    new Winwheel({
      canvasId,
      numSegments: 6,
      segments: [
        { fillStyle: '#222', text: 'Пусто' },
        { fillStyle: '#444', text: '+1 билет' },
        { fillStyle: '#666', text: '+2 билета' },
        { fillStyle: '#888', text: '+10 билетов' },
        { fillStyle: '#aaa', text: '🧸' },
        { fillStyle: '#ccc', text: '🚀' }
      ],
      animation: { type: 'spinToStop', duration: 5, spins: 8 },
      pins: { number: 6, fillStyle: '#fff' },
      callbackFinished: (indicatedSegment) => onFinish(indicatedSegment.text)
    });
  }, []);

  return <canvas id={canvasId} width={300} height={300} />;
};

export default WheelCanvas;
