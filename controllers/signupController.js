const { where } = require('sequelize');
const { User, SystemAmdin, UserAdmin } = require('../models/index.js');

const createNewUser = async (firstName, otherName, email, password, maxExpense) => {
    console.log('Trying to create a new user:', firstName, otherName, email, password, maxExpense);

    try {
        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                otherName,
                password,
                maxExpense,
                createdAt: null,
                updatedAt: null
            }
        });

        if (created) {
            console.log('New user created:', newUser);
            return { isEmailTaken: false, newUser };
        } else {
            console.log('Email is already taken.');
            return { isEmailTaken: true };
        }
    } catch (error) {
        console.log('Error creating a new user:', error);
        return { isEmailTaken: false, error: 'Internal Server Error' };
    }
};

const createUserAdmin = async (username, password, email) => {
    console.log('Trying to createa a new User Admin', user, password, email)
    try {
        const [newuseradmin, created] = await UserAdmin.findOrCreate({
            where: { email },
            defaults: {
                username,
                password,
                email,
                createAt: null,
                updatedAt: null
            }
        })
        if (created) {
            console.log('New User Admin Created:', newuseradmin);
            return { isEmailTaken: false };
        } else {
            console.log('Email is already taken.');
            return { isEmailTaken: true }
        }
    } catch (error) {
        console.log('Error creating a New User Admin', errors)
        return { isEmailTaken: flase, error: 'INternal Server Error' }
    }
}

const createNewSystemAdmin = async (username, password, email) => {
    console.log('Trying to createa a new System Admin', user, password, email)
    try {
        const [newSysAdmin, created] = await SystemAmdin.findOrCreate({
            where: { email },
            defaults: {
                username,
                password,
                email,
                createAt: null,
                updatedAt: null
            }
        })
        if (created) {
            console.log('New Sytem Admin Created:', newSysAdmin);
            return { isEmailTaken: false };
        } else {
            console.log('Email is already taken.');
            return { isEmailTaken: true }
        }
    } catch (error) {
        console.log('Eorror creating a new System Admin', errors)
        return { isEmailTaken: flase, error: 'INternal Server Error' }
    }
}


module.exports = { createNewUser, createNewSystemAdmin };
