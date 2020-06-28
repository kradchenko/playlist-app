import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

import classes from './Header.module.css';

const header = (props) => (
    <header className={classes.Header}>
        <div className={classes.Logo}>
            <Logo height="65%"/>
            <Link to="/" className={classes.Name}>Playlist</Link>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default header;