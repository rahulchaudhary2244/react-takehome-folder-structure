import React from 'react';
import styles from './Pill.module.css';

function Pill({ text }) {
    return <div className={styles['container']}>{text || 'No text'}</div>;
}

export default Pill;
