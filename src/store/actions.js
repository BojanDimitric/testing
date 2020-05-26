import axios from 'axios';
import { GET_POSTS } from './types';

const getPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data
                });
            })
            .catch(err => console.log('Error:', err));
    };
};

export default getPosts;