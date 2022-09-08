import React from 'react';
import './IntroFooter.css';



function IntroFooter(props) {


    const description = (

        props.items.map((item, index) =>
        <div className="intro-footer__item">
            <img key={index + Math.random()} className="intro-footer__icon" src={item.icon} />
            <div className="intro-footer__desc">
                <h3 className="intro-footer__title" key={index + Math.random()}>{item.title}</h3>
                <p key={index + Math.random()}>{item.desc}</p>
                <a className="intro-footer__link" href="/">read more</a>
            </div>
        </div>
        )
    );


    return(
        <div className="intro-footer">

            {description}

        </div>
    )

}

export default IntroFooter;
