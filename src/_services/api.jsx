import axios from 'axios';
import { authHeader, store } from '../_helpers'
import { alertActions, loaderActions, userActions, crudActions } from '../_actions';

let apiUrl = ''

if (process.env.NODE_ENV === 'production') {
    apiUrl = ''
}

let instance = axios.create({
    baseURL: apiUrl,
});


const { dispatch } = store
const successHandler = (response) => {
    if (response) {
        dispatch(loaderActions.hide());
    }
    return response
}

const parseError = (e) => {
    if (!!e && !!e.response) {
        if (!!e.response.data) {
            if (!!e.response.data.message && typeof e.response.data.message === 'string') {
                return e.response.data.message
            }
            if (!!e.response.data.message && typeof e.response.data.message === 'object' && !!e.response.data.message.detail) {
                return e.response.data.message.detail
            }
        }
        if (!!e.response.statusText) {
            return e.response.statusText
        }
    }
    return 'Something went wrong!'
}


const errorHandler = (error) => {
    const { response } = error
    if (response) {
        if (response.status === 401) {
            dispatch(userActions.logout())
        }
        dispatch(alertActions.error(parseError(error)))
        dispatch(loaderActions.hide());
        return response
    }
    return error
}

const requestHandler = (request) => {
    if (request) {
        dispatch(crudActions._clear('formSubmit'))
    }
    request.headers = authHeader();
    return request
}

instance.interceptors.request.use(
    request => requestHandler(request)
)

instance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error),
)

export const apiConfig = instance