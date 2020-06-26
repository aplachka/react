import React from 'react';
import { connect } from 'react-redux';
import MyCard from './CardList/MyCard/MyCard';
import { fetchCards, update } from '../../store/actions/cardActions';

const CardDetail = (props) => {
    if (!props.cards || props.cards.length === 0) {
        props.onFetchCards();
    }
    const cardId = props.match.params.id;
    const cardDetails = props.cards.filter(
        (t) => t.id === props.match.params.id,
    )[0];
    return cardDetails ? (
        <div style={{ paddingTop: 30 }}>
            <MyCard
                title={cardDetails.caption}
                content={cardDetails.text}
                editing={!props.viewOnly}
                editAllowed={!props.viewOnly}
                onSubmit={(title, content, checked) =>
                    props.onUpdateCard(cardId, title, content, checked)
                }
                checked={cardDetails.checked}
            />
        </div>
    ) : (
        <h1>Not found</h1>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.cardReducer.cards,
        viewOnly: state.viewOnlyModeReducer.viewOnly,
    };
};

const mapDispatchToProps = {
    onFetchCards: fetchCards,
    onUpdateCard: update,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
