import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const AppContext = React.createContext({
    cards: [],
    getCardsCount: () => 0,
    create: (title, content) => {},
    update: (id, caption, text, checked) => {},
    remove: () => {},
    check: (id, checked) => {},
});

export const AppContextProvider = (props) => {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        const source = axios.CancelToken.source();
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
                {
                    cancelToken: source.token,
                },
            )
            .then((response) => {
                setCards(
                    response.data.slice(0, 15).map((v) => {
                        return {
                            id: v.Number,
                            caption: v.Name,
                            text: v.About,
                            checked: false,
                        };
                    }),
                );
            });
        return () => source.cancel();
    }, []);

    const check = (id, checked) => {
        setCards(
            cards.map((_card) =>
                _card.id === id ? { ..._card, checked } : _card,
            ),
        );
    };

    const remove = () => {
        setCards(cards.filter((v) => !v.checked));
    };

    const create = (title, content) => {
        const card = {
            id: uuidv4(),
            caption: title,
            text: content,
            checked: false,
        };
        setCards([card, ...cards]);
    };

    const update = (id, caption, text, checked) => {
        const card = { id, caption, text, checked };
        setCards(cards.map((_card) => (_card.id === card.id ? card : _card)));
    };

    return (
        <AppContext.Provider
            value={{
                cards,
                getCardsCount: () => cards.length,
                create,
                update,
                remove,
                check,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};
export default AppContext;
