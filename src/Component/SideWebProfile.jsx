import React from 'react'
import './SideWebProfile.css'

function SideWebProfile() {
    return (
        <div>
            <div className="sideWebPf">
                <div className="navSideContainerPf">
                    <div className="navSidePf">
                        <ul className="navListPf">
                            <li>
                                <a href="#">
                                    <span className="iconPf" id="personalIconPf">
                                        <img src="./images/icons8-people.png" alt="" className="icononePf" height="40px"/>
                                    </span>
                                    <span className="detailPf">ข้อมูลส่วนตัว</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="iconPf" id="messageIconPf">
                                        <img src="./images/icon8-mail.png" alt="" className="icononePf" height="32px"/>
                                    </span>
                                    <span className="detailPf">การรับข้อมูลแบบส่วนตัวกับ REEN</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="iconPf" id="mngmoneyIconPf">
                                        <img src="./images/icons8-money-50.png" alt="" className="icononePf" height="40px"/>
                                    </span>
                                    <span className="detail">จัดการเกี่ยวกับการเงิน</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="iconPf" id="historyIconPf">
                                        <img src="./images/icons8-history.png" alt="" className="icononePf" height="42px"/>
                                    </span>
                                    <span className="detailPf">ประวัติการใช้บริการ Reen Delivery</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="toggleContainerPf">
                    {/* <div className="toggle">

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SideWebProfile
