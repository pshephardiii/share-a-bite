import sendRequest from './send-request';

const BASE_URL = '/api/posts';

//fetch all the posts
export function getAllPosts() {
  return sendRequest(BASE_URL);
}

export function getAllUserPosts(userId) {
  return sendRequest(`${BASE_URL}/all/${userId}`)
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
  return sendRequest(`${BASE_URL}/${id}/like`, 'POST')
}

export function unlikePost(id) {
  return sendRequest(`${BASE_URL}/${id}/unlike`,'POST')
}



