import React from 'react'
import './HomePage.css'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import ThirdRow from './Component/ThirdRow'

function HomePage() {
    return (
        <div>
            <div className="bodyContainerHP">
                <header>
                    <NavBar/>
                </header>
                <div className="secondRowContainerHP">
                    <div class="secondRowHP">
                        <div class="logoAndbuttonContainerHP">
                            <div class="logoContainerHP">
                                <div class="divlogoimgHP">
                                    <img class="logoimgHP" src="/images/delilogo.png" alt=""/>
                                </div>
                            </div>
                            <div class="buttonContainerHP">
                                <div class="buttonDivHP">
                                    <button class="serviceButtonHP"><p className="serviceButtonTextHP">กดเพื่อใช้บริการ</p></button>
                                </div>
                            </div>
                            <div class="tableLinkContainerHP">
                                <div class="tableLinkDivHP">
                                    <p class="tableTexHPt"><a href="#" class="tableLinkHP">ตารางการรับขยะรายวันใน 1 สัปดาห์</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="newsContainerHP">
                            <div class="divnewsimgHP">
                                <img class="newsimgHP" src="/images/project_image02.jpg" alt="" width="425px" height="240px"/>
                            </div>
                        </div>
                        <div class="profileContainerHP">
                            <div class="divProfileAllHP">
                                <div class="divProfileHP">
                                    <div class="leftProfileContainerHP">
                                        <div class="imgProfileContainerHP">
                                            <img class="imgProfileHP" src="/images/imageProfile01.jpg" alt="" height="120px"/>
                                        </div>
                                        <div class="memberNumberContainerHP">
                                            <p class="memberNumberText">หมายเลขสมาชิก :</p>
                                            <p class="memberNumber">XXXXXXXXX</p>
                                        </div>
                                    </div>
                                    <div class="rightProfileContainerHP">
                                        <div class="textProfileHP">
                                            <div class="headUsernameProfileHP">
                                                <h3 class="headUsernameProfileTextHP">
                                                    REEN Member
                                                </h3>
                                            </div>
                                            <div class="mainUsernameProfileHP">
                                                <h3 class="bfUsernameProfileTextHP">
                                                    คุณ 
                                                </h3>
                                                <h3 class="usernameProfileTextHP">
                                                    XXXXX
                                                </h3>
                                                <div class="pointProfileContainerHP">
                                                    <h3 class="bfPointProfileTextHP">
                                                        คะแนน
                                                    </h3>
                                                    <h3 class="PointProfileTextHP">
                                                        XXX
                                                    </h3>
                                                    <h3 class="afPointProfileTextHP">
                                                        แต้ม
                                                    </h3>
                                                </div>
                                            </div>
                                            <div class="LowUsernameContainerHP">
                                                <div class="buttonRowHP">
                                                    <button class="editBtnHP"><p class="editBtnTextHP">แก้ไข Profile</p></button>
                                                    <button class="historyBtnHP"><p class="historyBtnTextHP">ประวัติ</p></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thirdBarHP">
                    <ThirdRow/>
                </div>
                <div className="forthBarHP">
                    <div class="shopBannerContainerHP">
                        <div class="shopBannerHP">
                            <div class="textshopBannerContainerHP">
                                <p class="textshopBannerHP">
                                    แลกของที่ระลึกด้วยคะแนนสะสม
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <NavBottomBar/>
                </footer>
            </div>
        </div>
    )
}

export default HomePage
