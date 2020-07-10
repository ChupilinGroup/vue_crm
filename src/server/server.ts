import express from 'express';
import path from 'path';

const server = express();

// Подключаем билды фронтенда указывая статик директорию
<<<<<<< HEAD
server.use(express.static(path.join(__dirname, '../frontend/dist')));
=======
server.use(express.static(path.join(__dirname, '../frontend_vue/dist')));
>>>>>>> 499ddfb088abf9814bdf79ee6c5268f1e5b4d72d

export default server;
