export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access_token.token) {
        return { 'Authorization': 'Bearer ' + user.access_token.token };
    } else {
        return {};
    }
}