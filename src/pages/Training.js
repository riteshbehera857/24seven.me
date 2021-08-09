import React from 'react'
import Button from '../Components/Button'

const Training = () => {
    return (
        <div className="training">

            <div className="training__text">
                <h1 className="training__heading">
                    Training
                </h1>
                <p className="training__sub">
                    Training is a great way for pets to release excess energy as well as boost concentration. A training program for adult, senior dogs and cats will keep their body and mind active and stimulated. You can teach an old dog...or cat new tricks!
                    And, no matter your pet’s age, training is an excellent way to create and grow the trust and bond between you and your canine or feline counterpart
                </p>
                <div className="training__cta">
                    <Button content={"About Us"} />
                </div>
            </div>
            <img className="training__img" src="/images/training.svg" alt="" />
        </div>
    )
}

export default Training
