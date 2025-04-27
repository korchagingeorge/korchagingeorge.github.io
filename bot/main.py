from aiogram import Bot, Dispatcher, executor
from handlers import register_handlers
from db import init_db
import os

API_TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)

if __name__ == "__main__":
    init_db()
    register_handlers(dp)
    executor.start_polling(dp, skip_updates=True)
