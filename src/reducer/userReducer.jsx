import {
    FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_ERROR,
    CREATE_USER_SUCCESS, CREATE_USER_REQUEST, CREATE_USER_ERROR,
    DELETE_USER_SUCCESS,DELETE_USER_REQUEST,DELETE_USER_ERROR
} from '../action/types';


const INITIAL_STATE = {

    listUsers: [],
    isLoading: false,
    isError: false,
    isCreating:false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log("FETCH_USER_REQUEST",action)
            return {

                ...state,isLoading:true,isError:false

            };

        case FETCH_USER_SUCCESS:
            console.log("FETCH_USER_SUCCESS",action)

            return {
                ...state,listUsers:action.dataUsers,isLoading:false,isError:false

            };
        case FETCH_USER_ERROR:
            console.log("FETCH_USER_ERROR",action)

            return {
                ...state,isLoading:false,isError:true

            };
        case CREATE_USER_REQUEST:
            console.log("CREATE_USER_REQUEST",action)
            return {

                ...state,isCreating:true

            };

        case CREATE_USER_SUCCESS:
            console.log("CREATE_USER_SUCCESS",action)

            return {
                ...state,isCreating:false

            };
        case CREATE_USER_ERROR:
        case DELETE_USER_REQUEST:
            console.log("DELETE_USER_REQUEST",action)
            return {

                ...state

            };

        case DELETE_USER_SUCCESS:
            console.log("DELETE_USER_SUCCESS",action)

            return {
                ...state

            };
        case DELETE_USER_ERROR:
            console.log("DELETE_USER_ERROR",action)

            return {
                ...state

            };

        default: return state;

    }

};

export default userReducer;