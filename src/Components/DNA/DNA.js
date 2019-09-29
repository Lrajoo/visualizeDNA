import React, { Component } from 'react';
import classes from './DNA.module.css';



const DNA = ( props ) => {
    return (
        <div className={classes.DNA}>
            <p>Name: {props.name}</p>
            <p>Description: {props.description}</p>
            <p>Sequence: {props.sequence}</p>
        </div>
    );
};

export default DNA;