import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import MyCard from './MyCard/MyCard';

const CardList = (props) => {
    return (
        <GridList cols={3} spacing={20}>
            {props.cardList.map((card) => (
                <GridListTile key={card.id}>
                    <MyCard
                        key={card.id}
                        title={card.caption}
                        content={card.text}
                        editAllowed={props.editAllowed}
                        onChecked={props.onChecked(card.id)}
                    />
                </GridListTile>
            ))}
        </GridList>
    );
};
export default CardList;
