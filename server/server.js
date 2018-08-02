require('./config/config');

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const db = require('./db/db');
const {pollRouter} = require('./routes/poll-routes');
const {userRouter} = require('./routes/user-routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/polls', pollRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

module.exports = {app};