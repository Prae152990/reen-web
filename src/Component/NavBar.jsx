import React from 'react'
import './NavBar.css'
import HamburgerMenu from './HamburgerMenu'

function NavBar() {
    return (
        <div>
            <div className="NavContainer">
                <div className="leftNavContainer">
                        <HamburgerMenu/>
                    <div className="logoContainer">
                        <img src="/images/logo02.png" alt="" id="logoImg" width="75px" height="28px"/>
                    </div>
                </div>
                <div className="rightNavContainer">
                    <div className="searchContainer">
                        <input type="search" name="searchInput" id="searchInput" />
                    </div>
                    <div className="helpContainer">
                        <p className="helpText"><a>ต้องการความช่วยเหลือ</a></p>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default NavBar
