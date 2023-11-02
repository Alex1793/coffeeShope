import './navbar.sass';

import navLogo from '../../img/coffee-logo.png'

function Navbar () {
    return (
        <div className="navbar">
            <img src={navLogo} alt="logo" className="navbar_logo" />
            <ul className="navbar_wrapper">
                <li className="navbar_wrapper_item"><a href={'SecondPage'}>Coffee house</a></li>
                <li className="navbar_wrapper_item"><a href="#">Our coffee</a></li>
                <li className="navbar_wrapper_item"><a href="#">For your pleasure</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;