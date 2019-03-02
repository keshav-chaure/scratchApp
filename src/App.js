import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './popup.css';
import DisplayText from './displalyText';
import {PopupConstainer ,Popup} from './popup';
import img from '../public/assets/download.png'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {names: new Array(),status:false};
    }
    handleClick(e){

        var value=this.refs.enterName.value;

        this.setState({
            names: this.state.names.concat(value),
            status:true
        });

    }

    render(){
        return(
            <div className="app">
                <Link to="/some" />
                <a href="/some" >click here!</a>
                <input type='text' name='some' ref='enterName'/>
                <input type='button' onClick={(e)=>this.handleClick(e)}  name='Add' value='Add Text' minLength='3'/>
                <DisplayText info={this.state}/>

            </div>
        )
    }
}

export default App;