import React, { Component } from 'react';
import Contact from './Contact'
import MediaQuery from 'react-responsive';
import rose from '../img/rose.jpg';
import johandegroot from '../img/jag.jpg';
import '../ContactBox.css';



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
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                    <Contact title='Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={rose} />
                   
                    </div>
                 );
                }
            }
            </MediaQuery>
        );
    }

}

const itemHolder = {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowY: 'auto',  
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