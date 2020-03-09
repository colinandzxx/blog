import { SCROLL_TO } from "../actionTypes";

const initialState = {
    scrollTo: ''
};

const scrollTo = (state = initialState, action) => {
    switch (action.type) {
        case SCROLL_TO:
            return action.payload.scrollTo;
        default:
            return state;
    }
};

export default scrollTo;