import React, { Component } from 'react';
import NavBar from './NavBar';
import MyCard from './MyCard';
import {
    GridList,
    GridListTile,
    FormControlLabel,
    Checkbox,
    CssBaseline,
    Container,
} from '@material-ui/core';

const cards = [
    {
        id: 'a',
        caption: 'task1',
        text: 'this is task1',
    },
    {
        id: 'b',
        caption: 'task2',
        text: 'this is task2',
    },
    {
        id: 'c',
        caption: 'task3',
        text: 'this is task3',
    },
    {
        id: 'd',
        caption: 'task4',
        text: 'this is task4',
    },
    {
        id: 'e',
        caption: 'task5',
        text: 'this is task5',
    },
    {
        id: 'f',
        caption: 'task6',
        text: 'this is task6',
    },
    {
        id: 'g',
        caption: 'task7',
        text: 'this is task7',
    },
    {
        id: 'h',
        caption: 'task8',
        text: 'this is task8',
    },
];

class App extends Component {
    state = { checked: false };

    handleCheckboxChange = (event) => {
        this.setState({ checked: event.target.checked });
    };

    render() {
        return (
            <>
                <CssBaseline />
                <NavBar />
                <Container>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.checked}
                                onChange={this.handleCheckboxChange}
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
                                    readOnlyCheckBox={this.state.checked}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </Container>
            </>
        );
    }
}

export default App;
