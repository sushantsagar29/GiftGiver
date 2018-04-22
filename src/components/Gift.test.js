import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';


describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const  props = {gift: {id}};
    const gift = shallow(<Gift/>);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    });

    describe('when typing in the peron input', () => {
        const person = 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: {value: person}});
        });
        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing in the present input', () => {
        const present = 'Golf Clubs';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value: present}});
        });
        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    });

    describe('when clicking the `remove gift` button', () => {
        beforeEach(() => {
            app.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callBack', () => {

        });
    });
});