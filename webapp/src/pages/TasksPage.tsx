import React, { useState } from 'react';
import Button from '../components/Button';
import { Telegram } from 'telegram-web-app';

const TasksPage: React.FC = () => {
  Telegram.init();
  const [done, setDone] = useState(false);

  const handleCheck = () => {
    // TODO: отправить запрос боту для проверки подписки
    setDone(true);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <p>Подпишитесь на канал <strong>@tonspace_channel</strong></p>
        <div className="flex space-x-2">
          <Button onClick={() => Telegram.openLink('https://t.me/tonspace_channel')}>Выполнить</Button>
          <Button onClick={handleCheck}>Проверить</Button>
        </div>
        {done && <p className="text-green-400">Задание выполнено! +3 билета</p>}
      </div>
    </div>
  );
};

export default TasksPage;
