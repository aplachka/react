import React from 'react';
import MyCardHeader from './MyCardHeader';
import { mount } from 'enzyme';

describe('MyCardHeader', () => {
    let wrapper;
    let instance;

    const props = {
        editMode: true,
        title: 'test',
        checked: true,
        onEditing: jest.fn(),
        onChecked: jest.fn(),
    };

    beforeEach(() => {
        wrapper = mount(<MyCardHeader {...props} />);
        instance = wrapper.instance();
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render title value in edit mode', () => {
        expect(wrapper.find('CardInputHeader').props()).toHaveProperty(
            'titleValue',
            props.title,
        );
    });

    it('should render Save button in edit mode', () => {
        expect(
            wrapper.exists('WithStyles(ForwardRef(Button))[type="submit"]'),
        ).toEqual(true);
    });

    it('should enable Save button when title value is valid', () => {
        expect(
            wrapper
                .find('WithStyles(ForwardRef(Button))[type="submit"]')
                .prop('disabled'),
        ).toEqual(false);
    });

    it('should render Clear button in edit mode', () => {
        expect(
            wrapper.exists('WithStyles(ForwardRef(IconButton))[type="reset"]'),
        ).toEqual(true);
    });

    it('CardHeader should exist', () => {
        expect(wrapper.find('WithStyles(ForwardRef(CardHeader))')).toHaveLength(
            1,
        );
    });

    it('should handle click event for Clear button', () => {
        wrapper
            .find('WithStyles(ForwardRef(IconButton))[type="reset"]')
            .at(0)
            .simulate('click');
        expect(props.onChecked).toHaveBeenCalledWith(false);
        expect(props.onEditing).toHaveBeenCalledWith(false);
    });

    it('should display title in view mode', () => {
        wrapper.setProps({ editMode: false });
        expect(wrapper.find('h3').text()).toEqual(props.title);
    });

    it('should display Edit button in view mode', () => {
        wrapper.setProps({ editMode: false });
        wrapper.setProps({ editAllowed: true });
        expect(
            wrapper.exists('WithStyles(ForwardRef(IconButton))[type="button"]'),
        ).toEqual(true);
    });

    it('should display Checkbox in view mode', () => {
        wrapper.setProps({ editMode: false });
        expect(wrapper.exists('WithStyles(ForwardRef(Checkbox))')).toEqual(
            true,
        );
    });

    it('should call onchange handler for checkbox ', () => {
        wrapper.setProps({ editMode: false });
        wrapper.find('WithStyles(ForwardRef(Checkbox))').simulate('change', {
            target: {
                checked: false,
            },
        });
        expect(props.onChecked).toHaveBeenCalledWith(false);
    });

    it('should have proper props for checkbox', () => {
        wrapper.setProps({ editMode: false });
        expect(
            wrapper.find('WithStyles(ForwardRef(Checkbox))').props(),
        ).toEqual({
            onDoubleClick: expect.any(Function),
            color: 'primary',
            checked: true,
            onChange: expect.any(Function),
        });
    });

    it('should call stoppropogation on double click', () => {
        wrapper.setProps({ editMode: false });
        const event = {
            stopPropagation: jest.fn(),
        };
        wrapper
            .find('WithStyles(ForwardRef(Checkbox))')
            .simulate('doubleClick', event);
        expect(event.stopPropagation).toHaveBeenCalled();
    });
});
