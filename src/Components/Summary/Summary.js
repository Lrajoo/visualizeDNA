import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Summary.module.css';


class Summary extends Component {

    render() {
        
        let counter = 0;
        const items = []
        for(let k in this.props.seq){
            if(counter % 90 == 0){
                items.push(<br></br>)
            }
            if(this.props.seq[k] == 'A'){
                items.push(<p style={{display:'inline', color:'red'}}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] == 'G'){
                items.push(<p style={{display:'inline', color:'orange'}}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] == 'T'){
                items.push(<p style={{display:'inline', color:'green'}}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] == 'C'){
                items.push(<p style={{display:'inline', color:'blue'}}>{this.props.seq[k]}</p>)
            }else{
                items.push(<p style={{display:'inline', color:'black'}}>{this.props.seq[k]}</p>)
            }
            counter +=1;
          
        }
        counter = 0;

        return (
            <div>
                {items}
            </div>
        );
    }



};

export default Summary;

/*
        for(let k in this.props.seq){
            if(this.props.seq[k] == 'A'){
                color='red';
            }else if(this.props.seq[k] == 'T'){
                color='blue';
            }else if(this.props.seq[k] == 'G'){
                color='green';
            }else if(this.props.seq[k] == 'C'){
                color='indigo';
            }else{
                color='black';
            }
        }



*/