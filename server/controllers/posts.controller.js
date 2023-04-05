import Post from "../models/Post.js";

export const getScores = async (req, res) => {
    const post = await Post.find();
    res.send(post)
};

export const createUser = async (req, res) => {
    const { nickname, score } = req.body;
    const post = new Post({nickname, score});
    await post.save()
    return res.json(post)
};

export const putPosts = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.send('updated');
};

export const deletePosts = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getPost = (req, res) => res.send([]);
