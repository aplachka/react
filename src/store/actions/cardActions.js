import axios from 'axios';
import * as actionTypes from './actionTypes';

export const create = (title, content) => ({
    type: actionTypes.CREATE_CARD,
    title,
    content,
});

export const remove = () => ({
    type: actionTypes.REMOVE_CARD,
});

export const update = (id, caption, text, checked) => ({
    type: actionTypes.UPDATE_CARD,
    id,
    caption,
    text,
    checked,
});

export const check = (id, checked) => ({
    type: actionTypes.CHECK_CARD,
    id,
    checked,
});

export const fetchCards = () => {
    return (dispatch) =>
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then((response) => {
                dispatch({
                    type: actionTypes.GET_CARDS,
                    cards: response.data.slice(0, 15).map((v) => {
                        return {
                            id: v.Number,
                            caption: v.Name,
                            text: v.About,
                            checked: false,
                        };
                    }),
                });
            });
};
