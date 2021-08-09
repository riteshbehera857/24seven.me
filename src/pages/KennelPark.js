import React from 'react'
import Button from '../Components/Button'

const KennelPark = () => {
    return (
        <div className="kennel">
            <img className="kennel__img" src="/images/kennel.jpg" alt="" />
            <div className="kennel__text">
                <h1 className="kennel__heading">
                    Kennel & Park
                </h1>
                <p className="kennel__sub">
                    Dog parks can facilitate socialization between a variety of breeds. They can also be a wonderful outlet for adolescent dogs that have lots of energy and no place to release it.
                </p>
                <div className="kennel__cta">
                    <Button content={"About Us"} />
                </div>
            </div>
        </div>
    )
}

export default KennelPark
