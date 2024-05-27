import axios from "axios";
import { config } from "./config.js";

export const users = async (ctx) => {
  try {
    const response = await axios.get(config.randomUserUrl, {
      params: {
        results: 1,
        inc: "name,picture,login,location,email,dob",
      },
    });

    const userData = response.data.results[0];
    const { name, picture, login, location, email, dob } = userData;

    console.log("Имя пользователя:", name.first, name.last);
    console.log("Фотография пользователя:", picture.large);
    console.log("Логин пользователя:", login.username);
    console.log(
      "Адрес пользователя:",
      location.street.number,
      location.street.name
    );
    console.log('Email пользователя:', email)
    console.log('Возраст пользователя:', dob.age)

    ctx.replyWithPhoto(picture.large, {
      caption: `Имя пользователя: ${name.title} ${name.first} ${name.last}\nЛогин: ${login.username}\nВозраст: ${dob.age} \nНомер дома: ${location.street.number}\nНазвание улицы: ${location.street.name} \nСтрана пользователя: ${location.country}\nE-mail: ${email}` ,
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    ctx.reply("Произошла ошибка при получении данных");
  }
};
