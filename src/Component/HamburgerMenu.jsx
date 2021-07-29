import React from 'react'
import './HamburgerMenu.css'

function HamburgerMenu() {
    return (
        <div>
            <div className="hamburgerContainer">
                <div id="menuBarContainer">
                    <div id="menuBar" onclick="onClickMenu()">
                        <div id="bar1" class="bar"></div>
                        <div id="bar2" class="bar"></div>
                        <div id="bar3" class="bar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu
