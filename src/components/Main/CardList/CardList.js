import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import MyCard from './MyCard/MyCard';
import { check, update } from '../../../store/actions/cardActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CardList = (props) => {
    const history = useHistory();
    const handleDoubleClick = (card) => {
        history.push(`card/${card.id}`);
    };

    return (
        <GridList cols={3} spacing={20}>
            {props.cards.map((card) => (
                <GridListTile key={card.id}>
                    <MyCard
                        title={card.caption}
                        content={card.text}
                        editAllowed={props.editAllowed}
                        onChecked={(checked) =>
                            props.onCheckCard(card.id, checked)
                        }
                        onSubmit={(title, content, checked) =>
                            props.onUpdateCard(card.id, title, content, checked)
                        }
                        checked={card.checked}
                        onDoubleClick={(event) => handleDoubleClick(card)}
                    />
                </GridListTile>
            ))}
        </GridList>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cardReducer.cards,
});

const mapDispatchToProps = { onCheckCard: check, onUpdateCard: update };

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
