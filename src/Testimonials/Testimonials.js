import React from 'react';
import './Testimonials.css'

function Testimonials () {
    return (
        <div className="testimonials">
            <h2 className="testimonials__title main-title">Search Domain</h2>
            <p className="testimonials__subtitile" >Couple of words about this section</p>

            <div className="testimonials__inner">
                <img className="testimonials__icon" src="../img/testimonials-icon.svg" alt="icon" />

                <div className="testimonials__text">The best and most reliable VPS account I have experienced from happy-hosting. I have never expected to have such a reliable host. Thanks to them very much for their unparalleled services with excellent administration.
                </div>

                <div className="testimonials__photo">
                    <img src="../img/clip.png" alt="photo" />
                </div>
                <div className="testimonials__author">Oscar Wild,  Pragmatic Solutions</div>
            </div>
    </div>
    );
}

export default Testimonials