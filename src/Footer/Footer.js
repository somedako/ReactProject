import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <div className='footer__inner-links'>
                <div>
                    <h2>SOLUTIONS</h2>
                    <p><a>Web Solutions Overview</a></p>
                    <p><a>Email Marketing</a></p>
                    <p><a>Website Promotion</a></p>
                    <p><a>eCommerce Website</a></p>
                </div>
                <div>
                    <h2>SERVICES</h2>
                    <p><a>Web Solutions Overview</a></p>
                    <p><a>Email Marketing</a></p>
                    <p><a>Website Promotion</a></p>
                    <p><a>eCommerce Website</a></p>
                </div>

                <div>
                    <h2>SUPPORT</h2>
                    <p><a>Knowledge Base</a></p>
                    <p><a>Support Request</a></p>
                    <p><a>Client Area</a></p>
                </div>

                <div>
                    <h2>LEGAL TERMS</h2>
                    <p><a>Terms of Use</a></p>
                    <p><a>Privacy Policy</a></p>
                </div>
                </div>
               <div className='footer__inner-contacts'>
                    <div>
                        <a className='footer__inner-contacts--tel' href='tel:(044) 383 4389'>(044) 383 4389</a>
                        <a href='mailto:support@cloudhost.com'>support@cloudhost.com</a>
                    </div>
                    <span>Copyright 2022. All rights reserved.</span>
               </div>
            </div>
        </footer>
    );
}

export default Footer