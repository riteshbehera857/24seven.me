import React from 'react'
import Button from '../Components/Button'

const DayCare = () => {
    return (
        <div className="kennel">
            <img className="kennel__img" src="/images/daycare.svg" alt="" />
            <div className="kennel__text">
                <h1 className="kennel__heading">
                    Daycare
                </h1>
                <p className="kennel__sub">
                    This is a great safe and fun option for elderly, special needs, or any other pup that requires extra love and attention while mom and dad are away.
                </p>
                <div className="kennel__cta">
                    <Button content={"About Us"} />
                </div>
            </div>
        </div>
    )
}

export default DayCare
