import * as actionTypes from '../actions/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_CARD:
            return Object.assign({}, state, {
                cards: [
                    {
                        id: uuidv4(),
                        caption: action.title,
                        text: action.content,
                        checked: false,
                    },
                    ...state.cards,
                ],
            });
        case actionTypes.REMOVE_CARD:
            return { ...state, cards: state.cards.filter((v) => !v.checked) };

        case actionTypes.UPDATE_CARD:
            const card = {
                id: action.id,
                caption: action.caption,
                text: action.text,
                checked: action.checked,
            };
            const updatedArray = state.cards.map((_card) =>
                _card.id === card.id ? card : _card,
            );
            return { ...state, cards: updatedArray };
        case actionTypes.CHECK_CARD:
            const newArray = state.cards.map((_card) =>
                _card.id === action.id
                    ? { ..._card, checked: action.checked }
                    : _card,
            );
            return { ...state, cards: newArray };

        case actionTypes.GET_CARDS:
            return { ...state, cards: action.cards };

        default:
            return state;
    }
};

export default cardReducer;
