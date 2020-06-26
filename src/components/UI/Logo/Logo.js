import React from 'react';

import dummyLogo from '../../../assets/images/spotify-logo.png';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={dummyLogo} alt="playlist-logo"/>
    </div>
);

export default logo;