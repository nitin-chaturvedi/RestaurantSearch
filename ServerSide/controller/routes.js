const UserController = require('./user/user.controller');
const RestaurantController = require('./restaurant/restaurant.controller');

module.exports = (app) => {
    
    app.get('/api', (req, res,next) => {
        res.send({ hi: 'there' });
    });
    app.get('/api/v1/restaurants',RestaurantController.getRestaurants);
    //our api auth currently only checks the url so need to rename 
    //once the security is smart enough to check req type will be refactored
    app.post('/api/v1/addRestaurants',RestaurantController.addRestaurant);
    app.patch('/api/v1/patchRestaurants',RestaurantController.updateRestaurant);

    app.post('/api/v1/register',UserController.register);
    app.post('/api/v1/authenticate',UserController.authenticate); 
    
    console.log('initialized the routes');
}