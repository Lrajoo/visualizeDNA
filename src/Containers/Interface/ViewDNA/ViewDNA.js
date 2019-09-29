import React, { Component } from 'react';
import Modal from '../../../Components/Modal/Modal';
import Button from '../../../Components/Button/Button';
import DNA from '../../../Components/DNA/DNA';
import classes from './ViewDNA.module.css';

class ViewDNA extends Component {
    render(){
        let listDNA = null;
        if(this.props.DNA.length > 0){
            listDNA = (
                <div>
                    
                    <Button className={classes.Sort}>Sort</Button>
                    {this.props.DNA.map(dna => {
                        return <DNA 
                                    name={dna.sequenceName} 
                                    description={dna.sequenceDescription} 
                                    sequence={dna.sequenceDNA}
                                />
                    })}
                </div>
            );
        }else{
            listDNA = <h2>No DNA samples have been added.</h2>
        }

        return(
            <div className={classes.View}>
                
                {listDNA}
            </div>
        );
    }
}

export default ViewDNA;