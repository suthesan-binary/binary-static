import React                  from 'react';
import { expect }             from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter                from 'enzyme-adapter-react-16';
import SettingsControl        from '../settings_control.jsx';
import { testChildren }       from '../../../../../test_helper';

configure({ adapter: new Adapter() });

describe('SettingsControl', () => {
    it('should render one <SettingsControl /> component', () => {
        const wrapper = shallow(<SettingsControl />);
        expect(wrapper).to.have.length(1);
    });
    it('should render children when passed in', () => {
        testChildren(<SettingsControl />);
    });
});
