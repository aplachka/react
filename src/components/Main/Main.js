import React from 'react';
import { Container, Button } from '@material-ui/core';
import CardList from './CardList/CardList';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledCheckBox from './StyledCheckBox';
import CARDS from '../../common/constants/Cards';
import styled from 'styled-components';

const StyledDiv = styled.div`
     {
        margin-bottom: 20px;
    }
`;

const Main = () => {
    const [checked, setChecked] = React.useState(false);
    const [cards, setCards] = React.useState(CARDS);

    const handleChecked = (id) => (checked) => {
        setCards(
            cards.map((_card) =>
                _card.id === id ? { ..._card, checked } : _card,
            ),
        );
    };

    const handleDeleteButton = () => {
        setCards(cards.filter((v) => !v.checked));
    };

    const handleSubmit = (id) => (title, content, checked) => {
        const card = { id, caption: title, text: content, checked };
        setCards(cards.map((_card) => (_card.id === card.id ? card : _card)));
    };

    return (
        <Container>
            <StyledDiv>
                <StyledCheckBox
                    label="Только просмотр"
                    checked={checked}
                    onChecked={(checked) => setChecked(checked)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteButton}
                    startIcon={<DeleteIcon />}>
                    Удалить выбранные карточки
                </Button>
            </StyledDiv>

            <CardList
                cardList={cards}
                onSubmit={handleSubmit}
                onChecked={handleChecked}
                editAllowed={!checked}
            />
        </Container>
    );
};
export default Main;
