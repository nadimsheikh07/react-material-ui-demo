import { confirmConstants } from '../_constants';

export function confirm(state = {}, action) {
    switch (action.type) {
        case confirmConstants.CONFIRM:
            return {
                type: 'CONFIRM',
                confirm: true,
                data: action.data
            };
        case confirmConstants.SHOW:
            return {
                show: true,
                title: action.title,
                text: action.text,
                data: action.data,
            };
        case confirmConstants.CLEAR:
            return {
                show: false
            };
        default:
            return state
    }
}