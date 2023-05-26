const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

app.use(require('./routes/students.route'))



mongoose.connect('mongodb+srv://khamzzaty:intocode@cluster0.hawdzkl.mongodb.net/student', {

}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));

app.listen(4001, () => {
    console.log("server go on")
})