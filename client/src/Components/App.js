import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header'

import Dashboard from './Dashboard';

import SurveyNew from './Surveys/SurveyNew';


const Landing  = () => <h2>Landing </h2>

class App extends React.Component{

    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
        <div className = "container">
            <BrowserRouter>
                <div> 
                    <Header/>
                    <Route exact={true} path="/" component={Landing}/> 
                    <Route exact path="/surveys" component={Dashboard}/> 
                    <Route  path="/surveys/new" component={SurveyNew}/> 
                </div>
            </BrowserRouter>
        </div>
        ); //return
    } //render
}; //App component

export default connect(null, actions)(App);