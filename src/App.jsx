import React, { useState } from 'react';
import Profile from './pages/Profile';
import ReferralsWheel from './pages/ReferralsWheel';
import Shop from './pages/Shop';
import Tasks from './pages/Tasks';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'profile', label: 'Профиль', component: <Profile /> },
  { id: 'wheel', label: 'Колесо', component: <ReferralsWheel /> },
  { id: 'shop', label: 'Магазин', component: <Shop /> },
  { id: 'tasks', label: 'Задания', component: <Tasks /> }
];

export default function App() {
  const [active, setActive] = useState('profile');

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-hidden">
        {tabs.map(tab =>
          active === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              {tab.component}
            </motion.div>
          )
        )}
      </div>
      <nav className="flex justify-around bg-secondary p-2 rounded-t-xl">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 text-center py-2 rounded-xl ${
n              active === tab.id ? 'bg-primary text-black' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
