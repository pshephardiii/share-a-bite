import sendRequest from './send-request';

const BASE_URL = '/api/restaurants';
/*
// Index
router.get('/', restaurantCtrl.index, restaurantCtrl.jsonRestaurants)

// Show
router.get('/:id', restaurantCtrl.show, restaurantCtrl.jsonRestaurant)

router.post('/:id/add', userCtrl.auth, restaurantCtrl.favRestaurants, restaurantCtrl.jsonRestaurant)

router.post('/:id/remove', userCtrl.auth, restaurantCtrl.favRestaurantsDelete, restaurantCtrl.jsonRestaurant)
*/

//fetch all the restaurants
export function getAllRestaurants() {
    return sendRequest(BASE_URL);
  }

  export function getAllUserFav(userId) {
    return sendRequest(`${BASE_URL}/all/${userId}`)
  }
  
  //fetch individual restaurant
  export function getIndividualRestaurant(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }

   //fetch Like the restaurant 
   export function FavReastaurant(id) {
    return sendRequest(`${BASE_URL}/${id}/add`);
  }

   //fetch remove the restaurant 
   export function DeleteFavReastaurant(id) {
    return sendRequest(`${BASE_URL}/${id}/remove`);
  }
  