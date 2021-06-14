const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASS, DATABASE_NAME } = process.env;
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, null, {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: 'postgres' 
});

const formSubmissions = sequelize.define('form_submission', {
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    FeedBack: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resolved: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
        defaultValue: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

exports.dbInitiate = async () => {
    await sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    await formSubmissions.sync({ force: true, logging: false }).then(() => {
        console.log('Database & tables created!');
    }).catch((err) => console.error(err));
}

exports.addFeedBack = (name, email, feedback) => { 
    return new Promise(function(resolve, reject){
        formSubmissions.create({
            Name: name,
            Email: email,
            FeedBack: feedback
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
}