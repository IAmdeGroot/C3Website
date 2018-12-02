import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../ContactBox.css';



class News extends Component {
  
    render() {
        return(
            
            <MediaQuery minDeviceWidth={1025}>
             {(matches) => {

            const STYLE = matches? 
                textHolder :
                textHolderMob
            return(

            <div style={this.props.style} >
            <div style={STYLE} className="scroller">
            {this.renderText()}
            </div>
             </div>
            );
             }
            }
            </MediaQuery>
        );
    }

renderText = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches)  => {
          const STYLE = matches ?
          textDesktop :
          textMobile
          const p1STYLE = matches ?
          p1Desk :
          p1Mob
          const p2STYLE = matches ?
          p2Desk :
          p2Mob
          const webmadeSTYLE = matches ?
          websitemadeDesk :
          websitemadeMob
          return(
            <p style={STYLE}> 
            <span style={p1STYLE}> Week 47: </span>
            We are now entering the last sprint of this project and we are truly happy with our product and especially the progress of the team so far!
            During the final sprint our main focus product wise is to make the UI better in terms of design and UX. We are really excited for the upcoming presentation
            at Zenterio! <br/><br/>

            // Lead Developer Johan de Groot <br/><br/>
            <span style={p1STYLE}>Week 41: </span>
            I want to start off and thank you all for a great first iteration. We have made huge progress and this will be a perfect stepping stone for
             further progress and success during the other iterations. 
             The first version of our product is now up and running live at <a style={p1STYLE} target="_blank" href="http://frontend.c3.netplus.se"> http://frontend.c3.netplus.se. </a>.
             This week is the start of iteration 2, a period that is going to test us all in the ability of 
             focusing on both the progress of the project and the upcoming exams. 
             The planning of this iteration is crucial for a successful result. 
             But, I believe that after this iteration we will both have an even better product and great exam results to show off. <br/><br/>

             Take some time to enjoy the sunny fall weather! <br/> <br/>
             //Project Manager Ellika Jernå <br/> <br/>

            <span style={p1STYLE}>Week 40: </span>
            Welcome to the last week of sprint 1. The development team has made great progress on the
            product during last week and it will be fun to see the result during the delivery this week.
            All the teams have really brought their a-game to bring together our product. Keep up the good work and high spirit! <br/> <br/>
            //Project Manager Ellika Jernå <br/> <br/>
            <span style={p1STYLE}>Week 39: </span>
            The highlight for week 39 was the succesfull tollgate meeting with Zenterio. The management team did a great job presenting our product idea! <br/> <br/>
            It has been a very productive week and we have made a decision regarding our product name with designs, created a first-draft prototype, 
            finished our backlog with time estimation and set a delivery plan of four sprints. Our plans for next week is to begin the development of sprint 1! <br/> <br/>
            //Project Manager Ellika Jernå <br/> <br/>
           
            <span style={p1STYLE}>Week 38: </span>
            During this week we held a kick-off containing music quiz, pizza eating and socialization. Very inspiring!
            We formed a group contract, decided on technical environment, created a System Requirements Specification, Inspection Plan and a prototype.
            To make the development work more structured we decided to have a lead developer front-end and a lead developer back-end.
            Johan de Groot held a workshop in React.js. <br/>
            The big happening for next week is the tollgate meeting with Zenterio! <br/> <br/>
            //Project Manager Ellika Jernå <br/> <br/>
            
             <span style={p1STYLE}>Week 37: </span>
            The project is now in full motion and we have together with Zenterio decided to continue our work by developing a product that will 
            boost its catalogue by promoting games based on its popularity in a social video platform. 
            This will be done by incorporating Twitch.TV and Steam to create an HTML5 application. <br/> <br/>
            //Project Manager Ellika Jernå 
        
            </p>

          );

    }}
    </MediaQuery>
    );
}

}



const textHolder = {
    //marginRight: 'auto',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '100%',
    overflowY: 'auto',
    
}

const textHolderMob = {
    marginLeft: '3%',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
}


const textDesktop ={
    fontSize: '1.8vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const textMobile ={
    fontSize: '2vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const p1Desk = {
    fontSize: '1.8vw',
    color: '#f489f3',
    fontFamily: 'Architects Daughter'

}

const p1Mob = {
    fontSize: '2vh',
    color: '#f489f3',
    fontFamily: 'Architects Daughter'

}

const p2Desk = {
    fontSize: '1.8vw',
    color: '#6decac',
    fontFamily: 'Audiowide'

}
const p2Mob ={
    fontSize: '2vh',
    color: '#6decac',
    fontFamily: 'Audiowide'

}

const websitemadeDesk ={
    fontSize: '1.2vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const websitemadeMob ={
    fontSize: '1.4vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

  export default News;