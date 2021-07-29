import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'
import './ProfileMessage.css'

function ProfileMessage() {
    return (
        <div>
            <div className="bodyContainerMsg">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainerMsg">
                    <div className="sideBodyMsg">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainerMsg">
                        <div className="formAndButtonContainerMsg">
                            <div className="headerFormContainerMsg">
                                <h2 className="headerFormTextMsg">
                                    การรับข้อมูลแบบส่วนตัวกับ REEN
                                </h2>
                            </div>
                            <div className="formDivMsg">
                                <div className="formleftContainerMsg">
                                    <form action="">
                                    <div className="formFirstlineMsg lineContainerMsg">
                                            <div class="getMessageContainerMsg inlineContainerMsg">
                                                <label for="" className="labelPartMsg">ความสนใจในการรับข้อมูลแบบส่วนตัวกับ REEN : </label>
                                                <div className="choiceContainerMsg">
                                                    <div className="doGetMessageContainerMsg radioContainerMsg inlineContainerMsg">
                                                        <input type="radio" className="radioPartMsg" name="doGetMessageMsg" id="doGetMessageMsg" value="yes" checked/>
                                                        <label for="" className="labelPartMsg" className="radioPartlbMsg">สนใจ</label>
                                                    </div>
                                                    <div className="dontGetMessageContainerMsg radioContainerMsg inlineContainerMsg">
                                                        <input type="radio" className="radioPartMsg" name="dontGetMessageMsg" id="dontGetMessageMsg" value="no" disabled/>
                                                        <label for="" className="labelPartMsg" className="radioPartlbMsg">ไม่สนใจ</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formSecondlineMsg lineContainerMsg">
                                            <div className="topicMessageContainerMsg">
                                                <label for="" className="labelPartMsg">เรื่องที่สนใจจะรับข้อมูลแบบส่วนตัวกับ REEN : </label>
                                                    <div className="topicContainerMsg">
                                                        <div className="firstTopicContainerMsg">
                                                            <input type="checkbox" name="TopicOneMsg" id="TopicOneMsg" className="checkBoxMsg" disabled/>
                                                            <label htmlFor="" className="labelPartMsg">ไตรมาสคลาสสิกคอมเมนท์</label>
                                                        </div>
                                                        <div className="secondTopicContainerMsg">
                                                            <input type="checkbox" name="TopicTwoMsg" id="TopicTwoMsg" className="checkBoxMsg" checked/>
                                                            <label htmlFor="" className="labelPartMsg">ครัวซองต์โต๊ะจีนคาราโอเกะ</label>
                                                        </div>
                                                        <div className="thirdTopicContainerMsg">
                                                            <input type="checkbox" name="TopicThreeMsg" id="TopicThreeMsg" className="checkBoxMsg" checked/>
                                                            <label htmlFor="" className="labelPartMsg">ฮัมอินเตอร์แพกเกจ</label>
                                                        </div>
                                                        <div className="forthTopicContainerMsg">
                                                            <input type="checkbox" name="TopicFourMsg" id="TopicFourMsg" className="checkBoxMsg" disabled/>
                                                            <label htmlFor="" className="labelPartMsg">แมคเคอเรลพลานุภาพ</label>
                                                        </div>
                                                        <div className="fifthTopicContainerMsg">
                                                            <input type="checkbox" name="TopicFiveMsg" id="TopicFiveMsg" className="checkBoxMsg"checked/>
                                                            <label htmlFor="" className="labelPartMsg">ฮัมอินเตอร์แพกเกจ</label>
                                                        </div>
                                                        <div className="fifthTopicContainerMsg">
                                                            <input type="checkbox" name="TopicFiveMsg" id="TopicFiveMsg" className="checkBoxMsg" checked/>
                                                            <label htmlFor="" className="labelPartMsg">วีเจตู้เซฟเซรามิกอึมครึม</label>
                                                        </div>
                                                        <div className="sixthTopicContainerMsg">
                                                            <input type="checkbox" name="TopicSixMsg" id="TopicSixMsg" className="checkBoxMsg" disabled/>
                                                            <label htmlFor="" className="labelPartMsg">โปรเจ็คท์แคมปัสเฟรชพาร์วิทย์</label>
                                                        </div>
                                                        <div className="seventhTopicContainerMsg">
                                                            <input type="checkbox" name="TopicSevenMsg" id="TopicSevenMsg" className="checkBoxMsg" disabled/>
                                                            <label htmlFor="" className="labelPartMsg">โซลาร์ศึกษาศาสตร์ไคลแมกซ์</label>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                       
                                    </form>
                                </div>
                                <div className="formrightContainerMsg">
                                    <div class="imgDecContainerMsg">
                                        <div class="imgDecDivMsg">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="buttonrowPf">
                                    <div class="buttonFormDivPf" id="buttonBackDivPf">
                                        <button class="buttonFormPf" id="buttonBackPf" type="button">กลับไปหน้า Reen Delivery</button>
                                    </div>
                                    <div class="buttonFormDiv" id="buttonResetDiv">
                                        <button class="buttonFormPf" id="buttonResetPf" type="button">แก้ไขข้อมูลใหม่</button>
                                    </div>
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

export default ProfileMessage
