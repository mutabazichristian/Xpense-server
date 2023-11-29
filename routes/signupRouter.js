const express = require('express');
const router = express.Router();

const {
    createNewUser,
    createUserAdmin,
    createNewSystemAdmin
} = require('../controllers/signupController.js')


router.post('/', async (req, res) => {
    try {
        const { firstName, otherName, email, password, maxExpense } = req.body;
        const newUser = await createNewUser(firstName, otherName, email, password, maxExpense);
        if (newUser.isEmailTaken == true) {
            res.json('Email is Taken');
        } else {
            res.json('signedup');
        }

    } catch (error) {
        res.json('internal server error');
    }
});

router.post('/systemadmin', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('email', email);
        console.log('password', password);
        console.log("Hi, routes to create new user, please");
        const newUser = await createNewSystemAdmin(username, email, password);
        if (newUser.isEmailTaken == true) {
            res.json('Email is Taken');
        } else {
            res.json('signedup');
        }

    } catch (error) {
        res.json('internal server error');
        console.log('error trying to create new system admin:', error);
    }
});


router.post('/useradmin', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newUser = await createUserAdmin(username, password, email);
        if (newUser.isEmailTaken == true) {
            res.json('Email is Taken');
        } else {
            res.json('signedup');
        }

    } catch (error) {
        res.json('internal server error');
    }
});
module.exports = router;
