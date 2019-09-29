import React, { Component } from 'react';

import classes from './Input.module.css';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.touched){
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                                {...props.elementConfig}
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed}
                            />;
            break;
        case('textarea'):
            inputElement = <textarea 
                                {...props.elementConfig}
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed}
                            />;
            break;
        default:
            inputElement = <input 
                                {...props.elementConfig}
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed}
                            />;
            
    }

    let validationError = null;
    if(props.invalid && props.touched){
        validationError = <p className={classes.ErrMessage}>Please enter a valid {props.name}</p>
    }

    return (
        <div className={classes.Input}>
            {inputElement}
            {validationError}
        </div>
    );

};

export default input;