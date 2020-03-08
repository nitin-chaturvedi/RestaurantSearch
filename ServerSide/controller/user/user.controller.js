//this has routes for the usere releated operations
const userService = require('../../service/user/user.service');

module.exports = {
    authenticate,
    register
}

async function authenticate(req, res, next) {
    try {
        token = await userService.authenticate(req.body);
        token ? res.json(token) :
            res.status(400).json({ message: 'Username or password is incorrect' });
    } catch (err) {
        next(err);
    }
}

async function register(req, res, next) {
    try {
        res.json(await userService.create(req.body));
    } catch (err) {
        next(err);
    }
}

