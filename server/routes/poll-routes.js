const express = require('express');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const {Poll} = require('./../models/poll');
const {authenticate} = require('../middlewares/authenticate');

const pollRouter = express.Router();

pollRouter.get('/', (req, res) => {
    Poll.find().then(polls => {
        res.status(200).send({polls});
    }).catch(e => res.status(400).send(e));
});

pollRouter.get('/:id', authenticate, (req, res) => {
    const creatorID = req.user._id;
    const id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Poll.find({
        _id: id,
        _creator: creatorID
    }).then(polls => {
        if(!polls) {
            return res.status(404).send();
        }
        res.status(200).send({polls});
    }).catch(e => res.status(400).send(e));
});

pollRouter.post('/', authenticate, (req, res) => {
    const poll = new Poll({
        topic: req.body.topic,
        options: req.body.options,
        _creator: req.user._id
    });
    poll.save(poll).then(doc => {
        res.status(200).send(doc);
    }).catch(e => res.status(400).send(e));
});

pollRouter.delete('/:id', authenticate, (req, res) => {
    const creatorID = req.user._id;
    const id = req.params.id;
    if(!ObjectID.isValid(id) ) {
        res.status(404).send();
    }
    Poll.findOneAndRemove({
        _id: id,
        _creator: creatorID
    }).then(poll => {
        if(!poll) {
            return res.status(404).send();
        }
        res.status(200).send({poll});
    }).catch(e => res.status(400).send(e));
});

pollRouter.patch('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const creatorID = req.user._id;
    const body = _.pick(req.body, ['topic', 'options', 'totalVotes']);
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Poll.findOneAndUpdate({
        _id: id,
        _creator: creatorID
    }, {
        $set: body
    }, {
        new: true
    }).then(poll => {
        if(!poll) {
            return res.status(404).send();
        }
        res.status(200).send({poll});
    }).catch(e => res.status(400).send(e));
});

module.exports = {pollRouter};
