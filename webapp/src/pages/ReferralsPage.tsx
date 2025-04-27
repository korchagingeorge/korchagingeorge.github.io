import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

interface Ref {
  id: number;
  username: string;
  avatar: string;
  count: number;
}

const ReferralsPage: React.FC = () => {
  const [list, setList] = useState<Ref[]>([]);
  useEffect(() => {
    // TODO: получить данные от бота через WebApp.sendData
    setList([
      { id:1, username:'user1', avatar:'', count:5 },
      { id:2, username:'user2', avatar:'', count:3 }
    ]);
  }, []);

  return (
    <div className="p-4 space-y-2">
      {list.map(u => (
        <Card key={u.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={u.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            <span>@{u.username}</span>
          </div>
          <span>{u.count}</span>
        </Card>
      ))}
    </div>
  );
};

export default ReferralsPage;
