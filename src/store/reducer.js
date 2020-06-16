import * as actions from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_CARD:
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
        case actions.REMOVE_CARD:
            return { ...state, cards: state.cards.filter((v) => !v.checked) };

        case actions.UPDATE_CARD:
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
        case actions.CHECK_CARD:
            const newArray = state.cards.map((_card) =>
                _card.id === action.id
                    ? { ..._card, checked: action.checked }
                    : _card,
            );
            return { ...state, cards: newArray };

        case actions.GET_CARDS:
            return { ...state, cards: action.cards };

        default:
            return state;
    }
};

export default reducer;
