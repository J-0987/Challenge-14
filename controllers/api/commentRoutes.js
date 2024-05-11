const router = require('express').Router();
const { Comment } = require('../../models');


//route to view all comments

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//route to view a single comment
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//route to post a comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});


//route to delete a comment
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//route to edit a comment
router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


