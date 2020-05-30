import { modalConstants } from '../_constants';

export const modalActions = {
    open,
    close,
};

function open(data) {
    return { type: modalConstants.OPEN_MODAL, data };
}

function close() {
    return { type: modalConstants.CLOSE_MODAL };
}