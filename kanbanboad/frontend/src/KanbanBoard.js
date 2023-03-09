import React from 'react';
import styles from './assets/css/KanbanBoard.css';
import cards from './assets/json/data.json';
import CardList from './CardList';


const KanbanBoard = () => {
    console.log(cards);
    return (
        <div className={styles.KanbanBoard}>
            <CardList
                key ={'To Do'}
                title={'To Do'} 
                cards={cards.filter((card => card.status === 'ToDo'))}/>
            <CardList
                key ={'Doing'}
                title={'Doing'}
                cards={cards.filter((card => card.status === 'Doing'))}/>
            <CardList 
                key ={'Done'}
                title={'Done'}
                cards={cards.filter((card => card.status === 'Done'))}/>
        </div>
    );
};

export default KanbanBoard;