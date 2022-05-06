const router = require("express").Router();
const Post = require("../models/Posts");

//CREATE POST
router.route('/add').post((req, res) =>{
    const title = req.body.title;
    const desc = req.body.desc;
    const photo = req.body.photo;

    const newPost = new Post({
        title,
        desc,
        photo,
    });
    newPost.save().
    then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//GET ALL POSTS
router.route('/').get((req, res) =>{
    Post.find()
    .then(posts => {res.json(posts); console.log(posts)})
    .catch(err => res.status(400).json('Error:' + err));
});

//GET POSTS
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POSTS
router.delete("/:id", (req,res) =>{
    const post = Post.findById(req.params.id);
    console.log(post);
    post.deleteOne()
    .then(() => res.status(200).json("post has been deleted..."))
    .catch(() => res.statut(401).json("you can delete only your post!"))
})
module.exports = router;