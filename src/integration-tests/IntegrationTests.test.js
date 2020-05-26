import moxios from 'moxios';
import { testStore } from './../Utils';
import getPosts from './../store/actions';


describe('getPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{
            title: 'Example title 1',
            body: 'Some Text'
        },{
            title: 'Example title 2',
            body: 'Some Text'
        },{
            title: 'Example title 3',
            body: 'Some Text'
        }];
        const store = testStore();
        console.log('store', store);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        store.dispatch(getPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            });
        
    });

});