import { GET_POSTS } from './types';

import reducer from './reducer';

describe('Reducer', () => {

    it('Should return default state', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual([]);
    });

    it('Should return new state if given type', () => {
        const test = [
            { title: 'Title 1' },
            { title: 'Title 2' },
            { title: 'Title 3' }
        ];
        const state = reducer(undefined, {
            type: GET_POSTS,
            payload: test
        });
        expect(state).toEqual(test);
    })
});