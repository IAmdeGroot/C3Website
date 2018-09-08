import React, { Component } from 'react';
import '../headerbutton.css';


class HeaderButton extends Component {
    render() {
        return(
            
            <button className="headerButton"  onClick={this.props.onClick}>
            {this.props.name}
            </button>
            
        );
    }
}

const buttonHolder ={
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
    borderColor: 'purple',
    borderStyle: 'solid',   
}

export default HeaderButton;