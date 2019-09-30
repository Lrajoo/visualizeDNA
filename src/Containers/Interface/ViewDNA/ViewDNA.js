import React, { Component } from 'react';
import Modal from '../../../Components/Modal/Modal';
import Button from '../../../Components/Button/Button';
import DNA from '../../../Components/DNA/DNA';
import classes from './ViewDNA.module.css';
import Input from '../../../Components/Input/Input';

class ViewDNA extends Component {
    state = {
        search: {
            name: 'Search',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Search Sequence Name'
            },
            value: ''
        },
        sorted: false
    }

    inputChangedHandler = (event) => {
        const search = {
            ...this.state.search
        };
        search.value = event.target.value;
        this.setState({search: search});
        this.setState({sorted: false});
    }

    sortSequenceName = () => {
        function mySorter(a, b) {
            let x = a.sequenceName.toLowerCase();
            let y = b.sequenceName.toLowerCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        this.props.DNA.sort(mySorter);
        this.setState({sorted: true});
    }
    
   

    render(){
        let controls = null;
        let listDNA = null;
        if(this.props.DNA.length > 0 && this.state.search.value === '' || this.state.sorted){
            controls =(
                <div>
                    <Button btnType={'Sort'} clicked={this.sortSequenceName}>Sort</Button>
                    <Input
                        invalid={false}
                        touched={false}
                        elementType={this.state.elementType}
                        name={this.state.name}
                        elementConfig={this.state.elementConfig}
                        value={this.state.value}
                        changed={(event) => this.inputChangedHandler(event)}
                    />
                </div>
            );
            listDNA = (
                <div>
                    {this.props.DNA.map(dna => {
                        return <DNA 
                                    name={dna.sequenceName} 
                                    description={dna.sequenceDescription} 
                                    sequence={dna.sequenceDNA}
                                />
                    })}
                </div>
            );
            
        }else if(this.state.search.value !== ''){
            controls =(
                <div>
                    <Button btnType={'Sort'} clicked={this.sortSequenceName}>Sort</Button>
                    <Input
                        invalid={false}
                        touched={false}
                        elementType={this.state.elementType}
                        name={this.state.name}
                        elementConfig={this.state.elementConfig}
                        value={this.state.value}
                        changed={(event) => this.inputChangedHandler(event)}
                    />
                </div>
            );
            let searchArr = [];
            for(let key in this.props.DNA){
                let currName = this.props.DNA[key].sequenceName;
                let check = currName.includes(this.state.search.value);
                if(check){
                   
                    searchArr.push(key);
                }
            }
            listDNA = (
                <div>
                    {searchArr.map(key => {
                        return <DNA 
                                    name={this.props.DNA[key].sequenceName} 
                                    description={this.props.DNA[key].sequenceDescription} 
                                    sequence={this.props.DNA[key].sequenceDNA}
                                />
                    })}
                </div>
            );
            searchArr = [];
            
        }else{
            listDNA = <h2>No DNA samples have been added.</h2>
        }

        return(
            <div className={classes.View}>
                {controls}
                {listDNA}
            </div>
        );
    }
}

export default ViewDNA;