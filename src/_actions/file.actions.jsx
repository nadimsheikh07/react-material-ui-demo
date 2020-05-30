import { fileConstants } from '../_constants';
import { fileService } from '../_services';
import { alertActions } from './alert.actions';

export const fileActions = {
    _upload,
    _clear
};

function _clear() {
    return { type: fileConstants.CLEAR };
}

function _upload(data, type) {
    return dispatch => {
        dispatch(request());
        fileService._upload(data, type)
            .then(
                result => {
                    dispatch(alertActions.success(result.data.message));
                    dispatch(success(result.data))
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request() { return { type: fileConstants.UPLOAD_REQUEST } }
    function success(data) { return { type: fileConstants.UPLOAD_SUCCESS, data } }
    function failure(error) { return { type: fileConstants.UPLOAD_FAILURE, error } }
}
