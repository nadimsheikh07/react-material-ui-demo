import { modalConstants } from '../_constants';

const initialState = {
    open: false,    
}

export function modal(state = initialState, action) {
    switch (action.type) {
        case modalConstants.OPEN_MODAL:
            return action.data;
        case modalConstants.CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}