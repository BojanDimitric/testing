import { GET_POSTS } from './types';

const reducer = (state = [], action) => {
    switch (action.type) {
        case GET_POSTS: 
            return action.payload;
        default: 
            return state;
    };
};

export default reducer;