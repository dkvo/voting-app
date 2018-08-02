const mongoose = require('mongoose');
const _ = require('lodash');

const Schema = mongoose.Schema;


const PollSchema = new Schema({
    topic: {
        required: true,
        type: String,
        minlength: 10,
        maxlength: 300
    },
    options:[{
        option: {
            required: true,
            type: String,
            minlength: 1,
            maxlength: 50
        },
        votes: {
            type: Number,
            default: 0
        }
    }],
    totalVotes: {
        type: Number,
        default: 0
    },
    _creator: {
        required: true,
        type: Schema.Types.ObjectId
    }
});


PollSchema.methods.toJSON = function() {
    let poll = this;
    let pollObject = poll.toObject();
    return _.pick(pollObject, ['_id', 'topic', 'options', 'totalVotes']);
}

const Poll = mongoose.model('Poll', PollSchema);

module.exports = {Poll};