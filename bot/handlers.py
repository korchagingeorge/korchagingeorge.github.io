from aiogram import types, Dispatcher
from aiogram.types import WebAppInfo
from db import SessionLocal
from models import User
from telegram import Bot as TgBot

async def start_command(message: types.Message):
    session = SessionLocal()
    # parse referral
    args = message.get_args()
    user = session.query(User).filter_by(telegram_id=message.from_user.id).first()
    if not user:
        user = User(telegram_id=message.from_user.id, username=message.from_user.username)
        if args:
            ref_id = int(args)
            ref_user = session.query(User).get(ref_id)
            if ref_user:
                user.referred_by = ref_id
                ref_user.tickets += 1
                session.add(ref_user)
        session.add(user)
        session.commit()
    await message.answer("Добро пожаловать!", reply_markup=types.ReplyKeyboardMarkup(
        keyboard=[[types.KeyboardButton(text="Открыть приложение", web_app=WebAppInfo(url="YOUR_GITHUB_PAGES_URL"))]], resize_keyboard=True)
    session.close()

async def webapp_data_handler(query: types.CallbackQuery):
    data = query.data  # JSON с указанием вкладки и действий
    # обработать действия и вернуть данные в WebApp через query.answer
    await query.answer()


def register_handlers(dp: Dispatcher):
    dp.register_message_handler(start_command, commands=['start'])
    dp.register_callback_query_handler(webapp_data_handler, lambda c: True)
