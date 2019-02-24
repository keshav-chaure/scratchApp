import React from 'react';


export class Popup extends React.Component{
    constructor(){
        super();

    };
    render(){
        console.log('state ', this);
        console.log('props ', this.props);
       return (
           <div className='popup'>
            <div className='popup_inner'>
                <button className='close' onClick={this.props.closePopup}> close </button>
                <span>
                    <h3> {this.props.text}</h3>
                    <img id="blah"   src={this.props.file} alt="my image" />
                    <label> Upload Photo! </label>
                    <input   type='file' name='file' onChange={(event)=>this.props.readFile(event)} />
                    <br />
                    <label>Name :<input type='text' name='userName' /></label>
                    <br />
                    <label>Address :<input type='text' name='userName' /></label>
                    <br />
                    <label>Age :<input type='text' name='userName' /></label>
                </span>
            </div>
            </div>
       );
    }
}

export class PopupConstainer extends React.Component{
    constructor(){
        super();
        this.state ={
            showPopup: false,
            file:null
        };
    }
    togglePopup(){
        console.log("togglePopup: ",this.state);
        console.log("props ",this.props)
        this.setState({
            showPopup: !this.state.showPopup,
        });
    }


    showFile(input){

        console.log("showFile state: ",this.state);
        console.log("showFile props ",this.props);

        console.log("popup event :", event);
        console.log("popup event :", event.target.files[0]);

        this.setState({
            file:URL.createObjectURL(event.target.files[0])
        });
console.log(this.state.file);
    }
    render(){

        console.log('state ', this);
        console.log('props ', this.props);
        return(

            <div>
                <h1>Hi</h1>
                <button onClick={this.togglePopup.bind(this)}>show popup</button>
                <button onClick={()=>{alert('wooo');}}>try this if popup is open!</button>
                {this.state.showPopup ? <Popup text='This is demo popup user setting' file={this.state.file} closePopup={this.togglePopup.bind(this)} readFile={(file)=>this.showFile(file)} /> : null }
            </div>
        );
    }

};

