import React from 'react'
import Button from './../Components/Button'
import { Link } from 'react-scroll'

const PetTaxi = () => {
    return (
        <div id="pet-texi" className="training">

            <div className="training__text">
                <h1 className="training__heading">
                    Pet Taxi
                </h1>
                <p className="training__sub">
                    This is a great save and fun option for busy owners. We’ll come pick up your pooch, and take him/her to one of our boarders for the day or half day. When it’s time to come home, we’ll drop off your pet safe and sound.
                </p>
                <div className="training__cta">
                    <Link to="contact" smooth={true}>
                        <Button content={"Submit"} />
                    </Link>
                </div>
            </div>
            <img className="training__img" src="/images/pet-texi.svg" alt="" />
        </div>
    )
}

export default PetTaxi
