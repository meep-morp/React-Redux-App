const initialState = {
    message: "Search for an Amiibo..."
}

export const amiiboReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
        case "NEW_SEARCH": 
        console.log(state);
        return {
            ...state,
            message: "",
            data: action.payload
        }
        case 'SET_ERROR': 
        return {
            ...state,
            message: action.payload,
            data: ""
        }
    }
}