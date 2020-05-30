import { alertConstants } from '../_constants';

export function alert(state = null, action) {
    switch (action.type) {
        case alertConstants.INFO:
            return {
                type: 'info',
                message: action.message
            };
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.message
            };
        case alertConstants.WARNING:
            return {
                type: 'warning',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'error',
                message: action.message
            };
        case alertConstants.CLEAR:
            return null;
        default:
            return state
    }
}