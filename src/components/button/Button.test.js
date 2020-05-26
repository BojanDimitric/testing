import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { find } from '../../utils';
import { checkPropTypes } from 'prop-types';

describe('Button Class', () => {

    describe('Checking PropTypes', () => {
        it('Should not throw an warning', () => {
            const testPropTypes = {
                text: 'Test Button Text',
                emitEvent: () => {

                }
            };
            const propsErr = checkPropTypes(Button.propTypes, testPropTypes, 'props');
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let component;
        beforeEach(() => {
            const testPropTypes = {
                text: 'Test Button Text',
                emitEvent: () => {

                }
            };
            component = shallow(<Button {...testPropTypes} />)
        });

        it('Renders button class', () => {
            const buttonClass = find(component, 'buttonClass');
            expect(buttonClass.length).toBe(1);
        });
    });
});