import { crudConstants } from '../_constants';
import { crudService } from '../_services';
import { alertActions } from './alert.actions';
import { loaderActions } from './loader.actions';

export const crudActions = {
    _getAll,
    _get,
    _create,
    _update,
    _delete,
    _clear,
    _add
};

function _clear(kind) {
    return { type: `${kind}.${crudConstants.CLEAR}` };
}

function _add(kind, data) {
    return { type: `${kind}.${crudConstants.ADD}`, data };
}

function _get(kind, url, id) {
    return dispatch => {
        dispatch(loaderActions.show());
        dispatch(request());
        crudService._get(url, id)
            .then(
                result => {
                    if (result.status === 200) {
                        dispatch(success(result.data))
                    }
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };

    function request() { return { type: `${kind}.${crudConstants.GET_REQUEST}` } }
    function success(data) { return { type: `${kind}.${crudConstants.GET_SUCCESS}`, data } }
    function failure(error) { return { type: `${kind}.${crudConstants.GET_FAILURE}`, error } }
}

function _getAll(kind, url, filterData) {
    return dispatch => {
        dispatch(loaderActions.show());
        dispatch(request());
        crudService._getAll(url, filterData)
            .then(
                result => {
                    if (result.status === 200) {
                        dispatch(success(result.data.data))
                    }
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };

    function request() { return { type: `${kind}.${crudConstants.GET_ALL_REQUEST}` } }
    function success(data) { return { type: `${kind}.${crudConstants.GET_ALL_SUCCESS}`, data } }
    function failure(error) { return { type: `${kind}.${crudConstants.GET_ALL_FAILURE}`, error } }
}

function _create(kind, url, data) {
    return dispatch => {
        dispatch(loaderActions.show());
        dispatch(request());
        crudService._create(url, data)
            .then(
                result => {
                    if (result.status === 200) {
                        dispatch(alertActions.success(result.data.message));
                        dispatch(success(null))
                        dispatch(_clear('formError'))
                        dispatch(_add('formSubmit', true))
                    }
                    if (result.status === 422) {
                        dispatch(_add('formError', result.data))
                        dispatch(_add('formSubmit', false))
                    }
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: `${kind}.${crudConstants.CREATE_REQUEST}` } }
    function success(data) { return { type: `${kind}.${crudConstants.CREATE_SUCCESS}`, data } }
    function failure(error) { return { type: `${kind}.${crudConstants.CREATE_FAILURE}`, error } }
}

function _update(kind, url, id, data) {
    return dispatch => {
        dispatch(loaderActions.show());
        dispatch(request());
        crudService._update(url, id, data)
            .then(
                result => {
                    if (result.status === 200) {
                        dispatch(alertActions.success(result.data.message));
                        dispatch(success(null))
                        dispatch(_clear('formError'))
                        dispatch(_add('formSubmit', true))
                    }
                    if (result.status === 422) {
                        dispatch(_add('formError', result.data))
                        dispatch(_add('formSubmit', false))
                    }
                }, error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: `${kind}.${crudConstants.UPDATE_REQUEST}` } }
    function success(data) { return { type: `${kind}.${crudConstants.UPDATE_SUCCESS}`, data } }
    function failure(error) { return { type: `${kind}.${crudConstants.UPDATE_FAILURE}`, error } }
}

function _delete(kind, url, id) {
    return dispatch => {
        dispatch(loaderActions.show());
        dispatch(request());
        crudService._delete(url, id)
            .then(
                result => {
                    if (result.status === 200) {
                        dispatch(alertActions.success(result.data.message));
                        dispatch(success(null))
                    }
                },
                error => {
                    dispatch(failure(error.message));
                }
            );
    };

    function request() { return { type: `${kind}.${crudConstants.DELETE_REQUEST}` } }
    function success(data) { return { type: `${kind}.${crudConstants.DELETE_SUCCESS}`, data } }
    function failure(error) { return { type: `${kind}.${crudConstants.DELETE_FAILURE}`, error } }
}
