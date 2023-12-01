const { UserAdmin } = require('../models/index');

const getUserAdmins = async (req, res) => {
    res.json({ message: 'This is the controller handling user admins' });
    const variable = UserAdmin.findAll();
    console.log(variable)
}


module.exports = {
    getUserAdmins
}