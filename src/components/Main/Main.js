import React from 'react';
import { Container, Button } from '@material-ui/core';
import CardList from './CardList/CardList';
import { Delete, Add } from '@material-ui/icons';
import StyledCheckBox from './StyledCheckBox';
import styled from 'styled-components';
import CreateCardDialog from './CreateCardDialog';
import AppContext from '../../context/app-context';

const StyledDiv = styled.div`
     {
        margin-bottom: 20px;
    }
`;

const Main = () => {
    const context = React.useContext(AppContext);
    const [checked, setChecked] = React.useState(false);
    const [isCreacteDialogOpen, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleCreate = (title, content) => {
        context.create(title, content);
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
                    onClick={context.remove}
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
export default Main;
