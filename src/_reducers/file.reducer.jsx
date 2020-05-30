import { fileConstants } from '../_constants';

export function fileUpload(state = null, action) {
    switch (action.type) {
        // upload call
        case fileConstants.UPLOAD_REQUEST:
            return null;
        case fileConstants.UPLOAD_SUCCESS:
            return action.data;
        case fileConstants.UPLOAD_FAILURE:
            return action.error;


        // clear data
        case fileConstants.CLEAR:
            return null;
        default:
            return state
    }
}