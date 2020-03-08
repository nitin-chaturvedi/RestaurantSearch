//this has routes for the restaurant releated operations
var restaurant = require('../../data/restaurant').restaurants;

module.exports = {
    getRestaurants,
    addRestaurant,
    updateRestaurant
}

async function getRestaurants(req, res, next) {
    //get restaurant based on params
    //currently returning all restaurants
    try {
        if ( req.query.key === ' ' ) {
            return restaurant;
        } else {
            var filteredData =[];
            restaurant.forEach(
                (data) => {
                    if(data.city.toUpperCase() === req.query.key.toUpperCase()){
                        filteredData.push(data);
                    }
                }
            )
            return filteredData;
        }
    } catch (err) {
        next(err);
    }
}

async function addRestaurant(req, res, next) {
    restaurant.push(
        req.body
    );
    return restaurant;

}

async function updateRestaurant(req, res, next) {

}
