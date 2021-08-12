import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.facebook.com/247associates/">
                    <FaFacebook fontSize="3rem" />
                </a>
                <a href="https://twitter.com/247associates">
                    <AiFillTwitterCircle fontSize="3rem" />
                </a>
                <a href="https://youtube.com/channel/UCDuiJon_o5P7xc5fI-PyUsw">
                    <AiFillYoutube fontSize="4rem" />
                </a>
            </div>
            <p className="coming__soon">Coming Soon</p>
            <div className="social__app">
                <button>Ios</button>
                <button>Android</button>
            </div>
        </footer>
    )
}

export default Footer
