import React, { Component } from 'react';
import Contact from './Contact'
import Typist from 'react-typist';
import MediaQuery from 'react-responsive';
import johandegroot from '../img/jag.jpg';
import '../ContactBox.css';
import '../TypistContact.css';




class ContactBox extends Component {

    render() {
        return(
            <MediaQuery minDeviceWidth={1025}>
                {(matches) => {

                 const STYLE = matches? 
                 itemHolder :
                 itemHolderMob

                 return( 
                    <div style={STYLE} className="scroller">
                    <div style={centerContacts}>
                    
                    <div style={contactHeadingHolder}>
                    <Typist className="typistStyleContact" startDelay="1500" stdTypingDelay="5"> MANAGEMENT.</Typist>
                    </div>
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <div style={contactHeadingHolder}>
                    <Typist className="typistStyleContact" startDelay="1900" stdTypingDelay="5">
                     DEVELOPMNJTS.
                     <Typist.Backspace count={6} delay={200} />
                     MENT.
                    </Typist>
                    </div>
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    </div>
                    </div>
                 );
                }
            }
            </MediaQuery>
        );
    }

}

const centerContacts = {
    display: 'flex',
    width: '1500px',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',

}

const itemHolder = {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    justifyContent: 'center',
    //flexWrap: 'wrap',
    overflowY: 'auto',

}

const contactHeadingHolder = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

}


const contactHeading = {
    display: 'flex',
    fontSize: '2em',
    color: 'purple',
    fontFamily: 'Audiowide',
}





const itemHolderMob = {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowY: 'auto',
    

}

export default ContactBox;