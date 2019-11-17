import  React, {Component} from 'react';

import logo from '../assets/img/logo.png';
import '../css/App.css'

class Header extends Component {


    render() {
        return (
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
            </header>
        );
    }

}

export default Header;