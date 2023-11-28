const { SystemAdmin } = require('../models/systemadmin');

const createSystemAdmin = async (req, res) => {
    console.log('this is the req', req.body);
     
    return res.json('tryna create an admin huh?')
}

module.exports = { createSystemAdmin };