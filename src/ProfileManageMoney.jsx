import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'
import './ProfileManageMoney.css'

function ProfileManageMoney() {
    return (
        <div>
            <div className="bodyContainerMnyMng">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainerMnyMng">
                    <div className="sideBodyMnyMng">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainerMnyMng">
                        <div className="formAndButtonContainerMnyMng">
                            <div className="headerFormContainerMnyMng">
                                <h2 className="headerFormTextMnyMng">
                                    จัดการเกี่ยวกับการเงิน 
                                </h2>
                            </div>
                            <div className="formDivMnyMng">
                                <div className="formleftContainerMnyMng">
                                    <form action="">
                                        <div className="formFirstlineMnyMng">
                                            <div className="firstNameContainerMnyMng">
                                                <label for="" className="labelPartMnyMng" id="firstNameContainerMnyMng">บันทึกบัญชีสำหรับการรับเงินจาก REEN DELIVERY</label>
                                                    <div className="inFirstLineContainerMnyMng">
                                                        
                                                        <div className="firstLineAccountContainerMnyMng LineAccountContainerMnyMng">
                                                            
                                                            <label for="firstLineAccountMnyMng" className="labelPartMnyMng">บัญชีที่</label>
                                                            <div className="numberAccountContainer"><div className="numberAccount"> 1 </div><p className="signnumberAccount"> : </p></div>
                                                            
                                                            <div className="firstLineFirstPartAccountContainerMnyMng">
                                                                <label for="firstLineBankMnyMng" className="labelPartMnyMng">ธนาคาร</label>
                                                                <input type="text" name="firstNameMnyMng" id="BankMnyMng" className="inputPartMnyMng" value="xxxxxxx" disabled/>
                                                            </div>
                                                            <div className="firstLineSecondtPartAccountContainerMnyMng">
                                                                <label for="firstLineBankMnyMng" className="labelPartMnyMng"> เลขที่บัญชี </label>
                                                                <input type="text" name="firstNameMnyMng" id="AccountMnyMng" className="inputPartMnyMng" value="xxxxxxx" disabled/>
                                                            </div>

                                                        </div>

                                                        <div className="secondLineAccountContainerMnyMng LineAccountContainerMnyMng">
                                                            
                                                            <label for="firstLineAccountMnyMng" className="labelPartMnyMng">บัญชีที่</label>
                                                            <div className="numberAccountContainer"><div className="numberAccount"> 2 </div><p className="signnumberAccount"> : </p></div>
                                                            
                                                            <div className="firstLineFirstPartAccountContainerMnyMng">
                                                                <label for="firstLineBankMnyMng" className="labelPartMnyMng">ธนาคาร</label>
                                                                <input type="text" name="firstNameMnyMng" id="BankMnyMng" className="inputPartMnyMng" value="xxxxxxx" disabled/>
                                                            </div>
                                                            <div className="firstLineSecondtPartAccountContainerMnyMng">
                                                                <label for="firstLineBankMnyMng" className="labelPartMnyMng"> เลขที่บัญชี </label>
                                                                <input type="text" name="firstNameMnyMng" id="AccountMnyMng" className="inputPartMnyMng" value="xxxxxxx" disabled/>
                                                            </div>

                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                                <div className="formrightContainerMnyMng">
                                    <div class="imgDecContainerMnyMng">
                                        <div class="imgDecDivMnyMng">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="buttonrowMnyMng">
                                    <div class="buttonFormDivMnyMng" id="buttonBackDivMnyMng">
                                        <button class="buttonFormMnyMng" id="buttonBackMnyMng" type="button">กลับไปหน้า Reen Delivery</button>
                                    </div>
                                    <div class="buttonFormDivMnyMng" id="buttonResetDivMnyMng">
                                        <button class="buttonFormMnyMng" id="buttonResetMnyMng" type="button">แก้ไขข้อมูลใหม่</button>
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

export default ProfileManageMoney
