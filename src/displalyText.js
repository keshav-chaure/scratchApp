import React from 'react';
import './app.css';

import './popup.css';
import {PopupConstainer ,Popup} from './popup';


function DisplayText(props) {

        return(
            <div className="app col s4 sidebar">
                <ul>
                    <li> { props.info.names.map((name,index)=> <li key={index}>{name}</li>)} </li>
                </ul>
                <div className="container" >
                    <div className="profileDetails">
                        <PopupConstainer />
                        <h4>This is heading</h4>
                        <span>This is some text to display</span>
                        <div>This is long text to dispalay</div>
                    </div>
                </div>
            </div>
        )

}

export default DisplayText;