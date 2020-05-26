import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducer';
import { middlewares } from './../createStore';

export const find = (component, attr) => component.find(`[data-test='${attr}']`);

export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};


