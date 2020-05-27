import React from 'react';
import { Container, Button } from '@material-ui/core';
import CardList from './CardList/CardList';
import { Delete, Add } from '@material-ui/icons';
import StyledCheckBox from './StyledCheckBox';
import CARDS from '../../common/constants/Cards';
import styled from 'styled-components';
import CreateCardDialog from './CreateCardDialog';
import { v4 as uuidv4 } from 'uuid';

const StyledDiv = styled.div`
     {
        margin-bottom: 20px;
    }
`;

const Main = () => {
    const [checked, setChecked] = React.useState(false);
    const [cards, setCards] = React.useState(CARDS);
    const [isCreacteDialogOpen, setOpen] = React.useState(false);

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

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = (title, content) => {
        const card = {
            id: uuidv4(),
            caption: title,
            text: content,
            checked: false,
        };
        setCards([card, ...cards]);
        setOpen(false);
    };

    const handleSubmit = (id) => (title, content, checked) => {
        const card = { id, caption: title, text: content, checked };
        setCards(cards.map((_card) => (_card.id === card.id ? card : _card)));
    };

    return (
        <Container>
            <StyledDiv>
                <StyledCheckBox
                    label="View only"
                    checked={checked}
                    onChecked={(checked) => setChecked(checked)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteButton}
                    startIcon={<Delete />}>
                    Delete selected cards
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    style={{ marginLeft: 20 }}
                    startIcon={<Add />}>
                    Add new card
                </Button>
                <CreateCardDialog
                    open={isCreacteDialogOpen}
                    onClose={handleClose}
                    onCreate={handleCreate}
                />
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
