import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const InputClasses = [classes.InputElement];

    let validationError = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        InputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
    }

    switch(props.elementType) {
        case ('input'): {
            inputElement = <input className={InputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>;
            break;
        }
        // TODO: Add more options if needed.
        default: {
            inputElement = <input className={InputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>;
            break;
        }
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default input;