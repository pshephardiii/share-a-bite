import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateUser(id, newUserData) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', newUserData);
}

export function deleteUser(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function showUser(id) {
    return sendRequest(`${BASE_URL}/${id}/show`);
}

export function contactIndex() {
  return sendRequest(`${BASE_URL}/contacts`)
}

export function contactIdIndex() {
  return sendRequest(`${BASE_URL}/contacts/ids`)
}

export function addContact(id) {
  return sendRequest(`${BASE_URL}/${id}/add`,'POST')
}

export function deleteContact(id) {
  return sendRequest(`${BASE_URL}/${id}/delete`,'POST')
}
