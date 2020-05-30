import { loaderConstants } from '../_constants';

export function loader(state = false, action) {
    switch (action.type) {
        case loaderConstants.SHOW_LOADER:
            return true
        case loaderConstants.HIDE_LOADER:
            return false
        default:
            return state
    }
}