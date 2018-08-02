const express = require('express');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const {User} = require('../models/user');
const {authenticate} = require('../middlewares/authenticate');

const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then(token => {
        res.header('x-auth', token).status(200).send(user);
    }).catch(e => res.status(400).send(e));
});

userRouter.post('/login', (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);
    User.verifyUser(body.email, body.password).then(user => {
        user.generateAuthToken().then(token => {
            res.header('x-auth', token).status(200).send(user);
        });
    }).catch(e => res.status(400).send(e));
});

userRouter.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }).catch(e => res.status(400).send(e));
    
})

module.exports = {userRouter};