import React from 'react';
import Radium from 'radium';

import classes from './Button.module.css';

const button = (props) => {
    let styles = {
        fontSize: props.fontSize,
        padding: props.padding,
    };

    if (props.media) {
        styles = {
            ...styles,
            '@media (max-width: 500px)': {
                padding: '10px 8px',
            }
        }
    }

    return (
        <button className={[classes.Button, classes[props.btnType]].join(' ')}
            style={styles}
            disabled={props.disabled}
            onClick={props.clicked}> {props.children} </button>
        );
};

export default Radium(button);