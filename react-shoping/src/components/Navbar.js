import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Navbar = ({ authen, setAuthen }) => {
    const menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    let nav = useNavigate();
    let [width, setWidth] = useState(0);
    let [keyword, SetKeyword] = useState('');

    const handleAuthen = () => {
        if (authen)
            setAuthen(false);
        else
            nav('/login');
    }

    const handleLogo = () => {
        SetKeyword('');
        nav('/');
    }

    const handelSerach = (e) => {
        if (e.key == "Enter") {
            nav(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menulist.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                <div onClick={() => handleAuthen()}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>{authen ? '로그아웃' : '로그인'}</span>
                </div>
            </div>
            <div className='nav-logo'>
                <img width={100}
                    src={process.env.PUBLIC_URL + `/img/H&M-Logo.png`}
                    onClick={() => handleLogo()}
                    alt="main_logo"
                />
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    {menulist.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" value={keyword} onChange={(e)=> SetKeyword(e.target.value)} onKeyPress={(e)=> handelSerach(e)} placeholder="제품검색" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;