import React, { Component } from 'react';
import MediaQuery from 'react-responsive';



class AboutUs extends Component {
  
    render() {
        return(
            
            <div style={this.props.style}>
            <div style={textHolder}>
            {this.renderText()}
            </div>
             </div>

        );
    }

renderText = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches)  => {
          const STYLE = matches ?
          textDesktop :
          textMobile
          return(
            <p style={STYLE}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend mauris nisl, eget sagittis urna egestas nec. 
          Morbi at laoreet metus. Duis sollicitudin euismod commodo. Phasellus augue felis, tempus eget nibh nec, malesuada maximus quam. 
          Vestibulum at eros suscipit, faucibus sem sit amet, porta diam. Nullam ultrices felis id ipsum maximus egestas. Etiam posuere tincidunt massa. Aliquam scelerisque, est ut ultricies commodo, est ipsum laoreet odio, ac gravida orci nisl eu diam.
           Pellentesque egestas dolor nec ipsum congue volutpat. Mauris dictum ullamcorper mollis. Sed congue augue non placerat consectetur.

        Phasellus ipsum libero, blandit a feugiat id, facilisis non ligula. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus mattis nisi eu mi consectetur, at pretium dui facilisis.
        Etiam sagittis eros libero, consectetur tempus tellus placerat nec. In molestie tincidunt mi, sit amet pharetra ex placerat ut. 
        In id facilisis ex, in tempus sapien. Praesent nec mauris pulvinar, ullamcorper justo sed, rutrum leo. Donec mattis metus in lobortis varius. 
        Vestibulum quis massa nisl. Curabitur eu eros fermentum, pretium risus id, vehicula enim.
            <br/>
            <br/>
        Website is made by: Developer Johan de Groot
        
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
    width: '90%',
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

  export default AboutUs;