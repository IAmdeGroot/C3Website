import React, { Component } from 'react';
import '../startpage.css';
import '../Typist.css';
import Background from '../img/berg2.jpg';
import ProfileImg from '../img/jag.jpg';
import BackgroundImg from '../img/background.jpg';
import ContainerImg from '../img/blackandwhite.jpg';
import Header from './Header';
import InfoBox from './InfoBox';
import PortfolioBox from './PortfolioBox';
import ContactBox from './ContactBox';
import Ball from './Ball';
import Letter from './Letter';
import SocialMediaButton from './SocialMediaButton';
import MediaQuery from 'react-responsive';
import {Animated} from 'react-animated-css';
import Typist from 'react-typist';


class Startpage extends Component {

  state = {
    showPortfolio: false,
    showAboutMe: false,
    showContact: false,
     
  }

  render() {
    return (
      <div>
        
        <div style={containerDivStyle}>
        <div style={tint}>
        </div>
      
            <Header onAboutClick={this.onAboutMeClicked} onPortfolioClick={this.onPortfolioClicked} onContactClick={this.onContactClicked} />
            <div style={centerContent}>
             {this.renderName()}
            
              </div>
           
        </div>
          <div style={boxContainer}>
        {this.renderAboutMe()}
        {this.renderPortfolio()}
        {this.renderContact()}
          </div>
      </div>

    );
  }

  
  renderName = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches) => {
      const STYLE = matches ?
      jdgDesktop :
      jdgMobile
      const LETTER = matches ?
      letterHolder :
      letterHolderMobile

      return(
        
        <Typist className="typistStyle" startDelay="1000" stdTypingDelay="300">
         
          Creative Connected Cloud.
          
          </Typist>
     
      ); 
  }}
  </MediaQuery>
    );
  }

  onAboutMeClicked = () => {
    console.log('Click!');
    if (this.state.showAboutMe == true) {
      this.setState({showAboutMe: false})
    } if (this.state.showPortfolio == true) {
      this.setState({showPortfolio: false})
    } if (this.state.showAboutMe == false) {
    this.setState({showAboutMe: true});
    } if (this.state.showContact == true) {
    this.setState({showContact: false});
  }
    }

    onPortfolioClicked = () => {
      console.log('PORTFOLIO');
      if (this.state.showPortfolio == true) {
        this.setState({showPortfolio: false})
      } if (this.state.showAboutMe == true) {
        this.setState({showAboutMe: false})
      } if (this.state.showPortfolio == false) {
      this.setState({showPortfolio: true});
      } if (this.state.showContact == true) {
        this.setState({showContact: false});
      }
    }

    onContactClicked = () => {
      console.log('CONTACT');
      if (this.state.showPortfolio == true) {
        this.setState({showPortfolio: false})
      } if (this.state.showAboutMe == true) {
        this.setState({showAboutMe: false})
      } if (this.state.showContact == false) {
      this.setState({showContact: true});
      } if (this.state.showContact == true) {
        this.setState({showContact:false})
      }
    }


  renderAboutMe = () => {
     if (this.state.showAboutMe == false) {
     return null;
    } else {
      return(
     
      <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
         const STYLE = matches? 
         aboutMeDesktop :
         aboutMeMobile
         return(
      
      <Animated style={aboutAnimation} animationIn="slideInDown" animationOut="slideOutUp">
      <div style={STYLE}>
      <InfoBox style={aboutmeBoxStyle} />
    
      </div>
      </Animated>
         );
        }}
      </MediaQuery>
      
    );
  }
}

renderPortfolio = () => {
  if (this.state.showPortfolio == false) {
  return null;
 } else {
   return(
  
   <MediaQuery minDeviceWidth={1025}>
     {(matches) => {
      const STYLE = matches? 
      portfolioDesktop :
      portfolioMobile
      return(

   <Animated style={portAnimation} animationIn="slideInDown">
   <div style={STYLE}>
   <PortfolioBox style={portfolioBoxStyle}/>
   </div>
   </Animated>
      );
     }}
   </MediaQuery>
   
 );
}
}

renderContact = () => {
  if (this.state.showContact == false) {
    return null;
   } else {
     return(
    
     <MediaQuery minDeviceWidth={1025}>
       {(matches) => {
        const STYLE = matches? 
        aboutMeDesktop :
        aboutMeMobile
        return(
     
     <Animated style={aboutAnimation} animationIn="slideInDown" animationOut="slideOutUp">
     <div style={STYLE}>
     <ContactBox style={aboutmeBoxStyle}
      infoText=" Johandg7@gmail.com
                  0768554854"/>
     </div>
     </Animated>
        );
       }}
     </MediaQuery>
     
   );
 }

}

}



const containerDivStyle ={
  
  backgroundColor: 'black',
  opacity: '1',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute'
 
}

const tint = {
  backgroundColor: 'black',
  opacity: '0.8',
  height: '100%',
  width: '100%',
  position: 'absolute'
}

const centerContent = {
  display: 'flex',
  height: '50%',
  width: '90%',
  position: 'absolute',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  
  
}

const jdgDesktop = {
    fontSize: '8vw' ,
    fontFamily: 'Yeseva One',
    alignSelf: 'center',
    color: 'purple',
    
}

const jdgMobile = {
  fontSize: '100px' ,
  fontFamily: 'Yeseva One',
  alignSelf: 'center',
  color: 'white'   
}

const typistStyle = {
    fontSize: '8vw' ,
    fontFamily: 'Yeseva One',
    alignSelf: 'center',
    color: 'purple',

}

const letterHolder ={
  width: '20vw',
  height: '12vw',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
 
}

const letterHolderMobile ={
  width: '250px',
  height: '200px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  alignSelf: 'center',
  //borderColor: 'white',
  //borderStyle: 'solid'
}



const boxContainer ={
  display: 'flex',
  width: '90%',
  height: '80%',
  position: 'absolute',
  marginTop: '15vh',
  justifyContent: 'center',
 

}

const aboutMeDesktop = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',
  borderColor: 'purple',
  borderStyle: 'solid',
}

const aboutMeMobile = {
  width: '100%',
  height: '70vh',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
  //borderStyle: 'solid',
  //borderColor:'purple'
}

const aboutmeBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
}

const aboutAnimation = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const portfolioDesktop = {
  width: '100%',
  display: 'flex',
  position: 'relative',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',
  borderColor: 'purple',
  borderStyle: 'solid',

}

const portfolioMobile = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
}

const portfolioBoxStyle = {
  display: 'flex',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.8)',
  flexDirection: 'column'

}

const portAnimation = {
  display:'flex',
  width:'100%',
  alignContent: 'center',
  justifyContent: 'center'
}





export default Startpage;
