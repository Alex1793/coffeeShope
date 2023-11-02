import './footer.sass';

import logoBlack from '../../img/coffee-beans-black.png'

import navLogoBlack from '../../img/coffee-beans-footer.png';

function Footer () {
    return (
        <footer className='footer'>

            <div className="footer_nav">
                <img src={navLogoBlack} alt="logo" className="footer_nav_logo" />
                <ul className="footer_nav_wrapper">
                    <li className="footer_nav_wrapper_item"><a href="#">Coffee house</a></li>
                    <li className="footer_nav_wrapper_item"><a href="#">Our coffee</a></li>
                    <li className="footer_nav_wrapper_item"><a href="#">For your pleasure</a></li>
                </ul>
            </div>

            <div className="footer_logo">
                <span className="footer_logo_line"></span>
                <img src={logoBlack} alt="logo" className="footer_logo_img" />
                <span className="footer_logo_line"></span>
            </div>
        </footer>
    )
}

export default Footer;