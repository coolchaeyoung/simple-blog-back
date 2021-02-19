import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    dfeault: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
