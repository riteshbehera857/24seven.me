import React from 'react'
import Button from './../Components/Button'

const Grooming = () => {
    return (
        <section className="grooming">
            <img className="grooming__img" src="./images/grooming-img.svg" alt="" />
            <div className="grooming__text">
                <h1 className="grooming__heading">
                    Grooming
                </h1>
                <p className="grooming__sub">
                    A groomer may discover health issues before you know they exist, including cysts, bad skin conditions, and ear infections—all of which can hide under fur,
                </p>
                <div className="grooming__cta">
                    <Button content={"About Us"} />
                </div>
            </div>

        </section>
    )
}

export default Grooming
