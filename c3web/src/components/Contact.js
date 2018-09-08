import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
class Contact extends Component {

    render(){
        return(
            <MediaQuery minDeviceWidth={1025}>
            {(matches) => {
            const theSTYLE = matches? 
            containerStyle :
            containerMobile

            return(
            <div style={theSTYLE}>
                <div style={imageHolder}>
                <img src={this.props.thumbNail} style={imgStyle} alt={this.props.alt} />
                </div>
                    <div style={titleHolder}>
                    {this.renderTitle()}
                    </div>
                        <div style={nameHolder}>
                        {this.renderName()}
                        </div>
                            <div style={emailHolder}>
                            {this.renderEmail()}
                            </div>
            </div>
            );
    }}
    </MediaQuery>
        );
}

renderName = () => {
    return(
        <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
            const STYLE = matches? 
            nameandemailDesktop :
            nameandemailMobile
            return(
                <p style={STYLE}> {this.props.name} </p>
            );
        }}
        </MediaQuery>

    );
}

renderEmail = () => {
    return(
        <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
            const STYLE = matches? 
            nameandemailDesktop :
            nameandemailMobile
            return(
                <p style={STYLE}> {this.props.email} </p>
            );
        }}
        </MediaQuery>

    );
}


renderTitle = () => {
    return(
        <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
            const STYLE = matches? 
            titleDesktop :
            titleMobile
            return(
                <p style={STYLE}> {this.props.title} </p>
            );
        }}
        </MediaQuery>

    );
}

}
const imgStyle = {
    display: 'flex',
    width: '100%'
}
const containerStyle = {
   //display: 'flex',
    //flexWrap: 'wrap',
    //width: '15vw',
    //height: '15em',
    //borderStyle: 'solid',
    //borderColor: 'red',
    //margin: '1%',
    //flexDirection: 'row',

    display: 'flex',
    width: '450px',
    height: '50%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '1%',
     
    
}

const containerMobile = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '22vh',
    height: '20vh',
    marginTop: '3%',
    justifyContent: 'center',
    
}

const imageHolder = {
    display: 'flex',
    width: '60%',
    height: '70%',
  
}


const titleHolder = {
    display: 'flex',
    width: '100%',
    height: '8%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
}

const nameHolder = {
    display: 'flex',
    width: '100%',
    height: '8%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
}

const emailHolder = {
    display: 'flex',
    width: '100%',
    height: '8%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
}

const titleDesktop = {
    fontSize: '3vh',
    fontFamily: 'Raleway',
    color: 'rgb(5, 185, 5)',
    //color: 'purple',
    alignSelf: 'center'
}

const titleMobile = {
    fontSize: '3vw',
    fontFamily: 'Raleway',
    color: 'rgb(5, 185, 5)',
    alignSelf: 'center'
}

const nameandemailDesktop = {
    fontSize: '2.5vh',
    fontFamily: 'Raleway',
    color: 'white',
    alignSelf: 'center'
}

const nameandemailMobile = {
    fontSize: '2vw',
    fontFamily: 'Raleway',
    color: 'white',
    alignSelf: 'center'
}
export default Contact;