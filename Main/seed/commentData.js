const { Comment } = require('../models');

const commentData = [{
        body: "Lorem ipsum dolor sit amet",
        updatedAt:'sept 9999',
        createdAt:'sept 000009999',
        postId: 1,
        userId: 1
    },
    {
        body: "Lorem ipsum dolor sit amet",
        updatedAt:'sept 9999',
        createdAt:'sept 000009999',
        postId: 2,
        userId: 2
    },
    {
        body: "Lorem ipsum dolor sit amet",
        updatedAt:'sept 9999',
        createdAt:'sept 000009999',
        postId: 3,
        userId: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
  