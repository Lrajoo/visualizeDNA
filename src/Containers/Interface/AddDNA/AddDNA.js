import React, { Component } from 'react';

import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';

import classes from './AddDNA.module.css';

class AddDNA extends Component {
    state = {
        DNAForm: {
            sequenceName: {
                name: 'sequence name (Ex. AF016541.1) ',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Sequence Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    validChar: false,
                    sequenceExists: false
                },
                valid: false,
                touched: false
            },
            sequenceDescription: {
                name: 'sequence description (Ex. Cloning vector pUC-JK, complete sequence)',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Sequence Description'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    validChar: false,
                    sequenceExists: false
                },
                valid: false,
                touched: false
            },
            sequenceDNA: {
                name: 'sequence (Ex. TCGCGCGTTTCG...) or sequence already exists',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'DNA Sequence'
                },
                value: '',
                validation: {
                    required: true,
                    validChar: true,
                    minLength: 4,
                    sequenceExists: true
                },
                valid: false,
                touched: false,
                exists: false
                
            }
        },
        formIsValid: false
    }
    
    addHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.DNAForm) {
            formData[formElementIdentifier] = this.state.DNAForm[formElementIdentifier].value;
        }
        this.props.DNA.push(formData);
        this.setState({
            DNAForm: {
                sequenceName: {
                    name: 'sequence name (Ex. AF016541.1) ',
                    elementType: 'input',
                    elementConfig: {
                    type: 'text',
                    placeholder: 'Sequence Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 4,
                        validChar: false,
                        sequenceExists: false
                    },
                    valid: false,
                    touched: false
                },
                sequenceDescription: {
                    name: 'sequence description (Ex. Cloning vector pUC-JK, complete sequence)',
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Sequence Description'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 10,
                        validChar: false,
                        sequenceExists: false
                    },
                    valid: false,
                    touched: false
                },
                sequenceDNA: {
                    name: 'sequence (Ex. TCGCGCGTTTCG...) or sequence already exists',
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'DNA Sequence'
                    },
                    value: '',
                    validation: {
                        required: true,
                        validChar: true,
                        minLength: 4,
                        sequenceExists: true
                    },
                    valid: false,
                    touched: false,
                    exists: false
                    
                }
            }
        })
    }

    checkValidity(value, rules,){

        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.validChar){
            isValid = /^[A-Z]+$/.test(value) && isValid;   
        }
        if(rules.sequenceExists){
            let exists = false;
            if(this.props.DNA.length > 0){
                for(let key in this.props.DNA){
                    if(this.props.DNA[key].sequenceDNA === value){
                        exists = true;
                    }
                }
                isValid = !exists && isValid;
            }
        }
        return isValid;
    }
    

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.DNAForm
        };
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        
        this.setState({DNAForm: updatedForm, formIsValid: formIsValid});
    }

    render(){
       

        const formElementsArray = [];
        for (let key in this.state.DNAForm) {
            formElementsArray.push({
                id: key,
                config: this.state.DNAForm[key]
            });
        }
        let buttonStatus = null;
        if(this.state.formIsValid){
            buttonStatus='Success';
        }
        let form = (
            <form onSubmit={this.addHandler}>
                <p className={classes.Label}>Enter DNA name, description and sequence</p>
                {formElementsArray.map(formElement => (
                            <Input 
                                name={formElement.config.name}
                                key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={formElement.config.value}
                                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                                invalid ={!formElement.config.valid}
                                touched={formElement.config.touched}      
                            />
                        )
                    
                )}
                <Button disabled={!this.state.formIsValid} btnType={buttonStatus}>Submit</Button>
            </form>

        );
        return(
            <div className={classes.FormLayout}>
                {form}
            </div>
        );
    }
}

export default AddDNA;