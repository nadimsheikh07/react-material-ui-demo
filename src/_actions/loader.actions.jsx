import { loaderConstants } from '../_constants';

export const loaderActions = {
    show,
    hide,
};

function show() {
    return { type: loaderConstants.SHOW_LOADER };
}

function hide() {
    return { type: loaderConstants.HIDE_LOADER };
}