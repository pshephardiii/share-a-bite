import sendRequest from './send-request';

const BASE_URL = '/api/restaurants';
/*
// Index
router.get('/', restaurantCtrl.index, restaurantCtrl.jsonRestaurants)

// Show
router.get('/:id', restaurantCtrl.show, restaurantCtrl.jsonRestaurant)
*/

//fetch all the restaurants
export function getAllRestaurants() {
    return sendRequest(BASE_URL);
  }
  
  //fetch individual restaurant
  export function getIndividualReastaurant(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
  