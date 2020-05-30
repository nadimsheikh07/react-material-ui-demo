import { alertConstants } from '../_constants';

export const alertActions = {
    info,
    success,
    error,
    warning,
    clear
};


function info(message) {
    return { type: alertConstants.INFO, message };
}
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}
function warning(message) {
    return { type: alertConstants.WARNING, message };
}
function error(message) {
    return { type: alertConstants.ERROR, message };
}
function clear() {
    return { type: alertConstants.CLEAR };
}