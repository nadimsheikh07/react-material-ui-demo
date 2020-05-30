import { confirmConstants } from '../_constants';

export const confirmActions = {
    confirm,
    show,
    clear
};

function confirm(data) {
    return { type: confirmConstants.CONFIRM, data };
}

function show(title, text, data) {
    return { type: confirmConstants.SHOW, title, text, data };
}

function clear() {
    return { type: confirmConstants.CLEAR };
}