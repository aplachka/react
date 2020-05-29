import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import MyCard from './MyCard/MyCard';
import AppContext from '../../../context/app-context';

const CardList = (props) => {
    const context = React.useContext(AppContext);

    return (
        <GridList cols={3} spacing={20}>
            {context.cards.map((card) => (
                <GridListTile key={card.id}>
                    <MyCard
                        title={card.caption}
                        content={card.text}
                        editAllowed={props.editAllowed}
                        onChecked={(checked) => context.check(card.id, checked)}
                        onSubmit={(title, content, checked) =>
                            context.update(card.id, title, content, checked)
                        }
                        checked={card.checked}
                    />
                </GridListTile>
            ))}
        </GridList>
    );
};
export default CardList;
