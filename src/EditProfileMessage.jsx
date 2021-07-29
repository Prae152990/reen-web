import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'
import './EditProfileMessage.css'

function EditProfileMessage() {
    return (
        <div>
            <div className="bodyContainerMsgEdit">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainerMsgEdit">
                    <div className="sideBodyMsgEdit">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainerMsgEdit">
                        <div className="formAndButtonContainerMsgEdit">
                            <div className="headerFormContainerMsgEdit">
                                <h2 className="headerFormTextMsgEdit">
                                    ข้อมูลผู้ใช้งานเพื่อนัดฝากขยะไปกับ Reen
                                </h2>
                            </div>
                            <div className="formDivMsgEdit">
                                <div className="formleftContainerMsgEdit">
                                    <form action="">
                                    <div className="formFirstlineMsgEdit lineContainerMsgEdit">
                                            <div class="getMessageContainerMsgEdit inlineContainerMsgEdit">
                                                <label for="" className="labelPartMsgEdit">ความสนใจในการรับข้อมูลแบบส่วนตัวกับ REEN : </label>
                                                <div className="choiceContainerMsgEdit">
                                                    <div className="doGetMessageContainerMsgEdit radioContainerMsgEdit inlineContainerMsgEdit">
                                                        <input type="radio" className="radioPartMsgEdit" name="doGetMessageMsgEdit" id="doGetMessageMsgEdit" value="yes" checked/>
                                                        <label for="" className="labelPartMsg" className="radioPartlbMsg">สนใจ</label>
                                                    </div>
                                                    <div className="dontGetMessageContainerMsgEdit radioContainerMsgEdit inlineContainerMsgEdit">
                                                        <input type="radio" className="radioPartMsgEdit" name="dontGetMessageMsgEdit" id="dontGetMessageMsgEdit" value="no"/>
                                                        <label for="" className="labelPartMsgEdit" className="radioPartlbMsgEdit">ไม่สนใจ</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formSecondlineMsg lineContainerMsgEdit">
                                            <div className="topicMessageContainerMsgEdit">
                                                <label for="" className="labelPartMsgEdit">เรื่องที่สนใจจะรับข้อมูลแบบส่วนตัวกับ REEN : </label>
                                                    <div className="topicContainerMsgEdit">
                                                        <div className="firstTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicOneMsgEdit" id="TopicOneMsgEdit" className="checkBoxMsgEdit" />
                                                            <label htmlFor="" className="labelPartMsgEdit">ไตรมาสคลาสสิกคอมเมนท์</label>
                                                        </div>
                                                        <div className="secondTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicTwoMsgEdit" id="TopicTwoMsgEdit" className="checkBoxMsgEdit" checked/>
                                                            <label htmlFor="" className="labelPartMsgEdit">ครัวซองต์โต๊ะจีนคาราโอเกะ</label>
                                                        </div>
                                                        <div className="thirdTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicThreeMsgEdit" id="TopicThreeMsgEdit" className="checkBoxMsgEdit" checked/>
                                                            <label htmlFor="" className="labelPartMsgEdit">ฮัมอินเตอร์แพกเกจ</label>
                                                        </div>
                                                        <div className="forthTopicContainerMsg">
                                                            <input type="checkbox" name="TopicFourMsgEdit" id="TopicFourMsgEdit" className="checkBoxMsgEdit" />
                                                            <label htmlFor="" className="labelPartMsgEdit">แมคเคอเรลพลานุภาพ</label>
                                                        </div>
                                                        <div className="fifthTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicFiveMsgEdit" id="TopicFiveMsgEdit" className="checkBoxMsg"checked/>
                                                            <label htmlFor="" className="labelPartMsgEdit">ฮัมอินเตอร์แพกเกจ</label>
                                                        </div>
                                                        <div className="fifthTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicFiveMsgEdit" id="TopicFiveMsgEdit" className="checkBoxMsgEdit" checked/>
                                                            <label htmlFor="" className="labelPartMsg">วีเจตู้เซฟเซรามิกอึมครึม</label>
                                                        </div>
                                                        <div className="sixthTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicSixMsgEdit" id="TopicSixMsgEdit" className="checkBoxMsgEdit" />
                                                            <label htmlFor="" className="labelPartMsg">โปรเจ็คท์แคมปัสเฟรชพาร์วิทย์</label>
                                                        </div>
                                                        <div className="seventhTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicSevenMsgEdit" id="TopicSevenMsgEdit" className="checkBoxMsgEdit" />
                                                            <label htmlFor="" className="labelPartMsgEdit">โซลาร์ศึกษาศาสตร์ไคลแมกซ์</label>
                                                        </div>
                                                        <div className="eighthTopicContainerMsgEdit">
                                                            <input type="checkbox" name="TopicEightMsgEdit" id="TopicEightMsgEdit" className="checkBoxMsgEdit" />
                                                            <label htmlFor="" className="labelPartMsgEdit">อื่นๆ</label>
                                                            <input type="text" name="addTopicEightMsgEdit" id="addTopicEightMsgEdit" />
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
                                        <button class="buttonFormPf" id="buttonResetPf" type="reset">แก้ไขข้อมูลใหม่</button>
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

export default EditProfileMessage
