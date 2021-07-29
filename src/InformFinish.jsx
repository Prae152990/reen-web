import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebInform from './Component/SideWebInform'
import './InformFinish.css'

function InformFinish() {
    return (
        <div>
            <div className="bodyContainer">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainer">
                    <div className="sideBody">
                        <SideWebInform/>
                    </div>
                    <div className="informBodyContainer">
                        <div className="formAndButtonContainer">
                            <div className="headerFormContainer">
                                <h2 className="headerFormText">
                                    ยืนยันการนัดฝากขยะกับ REEN
                                </h2>
                            </div>
                            <div className="formDiv">
                                <div className="formleftContainerFnsh">
                                    <div className="formFirstlineFnsh lineContainerFnsh">
                                        <div className="firstNameContainerFnsh inlineContainerFnsh">
                                            <p className="mainTextFnsh">การนัดฝากขยะไปกับ Reen เรียบร้อยแล้ว</p>
                                        </div>    
                                    </div>
                                    <div className="formSecondlineFnsh lineContainerFnsh">
                                        <div className="secondNameContainerFnsh inlineContainerFnsh">
                                            <p className="secondMainTextFnsh"> ขอบคุณที่ไว้วางใจในการบริการของเรา </p>
                                        </div>    
                                    </div>
                                    <div className="formThirdlineFnsh lineContainerFnsh">
                                        <div className="thirdNameContainerFnsh inlineContainerFnsh">
                                            <p className="thirdMainTextFnsh"><img src="/images/checkicon03.png" alt="" height="60px"/></p>
                                        </div>    
                                    </div>
                                    <div className="formForthlineFnsh lineContainerFnsh">
                                        <div className="forthNameContainerFnsh inlineContainerFnsh">
                                            <p className="forthMainTextFnsh"> หมายเลขการนัดของคุณ :  XXXXXXXXX </p>
                                        </div>    
                                    </div>
                                </div>
                                <div className="formrightContainer">
                                    <div class="imgDecContainer">
                                        <div class="imgDecDiv">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="buttonrow">
                                    <div class="buttonFormDivFnsh" id="buttonBackDivFnsh">
                                        <button class="buttonFormFnsh" id="buttonBackFnsh" type="button">กลับไปหน้า Reen Delivery</button>
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

export default InformFinish
