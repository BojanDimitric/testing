import React from 'react';
import { shallow } from 'enzyme';

import Headline from './headline';

import { find } from '../../utils';
import { checkPropTypes } from 'prop-types';

const setup = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Class', () => {

    describe('Check PropTypes', () => {
        it('Should not throw a warning', () => {
            const testPropTypes = {
                headline: 'Test Headline',
                description: 'Test Description'
            };
            const propsErr = checkPropTypes(Headline.propTypes, testPropTypes, 'props', Headline.name);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                headline: 'Test Headline',
                description: 'Test Description'
            };
            component = setup(props);
        });

        it('Renders headline class', () => {
            const headlineClass = find(component, 'headlineClass');
            expect(headlineClass.length).toBe(1);
        });

        it('Renders headline', () => {
            const headline = find(component, 'headline');
            expect(headline.length).toBe(1);
        });

        it('Renders headline', () => {
            const description = find(component, 'description');
            expect(description.length).toBe(1);
        });
    });

    describe('Have no props', () => {

        let component;
        beforeEach(() => {
            component = setup();
        });

        it('Renders null', () => {
            const headlineClass = find(component, 'headlineClass');
            expect(headlineClass.length).toBe(0);
        });
    });
});