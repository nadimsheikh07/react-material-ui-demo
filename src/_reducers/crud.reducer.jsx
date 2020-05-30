import { crudConstants } from '../_constants';

const crud = (kind) => ((state = null, action) => {
    switch (action.type) {
        // get call 
        case `${kind}.${crudConstants.GET_REQUEST}`:
            return null;
        case `${kind}.${crudConstants.GET_SUCCESS}`:
            return action.data;
        case `${kind}.${crudConstants.GET_FAILURE}`:
            return null;

        // get all call 
        case `${kind}.${crudConstants.GET_ALL_REQUEST}`:
            return null;
        case `${kind}.${crudConstants.GET_ALL_SUCCESS}`:
            return action.data;
        case `${kind}.${crudConstants.GET_ALL_FAILURE}`:
            return null;

        // create call
        case `${kind}.${crudConstants.CREATE_REQUEST}`:
            return null;
        case `${kind}.${crudConstants.CREATE_SUCCESS}`:
            return action.data;
        case `${kind}.${crudConstants.CREATE_FAILURE}`:
            return null;

        // update call
        case `${kind}.${crudConstants.UPDATE_REQUEST}`:
            return null;
        case `${kind}.${crudConstants.UPDATE_SUCCESS}`:
            return action.data
        case `${kind}.${crudConstants.UPDATE_FAILURE}`:
            return null

        // delete call
        case `${kind}.${crudConstants.DELETE_REQUEST}`:
            return null
        case `${kind}.${crudConstants.DELETE_SUCCESS}`:
            return action.data
        case `${kind}.${crudConstants.DELETE_FAILURE}`:
            return null

        // add data
        case `${kind}.${crudConstants.ADD}`:
            return action.data
        // clear data
        case `${kind}.${crudConstants.CLEAR}`:
            return null
        default:
            return state
    }
})

export default crud;