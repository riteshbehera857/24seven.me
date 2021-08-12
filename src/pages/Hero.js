import React from 'react'
import Button from '../Components/Button'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1 className="hero__heading">
                    Healthcare
                </h1>
                <p className="hero__sub">
                    A full exam allows your vet to take a closer look at your pet and gives you the opportunity to ask about any unusual behaviour. Regular health checks give pets and their owners the best chance of preventing, detecting and treating any possible illnesses, both immediately and in the future.
                </p>
                <div className="hero__cta">
                    <Link
                        to="grooming"
                        smooth={true}
                    >
                        <Button content={"Submit"} />
                    </Link>
                </div>
            </div>
            <img className="hero__img" src="./images/healthcare-img.svg" alt="" />
        </section>
    )
}

export default Hero
