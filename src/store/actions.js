import axios from 'axios';

export const CREATE_CARD = 'CREATE_CARD ';
export const REMOVE_CARD = 'REMOVE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const CHECK_CARD = 'CHECK_CARD';
export const GET_CARDS = 'GET_CARDS';

export const create = (title, content) => ({
    type: CREATE_CARD,
    title,
    content,
});

export const remove = () => ({
    type: REMOVE_CARD,
});

export const update = (id, caption, text, checked) => ({
    type: UPDATE_CARD,
    id,
    caption,
    text,
    checked,
});

export const check = (id, checked) => ({
    type: CHECK_CARD,
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
                    type: GET_CARDS,
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
