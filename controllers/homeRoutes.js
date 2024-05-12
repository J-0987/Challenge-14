const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render("login")
    // try {
    //     const postData = await Post.findAll({
    //         include: [
    //             {
    //                 model: User,
    //                 attributes: ['name'],
    //             },
    //         ],
    //     });
    //     res.status(200).json(postData);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/post', async (req, res) => {
    res.render("post")

});

module.exports = router;