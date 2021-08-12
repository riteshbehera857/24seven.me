import React from 'react'
import Button from './../Components/Button'
import { Link } from 'react-scroll'

const Sitting = () => {
    return (
        <div id="sitting" className="training">

            <div className="training__text">
                <h1 className="training__heading">
                    Sitting
                </h1>
                <p className="training__sub">
                    Some dogs would love to get away for a few days, while other dogs would prefer to stay in their comfortable surroundings.  Pet sitting is a great option for pets who do not like change.
                </p>
                <div className="training__cta">
                    <Link to="daycare" smooth={true}>
                        <Button content={"Submit"} />
                    </Link>
                </div>
            </div>
            <img className="training__img" src="/images/sitting.svg" alt="" />
        </div>
    )
}

export default Sitting
