import React from 'react';
import {
    GridList,
    GridListTile,
    FormControlLabel,
    Checkbox,
    Container,
} from '@material-ui/core';
import MyCard from './MyCard/MyCard';
import cards from './common/constants/Cards';
import styled from 'styled-components';

const Main = () => {
    const [checked, setChecked] = React.useState(false);

    const StyledLabel = styled(FormControlLabel)`
        && {
            color: ${checked ? 'green' : 'blue'};
        }
        && .MuiCheckbox-root {
            color: ${checked ? 'green' : 'blue'};
        }
    `;
    return (
        <Container>
            <StyledLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                    />
                }
                label="Только просмотр"
            />
            <GridList cols={3} spacing={20}>
                {cards.map((card) => (
                    <GridListTile key={card.id}>
                        <MyCard
                            key={card.id}
                            title={card.caption}
                            content={card.text}
                            readOnlyCheckBox={checked}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </Container>
    );
};
export default Main;
