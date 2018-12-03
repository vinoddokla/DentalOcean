const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

const User = db.User;

module.exports = {
    create,
    authenticate
}

async function create(userParam) {
    //validate 
    if( await User.findOne({ username : userParam.username })) {
        throw 'UserName "' +userParam.username+ '" is already taken.';
    }

    const user = new User(userParam);

    //hash password
    if(userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    //save user
    await user.save();
}

async function authenticate(authUser) {
    const user = await User.findOne({ username : authUser.username });
    if (user && bcrypt.compareSync(authUser.password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}