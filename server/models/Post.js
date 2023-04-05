import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    nickname: {
        type: String,
        trim: true
    },
    score: {
        type: String,
        trim: true
    }
});

export default mongoose.model('Post', postSchema)