
// * import the necessary models
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post} = require('../../models');

// * View all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['email'],
                },
            ],
        });

        let myPosts = postData.map((post) => post.get({ plain: true }));
        console.log("post data",myPosts);
        res.render("post",{posts:myPosts})
    //    res.status(200).json(postData);
    } catch (err) { 
        res.status(500).json(err);
        console.log("unable to findd",err);
    }
});

// * view posts and comments
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['email'],
                },
                {
                    model: Comment,
                    attributes: ['comment', 'dateCreated'],
                    include: {
                        model: User,
                        attributes: ['email'],
                    },
                },
            ],
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
           // return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// * create a new post

// router.post('/', withAuth, async (req, res) => {
//     // console.log("post data",req.body,req.session.user_id);
//     try {
//         const postData = await Post.create({
//             title: req.body.title,
//             post: req.body.post,
//             userId: req.session.user_id,
//         });
//     //    console.log("post data",postData)
//         res.status(200).json(postData);
//     } catch (err) {
//         console.log("Error adding post",err)
//         res.status(400).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// * update a post

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content,
          },
          {
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          }
        );
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

router.delete('/:id',async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
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
