import sendRequest from './send-request';

const BASE_URL = '/api/comments';


/*
router.get('/', commentCtrl.indexComments, commentCtrl.jsonComments) // indexComments
router.get('/:id', commentCtrl.showComment, commentCtrl.jsonComment) // show comment


// the create a comment route might need to be moved to the Nicole's Post route
router.post('/:postId/comment', userCtrl.auth, commentCtrl.createComment, commentCtrl.jsonComment) //create a comment
router.put('/:id', userCtrl.auth,commentCtrl.updateComment, commentCtrl.jsonComment) // update the comment
router.delete('/:id', userCtrl.auth, commentCtrl.deleteComment, commentCtrl.jsonComment) // delete the comment
router.post('/:id/like', userCtrl.auth, commentCtrl.likeComment, commentCtrl.jsonComment) // like the comment
router.post('/:commentId/reply', userCtrl.auth, commentCtrl.replyComment, commentCtrl.jsonComment) // reply to the comment
*/

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

// reply to comment 
export function replyComment(id) {
    return sendRequest(`${BASE_URL}/${id}/reply`, 'POST');
  }