const TelegramBot = require('node-telegram-bot-api');
const BOT_TOKEN = '7447660925:AAHHssk3TI9P5OCVwxIois3VM4rsryqb2bY';
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

function generateAuthLink(uid, name) {
    const authUrl = `https://beecrazy-gamepass.web.app/?uid=${uid}&nameTelegram=${name}`
    return authUrl;
}

bot.onText(/\/start/, (msg) => {
    const userId = msg.from.id;
    const name = msg.from.username
    bot.sendMessage(userId, `Clique no link para acessar: ${generateAuthLink(userId,name)}`);
});