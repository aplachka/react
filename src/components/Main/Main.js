import React from 'react';
import { Container, Button } from '@material-ui/core';
import CardList from './CardList/CardList';
import { Delete, Add } from '@material-ui/icons';
import styled from 'styled-components';
import CreateCardDialog from './CreateCardDialog';
import { create, remove } from '../../store/actions/cardActions';
import { connect } from 'react-redux';

const StyledDiv = styled.div`
     {
        margin-top: 5px;
        margin-bottom: 30px;
    }
`;

const Main = (props) => {
    const [isCreacteDialogOpen, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleCreate = (title, content) => {
        props.onCreateCard(title, content);
        setOpen(false);
    };

    return (
        <Container style={{ marginTop: 20 }}>
            {!props.viewOnly && (
                <StyledDiv>
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
            )}

            <CardList editAllowed={!props.viewOnly} />
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        viewOnly: state.viewOnlyModeReducer.viewOnly,
    };
};

const mapDispatchToProps = {
    onCreateCard: create,
    onRemoveCard: remove,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
