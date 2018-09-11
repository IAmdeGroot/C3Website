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

            const imageSTYLE = matches?
            imageHolder :
            imageHolderMobile

            return(
            <div style={theSTYLE}>
                <div style={imageSTYLE}>
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
        <MediaQuery minDeviceWidth={767}>
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
    width: '400px',
    height: '250px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '1%',
    
     
    
}

const containerMobile = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '22vh',
    height: '20vh',
    marginBottom: '12%',
    justifyContent: 'center',
   
    
}

const imageHolder = {
    display: 'flex',
    width: '180px',
    height: '180px',
  
}

const imageHolderMobile = {
    display: 'flex',
    width: '20vh',
    height: '18vh',
    marginBottom: '3%',  
}


const titleHolder = {
    display: 'flex',
    width: '100%',
    height: '12%',
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
    fontSize: '1.3em',
    fontFamily: 'Audiowide',
    //color: '#6decac',
    //color: 'white',
    //color: 'rgb(5, 185, 5)',
    color: '#f489f3',
    alignSelf: 'center'
    
}

const titleMobile = {
    fontSize: '3vw',
    fontFamily: 'Audiowide',
    color: '#f489f3',
    alignSelf: 'center'
}

const nameandemailDesktop = {
    fontSize: '1em',
    fontFamily: 'Raleway',
    color: 'white',
    alignSelf: 'center'
}

const nameandemailMobile = {
    fontSize: '1.7vw',
    fontFamily: 'Audiowide',
    color: 'white',
    alignSelf: 'center'
}
export default Contact;