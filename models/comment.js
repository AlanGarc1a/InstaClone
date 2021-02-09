const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
     },
    text: {
        type: String,
        required: [true, "Please enter a comment"],
        trim: true
    },
    post: {
        type: Schema.Types.ObjectId, 
        ref: "Post",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", commentSchema);