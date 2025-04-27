import React from 'react';
import Card from '../components/Card';
import { Telegram } from 'telegram-web-app';

const ProfilePage: React.FC = () => {
  Telegram.init();
  const user = Telegram.initDataUnsafe?.user;
  // TODO: заменить заглушки на реальные данные из бэкенда
  const referrals = 0;
  const rank = 0;
  const tickets = 5;

  return (
    <div className="p-4 space-y-4">
      <Card className="flex items-center space-x-4">
        <img src={user?.photo_url || ''} alt="avatar" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{user?.username}</h2>
          <p className="text-sm text-gray-400">@{user?.id}</p>
        </div>
      </Card>
      <Card>
        <p>Рефералов: <strong>{referrals}</strong></p>
        <p>Место в топе: <strong>{rank}</strong></p>
        <p>Билетов: <strong>{tickets}</strong></p>
      </Card>
    </div>
  );
};

export default ProfilePage;
