import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'
import LandingContainer from '../client/containers/LandingContainer';
import Login from '../client/components/SignUp';
import SignUp from '../client/components/SignUp';

configure({ adapter: new Adapter() });

describe('React Unit Testing', () => {
    describe('LandingContainer', () => {
        let wrapper;
        let props = {
            isLoggedIn: true
        }

        it('should render login', () => {
            const tree = renderer.create(<LandingContainer {...props} />)
            expect(tree.toJSON()).toMatchSnapshot();
        })
    });
});