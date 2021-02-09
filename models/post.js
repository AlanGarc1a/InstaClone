const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    img: {
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    likes: [{type: Schema.Types.ObjectId, ref: "User"}],
    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
    commentCount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);