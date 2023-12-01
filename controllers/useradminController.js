const { UserAdmin } = require('../models/index');

const getUserAdmins = async (req, res) => {
    const variable =  await UserAdmin.findAll();
    res.json({ variable });
    console.log(variable)
}


module.exports = {
    getUserAdmins
}