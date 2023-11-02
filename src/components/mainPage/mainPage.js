import './mainPage.sass'

import BestItem from '../bestItem/bestItem';
import Navbar from '../navbar/navbar';

import logoWhite from '../../img/coffee-beans.png';
import logoBlack from '../../img/coffee-beans-black.png';

function MainPage ({best}) {

    const elems = best.map((item, i) => {
        return (
            <BestItem best={item} key={i}/>
        )
    })
    
    return (
        <div>
            <section className="header">
                <Navbar/>
                <h1 className="header_descr">Everything You Love About Coffee</h1>

                <div className="header_logo">
                    <span className="header_logo_line"></span>
                    <img src={logoWhite} alt="logo" className="header_logo_img" />
                    <span className="header_logo_line"></span>
                </div>

                <div className="header_text">
                    We makes every day full of energy and taste
                    <br />
                    Want to try our beans?
                </div>


                <button className="header_btn">More</button>
            </section>

            <section className="about">
                <h2 className="about_header">About Us</h2>

                <div className="about_logo">
                    <span className="about_logo_line"></span>
                    <img src={logoBlack} alt="logo" className="about_logo_img" />
                    <span className="about_logo_line"></span>
                </div>

                <div className="about_descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
                <br /> <br />
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.</div>
            </section>

            <section className="best">
                <h2 className="best_header">Our best</h2>

                <div className="best_wrapper">
                    {elems}
                </div>
            </section>
        </div>
    )
}

export default MainPage;