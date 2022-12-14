const seedUsers = require('./userData');
const seedPosts = require('./blogData');
const seedComments = require('./commentData');

const sequelize = require('../config/config');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedAll();