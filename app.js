import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { users } from "./users.js";
import { closeMenu, showMenu } from "./menu.js";

const bot = new Telegraf(config.TelegramUrl, {});
bot.start((ctx) =>
  ctx.reply(
    "Рад видеть тебя в моем телеграм боте. Для продолжение напиши - меню"
  )
);
bot.on("message", (ctx) => {
  const chatId = ctx.chat.id;

  if (ctx.message.text == "меню") {
    showMenu(bot, chatId);
  } else if (ctx.message.text == "Меню") {
    showMenu(bot, chatId);
  } else if (ctx.message.text == "Получить данные") {
    users(ctx);
  } else {
    closeMenu(bot, chatId);
  }
});

bot.launch();
