import React, { Component } from 'react';
import classes from './Summary.module.css';


class Summary extends Component {

    render() {
        
        let counter = 0;
        const items = []
        for(let k in this.props.seq){
            if(counter % 77 === 0){
                items.push(<br></br>)
            }
            if(this.props.seq[k] === 'A'){
                items.push(<p className={classes.DNAred}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] === 'G'){
                items.push(<p className={classes.DNAorange}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] === 'T'){
                items.push(<p className={classes.DNAblue}>{this.props.seq[k]}</p>)
            }else if(this.props.seq[k] === 'C'){
                items.push(<p className={classes.DNAgreen}>{this.props.seq[k]}</p>)
            }else{
                items.push(<p className={classes.DNA}>{this.props.seq[k]}</p>)
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
