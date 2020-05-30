import { apiConfig } from './api';
import { auth, googleAuthProvider, facebookAuthProvider } from "../firebase";
import { history } from '../_helpers';

export const userService = {
    login,
    logout,
    firebaseLogin,
    firebaseCheckAuth,
};

function login(email, password) {
    const user = {
        email,
        password
    };

    return apiConfig.post(`/auth/login`, user)
        .then(result => {
            if (result.status === 200) {
                localStorage.setItem('user', JSON.stringify(result.data.data));
                history.push('/dashboard');
            }
            return result
        });
}

function firebaseLogin(type) {
    if (type === 'facebook') {
        auth.signInWithPopup(facebookAuthProvider)
    } else {
        auth.signInWithPopup(googleAuthProvider)
    }
}

function firebaseCheckAuth() {
    auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
            const user = {
                name: userAuth.displayName,
                email: userAuth.email,
                mobile: userAuth.phoneNumber,
            };

            apiConfig.post(`/auth/firebase_login`, user)
                .then(data => {
                    if (data.status === 200) {
                        localStorage.setItem('user', JSON.stringify(data.data.data));
                        history.push('/dashboard');
                    }
                });

        }
    })
}

function logout() {
    auth.signOut()
    localStorage.removeItem('user');    
}