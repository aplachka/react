import React from 'react';
import { Container, Button } from '@material-ui/core';
import CardList from './CardList/CardList';
import { Delete, Add } from '@material-ui/icons';
import StyledCheckBox from './StyledCheckBox';
import styled from 'styled-components';
import CreateCardDialog from './CreateCardDialog';
import { create, remove } from '../../store/actions';
import { connect } from 'react-redux';

const StyledDiv = styled.div`
     {
        margin-bottom: 20px;
    }
`;

const Main = (props) => {
    const [checked, setChecked] = React.useState(false);
    const [isCreacteDialogOpen, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleCreate = (title, content) => {
        props.onCreateCard(title, content);
        setOpen(false);
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
                    onClick={props.onRemoveCard}
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

            <CardList editAllowed={!checked} />
        </Container>
    );
};

const mapDispatchToProps = {
    onCreateCard: create,
    onRemoveCard: remove,
};
export default connect(null, mapDispatchToProps)(Main);
