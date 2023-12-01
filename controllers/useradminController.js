const { UserAdmin } = require('../models/index');

const getUserAdmins = async (req, res) => {
    const useradmins = await UserAdmin.findAll();
    res.json({ useradmins });
    console.log(useradmins);
}


module.exports = {
    getUserAdmins
}