export function getToken() {
  return localStorage.getToken('token')
}
export function setToken(token) {
  localStorage.setToken('token', token)
}
export function isLogined() {
  if (localStorage.getToken('token')) {
    return true
  }
  return false
}
