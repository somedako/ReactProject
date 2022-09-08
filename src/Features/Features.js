import React from 'react';
import './Features.css'

function Features () {
    return(
        <div className="features">
        <div className="container">

            <div className="features__inner">
                <h2 className= "features__main-title main-title">Features</h2>
                <div className="features__items">

                    <div className="features__item">
                        <img className="features__icon" src="../img/heart.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">MADE WITH LOVE</h2>
                            <div className="feaures__text">Curabitur imperdiet enim id faucibus sollicitudin. </div>
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src="../img/data.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">DATABASES</h2>
                            <div className="feaures__text">Curabitur imperdiet enim id faucibus sollicitudin.</div>
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src="../img/data.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">VPS SERVER</h2>
                            <div className="feaures__text">Phasellus aliquam arcu quis lectus aliquam, sed dignissim ligula efficitur.</div>
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src="../img/secured.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">FULLY SECURED</h2>
                            <div className="feaures__text">Phasellus aliquam arcu quis lectus aliquam efficitur.</div>
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src="../img/daily.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">DAILY BACKUPS</h2>
                            <div className="feaures__text">Aliquam nisl lectus, rhoncus nec ex vestibulum.</div>
                        </div>
                    </div>

                    <div className="features__item">
                        <img className="features__icon" src="../img/cloud.svg" alt="icon" />
                        <div className="features__desc">
                            <h2 className="features__title">CLOUD HOSTED</h2>
                            <div className="feaures__text">Etiam sagittis tellus at lacus cursus, non molestie nulla.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Features