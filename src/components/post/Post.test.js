import React from 'react';
import Post from './Post';
import { shallow } from 'enzyme';
import { find } from '../../utils';
import { checkPropTypes } from 'prop-types';

describe('Post Class', () => {

    describe('Check PropTypes', () => {
        it('Should not render without wornings', () => {
            const testPropTypes = {
                title: 'Test Title',
                body: 'Test Body'
            };
            const propsErr = checkPropTypes(Post.propTypes, testPropTypes, 'props');
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Renders without errors', () => {
        let component;
        beforeEach(() => {
            const testPropTypes = {
                title: 'Test Title',
                body: 'Test Body'
            };
            component = shallow(<Post {...testPropTypes} />);
        });

        it('Renders Post Class', () => {
            const postClass = find(component, 'postClass');
            expect(postClass.length).toBe(1);
        });

        it('Renders title', () => {
            const title = find(component, 'title');
            expect(title.length).toBe(1);
        });

        it('Renders body', () => {
            const body = find(component, 'body');
            expect(body.length).toBe(1);
        });
    });

    describe('Do not render', () => {
        let component;
        beforeEach(() => {
            const testPropTypes = {
                body: 'Test Body'
            };
            component = shallow(<Post {...testPropTypes} />);
        });

        it('Renders null if no title', () => {
            const postClass = find(component, 'postClass');
            expect(postClass.length).toBe(0);
        });
    });
});