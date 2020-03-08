//this has service methods for user releated functions

const authToken = require('../../authHelper/jwtSecretAuth');
var users = require('../../data/user').users;

module.exports = {
    create,
    authenticate
};

async function create(userParam) {
    if (userParam == undefined || userParam.username == undefined || userParam.password == undefined ||
        userParam.username == '' || userParam.password == '') {
        return { error: { msg: 'Invalid inputs' } };
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userParam.username) {
            return { error: { msg: 'User Id exists' } };
        }
    }
    //TODO : encrypt password before saving
    users.push(userParam);
    return { success: { msg: 'User created' } };
}

async function authenticate({ username, password }) {
    //Todo compare encrypted password
    var i = 0; 
    for (; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            return {
                username:username,
                token: authToken.generateToken(users[i])
            };
        }
    }
}
