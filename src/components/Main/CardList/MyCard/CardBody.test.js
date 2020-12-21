import React from 'react';
import CardBody from './CardBody';
import { shallow } from 'enzyme';

describe('CardBody', () => {
    let wrapper;

    const props = {
        editMode: true,
        text: 'test',
    };

    beforeEach(() => {
        wrapper = shallow(<CardBody {...props} />);
    });

    it('should have Input with proper props in edit mode', () => {
        expect(wrapper.find('Input').props()).toEqual(
            expect.objectContaining({
                elementType: 'textarea',
                name: 'content',
                defaultValue: 'test',
                invalid: false,
                touched: false,
                rows: 3,
            }),
        );
    });

    it('should render text in view mode', () => {
        wrapper.setProps({ editMode: false });
        expect(
            wrapper.find('WithStyles(ForwardRef(Typography))').text(),
        ).toEqual(props.text);
    });

    it('CardContent should exist', () => {
        expect(
            wrapper.find('WithStyles(ForwardRef(CardContent))'),
        ).toHaveLength(1);
    });
});
