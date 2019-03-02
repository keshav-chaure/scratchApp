import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Route,Switch ,Link} from 'react-router-dom';
import App from './app';
import ContactUsLayout from './contact-us/components/contact-us-layout';
import {data} from './app-demo';




function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
function clickMe(e){
    var a=this.refs.inputText;
    console.log(e);
    console.log(this);
}
/*
function DisplayGroup(){

    return <div>
        <input type='text' name='inputText' refs='inputText' />
        <input type='button' name='click' onClick={clickMe} value='Click Me' />
    </div>
}
function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <DisplayGroup />
            <Welcome name="Edite" />
        </div>
    );
}
*/

/* arrow funcutin demo */
console.log('arrow function demo!');
// ES 5 version

//console.log('calling multiFunction = ',demo(2,3));
console.dir(data);
// ES 6 version















function Some(){
        return (<h1>Some Page!</h1>);
}


ReactDom.render(
    <BrowserRouter>
        <Switch>

            <Route path="/contact" render={()=>(<ContactUsLayout />)}   />
             <Route path="/some" render={()=>(<Some />)}   />
            <Route path="/" render={()=>(<App />)}  />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
