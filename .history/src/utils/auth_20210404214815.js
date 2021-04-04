export function getToken() {
  return localStorage.getToken('token')
}
export function setToken(token) {
  localStorage.setItem('token', token)
}
export function isLogined() {
  if (localStorage.setItem('token')) {
    return true
  }
  return false
}
