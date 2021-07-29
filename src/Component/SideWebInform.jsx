import React from 'react'
import './SideWebInform.css'

function SideWebInform() {
    return (
        <div>
            <div className="sideWeb">
                <div className="navSideContainer">
                    <div className="navSide">
                        <ul className="navList">
                            <li>
                                <a href="#">
                                    <span className="icon" id="addressIcon">
                                        <img src="./images/icons8-home-page-100.png" alt="" className="iconone" height="40px"/>
                                    </span>
                                    <span className="detail">ข้อมูลผู้ใช้งานเพื่อนัดฝากขยะไปกับ Reen</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon" id="dateIcon">
                                        <img src="./images/icons8-pay-date-100.png" alt="" className="iconone" height="40px"/>
                                    </span>
                                    <span className="detail">ข้อมูลวันเวลาเพื่อนัดฝากขยะไปกับ Reen</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="icon" id="moneyIcon">
                                        <img src="./images/icons8-money-50.png" alt="" className="iconone" height="40px"/>
                                    </span>
                                    <span className="detail">ข้อมูลการรับเงินจากขยะไปกับ Reen</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon" id="confirmIcon">
                                        <img src="./images/icons8-delivered-64.png" alt="" className="iconone" height="40px"/>
                                    </span>
                                    <span className="detail">ยืนยันการนัดฝากขยะกับ REEN</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="toggleContainer">
                    {/* <div className="toggle">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SideWebInform
