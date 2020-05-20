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

const Main = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Container>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        color="primary"
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
