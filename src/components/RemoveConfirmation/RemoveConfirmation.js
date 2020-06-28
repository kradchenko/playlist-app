import React from 'react';

import Button from '../UI/Button/Button';
import Aux from '../../hoc/Auxiliary/Auxiliary'

import classes from './RemoveConfirmation.module.css';

const removeConfirmation = (props) => (
    props.songId ? <Aux>
        <p className={classes.RemoveConfirmation}>
            Do you really want to remove {props.songList[props.songId].name} from playlist?</p>
        <div className={classes.Buttons}>
            <Button btnType="Neutral" fontSize="14px"
                    padding="10px 15px" clicked={props.cancelRemoving}>Cancel</Button>
            <Button btnType="Danger" fontSize="14px"
                    padding="10px 15px" clicked={props.removeSong}>Remove</Button>
        </div>
    </Aux> : null
);

export default  removeConfirmation;