
// * import the necessary models
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');

// * View all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// * view posts and comments
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['comment', 'dateCreated'],
                    include: {
                        model: User,
                        attributes: ['name'],
                    },
                },
            ],
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// * create a new post

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            post: req.body.post,
            userId: req.session.userId,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// * update a post

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// * delete a post

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;
