var jwt = require('jsonwebtoken');
const secretKey = require('./config.js').secretKey;
const noAuthRoute = ['/api/v1/register', '/api/v1/authenticate','/api/v1/restaurants'];


module.exports.verifyToken = verifyToken;
module.exports.generateToken = generateToken;

function verifyToken(req, res, next) {

    //check for routes where no authentication is needed
    var exclude = req.path.indexOf('api') > -1? (noAuthRoute.find( (pat) => {return req.path.indexOf(pat) > -1}) != null):true;
    if (exclude) {
        // Exclude
        return next();
    } 
    
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secretKey, function (err, decoded) {
            if (err) {
                return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.body.user = decoded;
                next();
            }
        });

    } else {
        // if there is no token return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

function generateToken(user) {
    const payload = {
        id: user.username
    };
    var token = jwt.sign(payload, secretKey, {
        expiresIn: '2h' // expires in 2 hours
    });

    return token;
}