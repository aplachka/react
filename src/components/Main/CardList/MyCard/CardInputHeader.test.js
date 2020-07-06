import React from 'react';
import CardInputHeader from './CardInputHeader';
import { mount } from 'enzyme';

describe('CardInputHeader', () => {
    let wrapper;

    const props = {
        title: {
            elementType: 'input',
            elementConfig: { type: 'text' },
            value: '',
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
        },
        titleValue: 'test',
        onSetTitle: jest.fn(),
    };

    beforeEach(() => {
        wrapper = mount(<CardInputHeader {...props} />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should have Input with proper props ', () => {
        expect(wrapper.find('Input').props()).toEqual({
            elementType: 'input',
            elementConfig: { type: 'text' },
            validation: {
                required: true,
            },
            name: 'title',
            defaultValue: 'test',
            invalid: false,
            touched: false,
            shouldValidate: {
                required: true,
            },
            changed: expect.any(Function),
        });
    });

    it('should set input value on change event ', () => {
        wrapper.find('input').simulate('change', {
            target: {
                value: 'somenewvalue',
            },
        });
        expect(props.onSetTitle).toHaveBeenCalledWith(
            expect.objectContaining({
                value: 'somenewvalue',
                valid: true,
            }),
        );
    });
});
