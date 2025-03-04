import fetch from "node-fetch";

const botToken = "7930833722:AAExjkbseuCuBU7gEQL1nID47CRBhnNNJBs";

fetch(
  `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=4789198605&text=hello`
);
