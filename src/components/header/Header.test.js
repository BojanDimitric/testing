import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

import { find } from '../../utils';

const setup = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setup();
    });

    it('Should render header', () => {
        const header = find(component, 'header');
        expect(header.length).toBe(1);
    });

    it('Should render logo', () => {
        const logo = find(component, 'logo');
        expect(logo.length).toBe(1);
    });
});