import React, { Component } from 'react';
import classes from './DNA.module.css';
import Button from '../Button/Button';


class DNA extends Component{

    executeSeqChange = () => {
        this.props.seq.push(this.props.sequence);
        this.props.show();
    }

    render(){
        return (
            <div className={classes.DNA}>
                <p>Name: {this.props.name}</p>
                <p>Description: {this.props.description}</p>
                <p>Sequence: {this.props.sequence}</p>
                <Button clicked={this.executeSeqChange}>View Full Sequence</Button>
            </div>
        );
        }
};

export default DNA;


//(event) => this.inputChangedHandler(event)

//props.show(props.sequence)