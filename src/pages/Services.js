import React from 'react'

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="services__title">
                Services We Offered
            </h1>
            <div className="services__categories">
                <div className="services__item">
                    <img src="/images/pet-healthcare.png" alt="" />
                    <p>Healthcare</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-grooming.png" alt="" />
                    <p>Grooming</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-kennel.png" alt="" />
                    <p>Kennel & Park</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-training.png" alt="" />
                    <p>Training</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-sitting.png" alt="" />
                    <p>Sitting</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-breeding.png" alt="" />
                    <p>Breeding</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-daycare.png" alt="" />
                    <p>Daycare</p>
                </div>
                <div className="services__item">
                    <img src="/images/pet-taxi.png" alt="" />
                    <p>Pet Taxi</p>
                </div>
            </div>
        </div>
    )
}

export default Services
