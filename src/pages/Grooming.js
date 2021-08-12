import React from 'react'
import Button from './../Components/Button'
import { Link } from 'react-scroll'

const Grooming = () => {
    return (
        <section id="grooming" className="grooming">
            <img className="grooming__img" src="./images/grooming-img.svg" alt="" />
            <div className="grooming__text">
                <h1 className="grooming__heading">
                    Grooming
                </h1>
                <p className="grooming__sub">
                    A groomer may discover health issues before you know they exist, including cysts, bad skin conditions, and ear infections—all of which can hide under fur,
                </p>
                <div className="grooming__cta">
                    <Link to="services" smooth={true}>


                        <Button content={"Submit"} />
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Grooming
