export const showMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Выберите действия", {
    reply_markup: {
      resize_keyboard: true,
      keyboard: [
        [
          {
            text: "Получить данные",
          },
        ],
      ],
    },
  });
};

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Закрыть меню", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
