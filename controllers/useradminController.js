
const createUserAdmin = async (req, res) => {

    console.log('this is the request for new user admin', req.body);
    res.json('server: tryna create a new user admin huh? ');
}


module.exports = {
    createUserAdmin
}