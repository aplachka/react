import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import MyCard from './MyCard/MyCard';

const CardList = (props) => {
    return (
        <GridList cols={3} spacing={20}>
            {props.cardList.map((card) => (
                <GridListTile key={card.id}>
                    <MyCard
                        id={card.id}
                        title={card.caption}
                        content={card.text}
                        editAllowed={props.editAllowed}
                        onChecked={props.onChecked}
                        onSubmit={props.onSubmit}
                        checked={card.checked}
                    />
                </GridListTile>
            ))}
        </GridList>
    );
};
export default CardList;
