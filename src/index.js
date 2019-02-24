import React from 'react';
import ReactDom from 'react-dom';
import App from './app';



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


ReactDom.render(
   // element1,
   <App />,
    document.getElementById('root')
);
