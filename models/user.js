const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/'
    },
    bio: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    postCount: {
        type: Number,
        default: 0
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    followersCount: {
        type: Number,
        default: 0
    },
    following: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    followingCount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);