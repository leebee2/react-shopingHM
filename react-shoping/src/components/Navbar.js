import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Navbar = ({ authen, setAuthen }) => {
    const nav = useNavigate();
    const menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const handleLogin = () => {
        if (authen)
            setAuthen(false);
        else
            nav('/login');
    }

    const handleLogo = () => {
        nav('/');
    }
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login-text' onClick={() => handleLogin()}>{authen ? '로그아웃' : '로그인'}</div>
                </div>
            </div>
            <div className='nav-logo'>
                <img width={100}
                    src={process.env.PUBLIC_URL + `/img/H&M-Logo.png`}
                    onClick={()=> handleLogo()}
                />
            </div>
            <div className='menu'>
                <ul className='menu-list'>
                    {menulist.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;