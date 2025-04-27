import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Инициализация Telegram WebApp
window.Telegram.WebApp.ready();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
