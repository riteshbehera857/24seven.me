import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.instagram.com/247associates/">
                    <img src="/images/instagram.png" alt="" />
                </a>
                <a href="https://www.facebook.com/247associates/">
                    <img src="/images/facebook.png" alt="" />
                </a>
                <a href="https://twitter.com/247associates">
                    <img className="twitter" src="/images/twitter.png" alt="" />
                </a>
                <a href="https://youtube.com/channel/UCDuiJon_o5P7xc5fI-PyUsw">
                    <img className="youtube" src="/images/youtube.png" alt="" />
                </a>
            </div>
            <p className="coming__soon">Coming Soon</p>
            <div className="social__app">
                <Link>
                    <img src="/images/play.svg" alt="" />
                </Link>
                <Link>
                    <img src="/images/ios.svg" alt="" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
