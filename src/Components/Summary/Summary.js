import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';


class Summary extends Component{

    render(){

        return(
            <Aux>
                <p>{this.props.seq}</p>
            </Aux>
        );
    }



};

export default Summary;