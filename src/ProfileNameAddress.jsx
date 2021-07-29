import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'
import './ProfileNameAddress.css'

function ProfileNameAddress() {
    return (
        <div>
            <div className="bodyContainerPf">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainerPf">
                    <div className="sideBodyPf">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainerPf">
                        <div className="formAndButtonContainerPf">
                            <div className="headerFormContainerPf">
                                <h2 className="headerFormTextPf">
                                ข้อมูลส่วนตัว
                                </h2>
                            </div>
                            <div className="formDivPf">
                                <div className="formleftContainerPf">
                                    <form action="">
                                        <div className="formFirstlinePf">
                                            <div className="firstNameContainerPf">
                                                <label for="firstNameContainerPf" className="labelPartPf">ชื่อ:</label>
                                                <input type="text" name="firstNamePf" id="firstNamePf" className="inputPartPf" value="xxxxxxx" disabled/>
                                            </div>
                                            <div className="lastNameContainerPf">
                                                <label for="" className="labelPartPf">นามสกุล:</label>
                                                <input type="text" name="lastNamePf" id="lastNamePf" className="inputPartPf" value="xxxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formSecondlinePf">
                                            <div className="telContainerPf">
                                                <label for="" className="labelPartPf">เบอร์โทรศัพท์:</label>
                                                <input type="tel" name="telPf" id="telPf" className="inputPartPf" value="0x-xxxx-xxxx" disabled/>
                                            </div>
                                            <div className="emailContainerPf">
                                                <label for="" className="labelPartPf">E-mail:</label>
                                                <input type="emailPf" name="emailPf" id="emailPf" className="inputPartPf" value="xxxxxxx@xxxxx.com" disabled/>
                                            </div>
                                        </div>
                                        <div className="formThirdlinePfPf">
                                            <div className="addressContainerPf">
                                                <label for="" className="labelPartPf">สถานที่ที่ผู้ใช้บริการต้องการนัด:</label>
                                                <input type="text" name="addressPf" id="addressPf" className="inputPartPf" value="อาคาร xxxxxx  เลขที่ xx/xxx  ซอย xx  ถนน xxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formForthlinePf">
                                            <div className="subDistrictContainerPf">
                                                <label for="" className="labelPartPf">เขต/ตำบล:</label>
                                                <input type="text" name="subDistrictPf" id="subDistrictPf" className="inputPartPf" value="xxxxxxx" disabled/>
                                            </div>
                                            <div className="districtContainerPf">
                                                <label for="" className="labelPartPf">แขวง/อำเภอ:</label>
                                                <input type="text" name="districtPf" id="districtPf" className="inputPartPf" value="xxxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formFifthlinePf">
                                            <div class="provinceContainerPf">
                                                <label for="" className="labelPartPf">จังหวัด:</label>
                                                <input type="text" name="provincePf" id="provincePf" className="inputPartPf" value="xxxxxxx" disabled/>
                                            </div>
                                            <div class="searchByGoogleMapsContainerPf">
                                            <button class="searchByGoogleMapsBtnPf">
                                                    <p>
                                                        จัดการบัญชีส่วนตัว และการเข้าสู่ระบบ
                                                    </p>   
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="formrightContainerPf">
                                    <div class="imgDecContainerPf">
                                        <div class="imgDecDivPf">

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

export default ProfileNameAddress
