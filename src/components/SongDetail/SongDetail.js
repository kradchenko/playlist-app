import React from 'react';

import classes from './SongDetail.module.css';

const songDetail = (props) => (
    <div className={classes.SongDetail}>
        <h2>{props.labelDetail} :</h2> <p>{props.detail}</p>
    </div>
);

export default songDetail;