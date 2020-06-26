import React from 'react';

import Logo from '../UI/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import classes from './Header.module.css';

const header = (props) => (
    <header className={classes.Header}>
        <div className={classes.Logo}>
            <Logo height="65%"/>
            <p className={classes.Name}>Playlist</p>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default header;