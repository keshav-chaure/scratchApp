import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
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

















ReactDom.render(
   // element1,
   <App />,
    document.getElementById('root')
);
