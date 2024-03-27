import sendRequest from './send-request';

const BASE_URL = '/api/comments';

//fetch all the posts
export function getAllComments() {
  return sendRequest(BASE_URL);
}

//fetch individual comment
export function getIndividualComment(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

//update comment
export function updateComment(id, newCommentData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newCommentData);
}

//delete comment
export function deleteComment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

//create comment
export function createComment(postId, commentData) {
    return sendRequest(`${BASE_URL}/${postId}/comment`,'POST', commentData);
  }

//like comment
export function likeComment(id) {
    return sendRequest(`${BASE_URL}/${id}/like`, 'POST');
  }
//unlike comment
export function unlikeComment(id) {
  return sendRequest(`${BASE_URL}/${id}/unlike`, 'POST');
}
// reply to comment 
export function replyComment(id) {
    return sendRequest(`${BASE_URL}/${id}/reply`, 'POST');
  }