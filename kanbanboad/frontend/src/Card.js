import React from 'react';
import styles from './assets/scss/Card.scss';

const Card = ({no, title, description}) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{title}</div>
            <div className={styles.Card__Details}>
                 {description}
            </div>

        </div>
    );
};

export default Card;
