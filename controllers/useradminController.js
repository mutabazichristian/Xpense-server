
const createUserAdmin = async (req, res) => {

    const { username, passsword, email } = req.body;
    console.log('this is the request for new user admin', username, passsword, email);
    res.json('server: tryna create a new user admin huh? ');

}


module.exports = {
    createUserAdmin
}