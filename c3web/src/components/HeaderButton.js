import React, { Component } from 'react';
import '../headerbutton.css';


class HeaderButton extends Component {
    render() {
        return(
            <div>
            {this.renderButton()}
            </div>
        );
    }

    renderButton = () => {
        if (this.props.activeButtonAbout === false || this.props.activeButtonContact === false) {
            return(
                <button style={headerButtonStyle} className="headerButton" onClick={this.props.onClick}>
                {this.props.name}
                </button>
            );
        } else {
            return(
                <button style={headerButtonStyleAct} className="headerButton" onClick={this.props.onClick}>
                {this.props.name}
                </button>
            );

        }
    }
}

const buttonHolder ={
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    borderColor: 'purple',
    borderStyle: 'solid',   
}

const headerButtonStyle = {
    display: 'flex',
    width: '100%',
    marginRight: '2%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 1,
    outline: 0,
    color: 'white',
    fontSize: '2vh',
    fontFamily: 'Raleway',
   
   
}

const headerButtonStyleAct = {
    display: 'flex',
    width: '100%',
    marginRight: '2%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    outline: 0,
    color: 'purple',
    fontSize: '2vh',
    fontFamily: 'Raleway',
}

export default HeaderButton;