import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useMyContext } from '../../context/my-context';
import "./header.css"

const Header = () => {
    // const productsCounter = useSelector(state => state.products.length)
    const { myState } = useMyContext();
    return (
        <header>
            <nav className="nav d-flex justify-content-between bg-secondary">
                <ul>
                    <li><NavLink to="/">صفحه اصلی</NavLink></li>
                    <li><NavLink to="/store">فروشگاه</NavLink></li>
                    <li><NavLink to="/contact">تماس با ما</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to='shopping'>سبد خرید:{myState.products.length}</NavLink></li>
                  
                </ul>
            </nav>
        </header>
    );
}

export default Header;