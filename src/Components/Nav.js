import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Button from './Button'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
    const [active, setActive] = useState(false)

    function isClicked() {
        setActive(!active);
        console.log(`active is ${active}`)
    }
    return (
        <nav className="header">
            <div className={active ? "dropdown active" : "dropdown"}>
                <Link className="dropdown__item" to="#">
                    Our Services
                </Link>
                <Link className="dropdown__item" to="#">
                    About Us
                </Link>
                <Link className="dropdown__item" to="/contact">
                    Contact
                </Link>
            </div>
            <div className="header__left">
                <img className="header_logo" src="/images/logo.svg" alt="Brand_logo" />
                <FiMenu onClick={isClicked} className="menu" />
                <Link className="header_dropdown">
                    Our Services <span className="header__dropdown-icon">
                        <AiFillCaretDown />
                    </span>
                </Link>
                <Link className="header__aboutus">
                    About Us
                </Link>
                <Link to="/contact" className="header__contact">
                    Contact
                </Link>
            </div>
            <div className="header__right">
                <Button content={"Sign In"} />
                <Button content={"Write A Review"} />
            </div>
        </nav>
    )
}

export default Nav
