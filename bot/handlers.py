from aiogram import types, Dispatcher
from aiogram.types import WebAppInfo
from db import SessionLocal
from models import User
import json

GITHUB_APP_URL = "https://korchagingeorge.github.io"

async def start_command(message: types.Message):
    session = SessionLocal()
    args = message.get_args()
    user = session.query(User).filter_by(telegram_id=message.from_user.id).first()
    if not user:
        user = User(telegram_id=message.from_user.id, username=message.from_user.username)
        # Обработка реферала
        if args:
            try:
                ref_id = int(args)
                ref_user = session.query(User).get(ref_id)
                if ref_user:
                    user.referred_by = ref_id
                    ref_user.tickets += 1
                    session.add(ref_user)
            except ValueError:
                pass
        session.add(user)
        session.commit()
    # Кнопка для открытия Web App
    keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
    keyboard.add(types.KeyboardButton(
        text="🌌 Открыть Ton Space", web_app=WebAppInfo(url=GITHUB_APP_URL)
    ))
    await message.answer("Добро пожаловать в Ton Space!", reply_markup=keyboard)
    session.close()

async def callback_handler(query: types.CallbackQuery):
    # Обработка данных из Web App (через query.data)
    data = json.loads(query.data)
    # TODO: разбор data и выполнение действий
    await query.answer('Готово')


def register_handlers(dp: Dispatcher):
    dp.register_message_handler(start_command, commands=['start'])
    dp.register_callback_query_handler(callback_handler)
