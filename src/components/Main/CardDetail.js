import React from 'react';
import { Card } from '@material-ui/core';
import { connect } from 'react-redux';
import CardBody from './CardList/MyCard/CardBody';
import './CardDetail.css';
import CardInputHeader from './CardList/MyCard/CardInputHeader';
import { fetchCards } from '../../store/actions';

const CardDetail = (props) => {
    const [title, setTitle] = React.useState({
        elementType: 'input',
        elementConfig: { type: 'text' },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false,
    });

    if (!props.cards || props.cards.length === 0) {
        props.onFetchCards();
    }

    const cardDetails = props.cards.filter(
        (t) => t.id === props.match.params.id,
    )[0];
    return cardDetails ? (
        <div style={{ paddingTop: 30 }}>
            <Card style={{ maxWidth: 500 }}>
                <div className="root">
                    <CardInputHeader
                        titleValue={cardDetails.caption}
                        title={title}
                        onSetTitle={setTitle}
                    />
                </div>
                <CardBody text={cardDetails.text} editMode={true} />
            </Card>
        </div>
    ) : (
        <h1>Not found</h1>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCards: () => dispatch(fetchCards()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);
