import React from 'react';
import { MyCard } from './Mycard';
import { shallow } from 'enzyme';

describe('MyCard', () => {
    let wrapper;

    const props = {
        title: 'some title',
        content: 'some content',
        checked: true,
        editAllowed: true,
        onChecked: () => ({}),
        onDoubleClick: () => ({}),
        onSubmit: jest.fn(),
    };

    const setEditing = jest.fn();

    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation((editing) => [
            false,
            setEditing,
        ]);
        wrapper = shallow(<MyCard {...props} />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should have form with proper props', () => {
        expect(wrapper.find('form').props()).toEqual(
            expect.objectContaining({
                onSubmit: expect.any(Function),
                className: 'content',
                onDoubleClick: expect.any(Function),
            }),
        );
    });

    it('form should not handle double click in edit mode', () => {
        jest.spyOn(React, 'useState').mockImplementation((editing) => [
            true,
            setEditing,
        ]);
        wrapper.setProps({ checked: false });
        expect(wrapper.find('form').prop('onDoubleClick')).toEqual(null);
    });

    it('should handle Submit', () => {
        const event = {
            preventDefault: jest.fn(),
            target: {
                elements: {
                    title: {
                        value: 'title',
                    },
                    content: {
                        value: 'content',
                    },
                },
            },
        };
        wrapper.find('form').simulate('submit', event);
        expect(props.onSubmit).toHaveBeenCalledWith('title', 'content', true);
    });

    it('Card should exist', () => {
        expect(wrapper.exists('WithStyles(ForwardRef(Card)).card')).toEqual(
            true,
        );
    });

    it('Card should have blue background if checkbox set', () => {
        expect(
            wrapper.find('WithStyles(ForwardRef(Card))').prop('style'),
        ).toEqual({ backgroundColor: 'blue' });
    });

    it('Card should not have blue background if checkbox is not checked', () => {
        wrapper.setProps({ checked: false });
        expect(
            wrapper.find('WithStyles(ForwardRef(Card))').prop('style'),
        ).toEqual({ backgroundColor: false });
    });

    it('should have MyCardHeader with proper props', () => {
        expect(wrapper.find('MyCardHeader').props()).toEqual(
            expect.objectContaining({
                title: 'some title',
                editAllowed: true,
                editMode: false,
                onEditing: setEditing,
                onChecked: expect.any(Function),
                checked: true,
                onDoubleClick: expect.any(Function),
            }),
        );
    });

    it('should have CardBody with proper props', () => {
        expect(wrapper.find('CardBody').props()).toEqual(
            expect.objectContaining({
                text: 'some content',
                editMode: false,
                onDoubleClick: expect.any(Function),
            }),
        );
    });

    it('should set Editing false if view only mode', () => {
        jest.spyOn(React, 'useEffect').mockImplementation((handle) => handle());
        wrapper.setProps({ editAllowed: false });
        expect(setEditing).toHaveBeenCalledWith(false);
    });
});
