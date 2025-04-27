import React from 'react';
import { Telegram } from 'telegram-web-app';
import BottomNav from './components/BottomNav';
import ProfilePage from './pages/ProfilePage';
import ReferralsPage from './pages/ReferralsPage';
import WheelPage from './pages/WheelPage';
import ShopPage from './pages/ShopPage';
import TasksPage from './pages/TasksPage';

const App: React.FC = () => {
  Telegram.init();
  const [active, setActive] = React.useState('profile');

  const renderPage = () => {
    switch(active) {
      case 'profile': return <ProfilePage />;
      case 'referrals': return <ReferralsPage />;
      case 'wheel': return <WheelPage />;
      case 'shop': return <ShopPage />;
      case 'tasks': return <TasksPage />;
    }
  }

  return (
    <div className="h-screen flex flex-col bg-dark text-text">
      <div className="flex-grow">{renderPage()}</div>
      <BottomNav active={active} onChange={setActive} />
    </div>
  );
};

export default App;
