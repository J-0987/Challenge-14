const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'userId',
    as: 'posts',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    as: 'comments',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    as: 'comments',
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
    as: 'post',
});

module.exports = { User, Post, Comment};