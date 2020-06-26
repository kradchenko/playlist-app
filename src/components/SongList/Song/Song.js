import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './Song.module.css';

const song = (props) => (
    <div className={classes.Song}>
        <p>{props.name}</p>
        <div>
            <Button btnType="Danger" clicked={props.removed}>Remove</Button>
            <Button btnType="Success" clicked={props.clicked}>See Details</Button>
        </div>
    </div>
);

export default song;
