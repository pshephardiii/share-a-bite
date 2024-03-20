import sendRequest from './send-request';

const BASE_URL = '/api/posts';

/*
// Index GET /posts
router.get('/', postCtrl.index, postCtrl.jsonPosts)
// Delete DELETE /posts/:id
router.delete('/:id', userCtrl.auth, postCtrl.destroy, postCtrl.jsonPost)
// Update PUT /posts/:id
router.put('/:id', userCtrl.auth, postCtrl.update, postCtrl.jsonPost)
// Create GET /posts
router.post('/', userCtrl.auth, postCtrl.create, postCtrl.jsonPost)
// Show GET /posts/:id
router.get('/:id', postCtrl.show, postCtrl.jsonPost)
*/

//fetch all the posts
export function getAllPosts() {
  return sendRequest(BASE_URL);
}

//fetch individual post
export function getIndividualPost(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//update Post
export function updatePost(id, newPostData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newPostData);
}

//create Post
export function createPost(postData) {
  return sendRequest(BASE_URL, 'POST', postData);
}

//delete Post
export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function likePost(id) {
  return sendRequest(`${BASE_URL}/${id}/like`)
}

export function unlikePost(id) {
  return sendRequest(`${BASE_URL}/${id}/unlike`)
}



