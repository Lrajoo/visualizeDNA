import React,{ Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import AddDNA from './AddDNA/AddDNA';
import ViewDNA from './ViewDNA/ViewDNA';

import classes from './Interface.module.css';


class Interface extends Component {
    state= {
        DNA: []
    }

    render() {
        return(
            <div className={classes.backdrop}>
                <header >
                    <h1 className={classes.heading}>Visualize DNA</h1>
                    
                    <nav>
                        <ul className={classes.mainList}>
                            <li className={classes.view}><NavLink to='/' exact>View Sequence</NavLink></li>
                            <li className={classes.view}><NavLink to='/add-sequence'>Add Sequence</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route 
                    path='/'
                    exact
                    render={(props) => (<ViewDNA DNA={this.state.DNA} {...props} />)} />
                <Route 
                    path='/add-sequence'
                    render={(props) => (<AddDNA DNA={this.state.DNA} {...props} />)} />  
            </div>
        );
    }

}

export default Interface;