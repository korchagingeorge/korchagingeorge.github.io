const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();
app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

app.get('/checkSub', async (req, res) => {
  const user = req.query.user;
  const chatMember = await bot.telegram.getChatMember('@tonspace_channel', user);
  res.json({ isMember: ['member','creator','administrator'].includes(chatMember.status) });
});

// Эндпоинты для referral-системы: /referrals и /referral можно реализовать на любом хранилище

module.exports = app;
