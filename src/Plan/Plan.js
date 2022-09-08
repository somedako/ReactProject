import React from 'react';
import '../Plan/Plan.css';

function Plan() {
    return (
        <div className="plan">
            <div className='container'>
            <h2 className=" plan__title main-title">Pick your plan</h2>
            <p className="plan__subtitle">Upgrade, downgrade or cancel anytime.</p>
            <div className="plan__inner">
                <div className="plan-item">
                    <div className="plan-item__title">
                        <h2 className="plan-item__title">PERSONAL</h2>
                        <p>Perfect Pack for Small Business</p>
                    </div>

                    <h3 className="plan-item__price"><span>$25</span>/mo</h3>

                    <ul className="plan-item__desc">
                        <li><span>3 GB</span> of storage</li>
                        <li><span>10</span> repositories</li>
                        <li><span>10</span> parked domains</li>
                        <li><span>25 FTP</span> accounts</li>
                    </ul>

                    <button className="btn btn--black">Order now</button>
                </div>

                <div className="plan-item">
                    <div className="plan-item__title">
                        <h2 className="plan-item__title">PERSONAL</h2>
                        <p>Perfect Pack for Small Business</p>
                    </div>

                    <h3 className="plan-item__price"><span>$25</span>/mo</h3>

                    <ul className="plan-item__desc">
                        <li><span>3 GB</span> of storage</li>
                        <li><span>10</span> repositories</li>
                        <li><span>10</span> parked domains</li>
                        <li><span>25 FTP</span> accounts</li>
                    </ul>

                    <button className="btn btn--black">Order now</button>
                </div>

                <div className="plan-item">
                    <div className="plan-item__title">
                        <h2 className="plan-item__title">PERSONAL</h2>
                        <p>Perfect Pack for Small Business</p>
                    </div>

                    <h3 className="plan-item__price"><span>$25</span>/mo</h3>

                    <ul className="plan-item__desc">
                        <li><span>3 GB</span> of storage</li>
                        <li><span>10</span> repositories</li>
                        <li><span>10</span> parked domains</li>
                        <li><span>25 FTP</span> accounts</li>
                    </ul>

                    <button className="btn btn--black">Order now</button>
                </div>

                <div className="plan-item__footer">
                    If you need help finding a plan that’s right for you,
                    just <span>chat with a live person</span>.
                </div>
            </div>
            </div>
        </div>
    );
}

export default Plan;