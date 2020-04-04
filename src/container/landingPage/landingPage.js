import React, {Component} from 'react';
import './landingPage.scss'
// import Header from './../../compoments/header/Header'
// import Isi from './../../compoments/isi/Isi'
// import ListMenu from './../../compoments/listMenu/listMenu'
// import Footer from './../../compoments/footer/footer'

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <header className="head">HEADER</header>
                    <nav>NAV</nav>
                    <div className="childNav">CHILD NAV</div>
                    <main>MAIN</main>
                    <footer>FOOTER</footer>
                </div>
            </>
        )
    }
}


export default LandingPage