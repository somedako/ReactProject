import React from 'react';
import './Search.css'

const items = [
    {icon: '../img/search-icon-1.svg',
    title: 'FIND DOMAIN',
    desc: 'Etiam efficitur, risus sit amet sodales laoreet, sem mauris interdum lectus, nec luctus est.'},
    {icon: '../img/search-icon-2.svg',
    title: 'CHOOSE A PLAN',
    desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.'
    },
    {icon: '../img/search-icon-3.svg',
    title: 'BUILD YOUR WEBSITE',
    desc: 'Curabitur imperdiet enim id faucibus sollicitudin.'
    }
]

function Search() {

    const searchItem = (
    items.map((value, index) =>
    <div className="search__item">
        <img className="search__icon" key={index + Math.random()} src={value.icon} alt="icon" />
        <div className="search__desc">
            <h2 className="search__title" key={index + Math.random()}>{value.title}</h2>
            <div className="search__text" key={index + Math.random()}>{value.desc}</div>
        </div>
    </div>
    )
    );


    return (
        <div className="search">
        <div className="container">
            <div className="search__inner">
                <h2 className="search__title main-title">Search Domain</h2>

                <div className="search__subtitle">Save big on domain options like .com, .co, .biz, .net, .org and grab new domains like .xyz,
                    .club, .guru, .email, .link, .today, and more!</div>

                <form className="search__place" method="GET">
                    <input className="search__input" type="search" placeholder="http://" name="search" />
                    <input type="submit" className="btn btn--red btn--search" defaultValue="find domain" />
                </form>

                <div className="search__items">
                    {searchItem}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search