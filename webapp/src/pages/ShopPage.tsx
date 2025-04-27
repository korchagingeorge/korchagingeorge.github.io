import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const items = [
  { id:1, label:'🧸', cost:27 },
  { id:2, label:'🚀', cost:55 },
  { id:3, label:'🏆', cost:115 }
];

const ShopPage: React.FC = () => (
  <div className="p-4 space-y-4">
    {items.map(item => (
      <Card key={item.id} className="flex justify-between items-center">
        <span className="text-xl">{item.label} — {item.cost} билетов</span>
        <Button onClick={() => {/* запрос на покупку */}}>
          Купить
        </Button>
      </Card>
    ))}
  </div>
);

export default ShopPage;
