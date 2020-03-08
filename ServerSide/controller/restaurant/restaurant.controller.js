//this has routes for the restaurant releated operations
const restaurantService = require('../../service/restaurant/restaurant.service');

module.exports = {
    getRestaurants,
    addRestaurant,
    updateRestaurant
}

async function getRestaurants(req, res, next) {
    //get restaurant based on city
    try {
        data = await restaurantService.getRestaurants(req, res, next);
        res.json(data);
    } catch (err) {
        next(err);
    }

}

async function addRestaurant(req, res, next) {
    try {
        data = await restaurantService.addRestaurant(req,res,next);
        res.json(data);
    } catch (err) {
        next(err);
    }

}

async function updateRestaurant(req, res, next) {
    return await restaurantService.updateRestaurant(req,res,next);

}
