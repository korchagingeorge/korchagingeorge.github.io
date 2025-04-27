import React from 'react';

type Props = { active: string; onChange: (tab: string) => void };
const tabs = [
  { key: 'profile', label: 'Профиль' },
  { key: 'referrals', label: 'Рефералы' },
  { key: 'wheel', label: 'Колесо' },
  { key: 'shop', label: 'Магазин' },
  { key: 'tasks', label: 'Задания' }
];

const BottomNav: React.FC<Props> = ({ active, onChange }) => (
  <div className="flex justify-around bg-dark p-2 rounded-t-2xl border-t border-gray-700">
    {tabs.map(tab => (
      <button
        key={tab.key}
        className={`flex-1 py-2 text-center ${active === tab.key ? 'text-gold' : 'text-text'}`}
        onClick={() => onChange(tab.key)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default BottomNav;
