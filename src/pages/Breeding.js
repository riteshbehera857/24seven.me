import React from 'react'
import Button from './../Components/Button'

const Breeding = () => {
    return (
        <div className="kennel">
            <img className="kennel__img" src="/images/breeding.svg" alt="" />
            <div className="kennel__text">
                <h1 className="kennel__heading">
                    Breeding
                </h1>
                <p className="kennel__sub">
                    When done correctly and given the time necessary selective breeding can remove inheritable conditions such as hip or elbow dysplasia, allergies, epilepsy and many more as well as improve temperaments and increase specific genetic traits such as intelligence or speed.
                </p>
                <div className="kennel__cta">
                    <Button content={"About Us"} />
                </div>
            </div>
        </div>
    )
}

export default Breeding
