require('./config/config');

const express = require('express');
const https = require('https');
var cors = require('cors')
const bodyParser = require('body-parser');

const db = require('./db/db');
const {pollRouter} = require('./routes/poll-routes');
const {userRouter} = require('./routes/user-routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use('/polls', pollRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

module.exports = {app};