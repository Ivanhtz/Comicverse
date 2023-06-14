import { Component } from "react";
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    }

    render() {
        const { isNavOpen } = this.state;

        return (
            <header>
                <div className="logo">Logo</div>
                <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
                    <ul>
                        <li>Inicio</li>
                        <li>Acerca</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <button className="nav-toggle" onClick={this.toggleNav}>
                    <span className="toggle-icon"></span>
                </button>
            </header>
        );
    }

}

export default Header;