import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import './InformDeliNameAddress.css'
import SideWebInform from './Component/SideWebInform'

function InformDeliNameAddress() {
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
                                    ข้อมูลผู้ใช้งานเพื่อนัดฝากขยะไปกับ Reen
                                </h2>
                            </div>
                            <div className="formDiv">
                                <div className="formleftContainer">
                                    <form action="">
                                        <div className="formFirstline">
                                            <div className="firstNameContainer">
                                                <label for="firstNameContainer" className="labelPart">ชื่อ:</label>
                                                <input type="text" name="firstName" id="firstName" className="inputPart"/>
                                            </div>
                                            <div className="lastNameContainer">
                                                <label for="" className="labelPart">นามสกุล:</label>
                                                <input type="text" name="lastName" id="lastName" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formSecondline">
                                            <div className="telContainer">
                                                <label for="" className="labelPart">เบอร์โทรศัพท์:</label>
                                                <input type="tel" name="tel" id="tel" className="inputPart"/>
                                            </div>
                                            <div className="emailContainer">
                                                <label for="" className="labelPart">E-mail:</label>
                                                <input type="email" name="email" id="email" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formThirdline">
                                            <div className="addressContainer">
                                                <label for="" className="labelPart">สถานที่ที่ผู้ใช้บริการต้องการนัด:</label>
                                                <input type="text" name="address" id="address" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formForthline">
                                            <div className="subDistrictContainer">
                                                <label for="" className="labelPart">เขต/ตำบล:</label>
                                                <input type="text" name="subDistrict" id="subDistrict" className="inputPart"/>
                                            </div>
                                            <div className="districtContainer">
                                                <label for="" className="labelPart">แขวง/อำเภอ:</label>
                                                <input type="text" name="district" id="district" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formFifthline">
                                            <div class="provinceContainer">
                                                <label for="" className="labelPart">จังหวัด:</label>
                                                <input type="text" name="province" id="province" className="inputPart"/>
                                            </div>
                                            <div class="searchByGoogleMapsContainer">
                                            <button class="searchByGoogleMapsBtn">
                                                    <p>
                                                        ค้นหาที่อยู่จาก Google Maps
                                                    </p>   
                                                </button>
                                            </div>
                                        </div>
                                        <div className="formSixthline">
                                            <div class="sameAddressContainer">
                                                <input type="checkbox" name="sameAddress" id="sameAddress" />
                                                <label for="sameAddresslb" className="labelPart">ใช้ข้อมูลที่อยู่เดียวกันกับ Profile</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="formrightContainer">
                                    <div class="imgDecContainer">
                                        <div class="imgDecDiv">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="buttonrow">
                                    <div class="buttonFormDiv" id="buttonBackDiv">
                                        <button class="buttonForm" id="buttonBack" type="button">ยกเลิกการกรอกข้อมูล</button>
                                    </div>
                                    <div class="buttonFormDiv" id="buttonResetDiv">
                                        <button class="buttonForm" id="buttonReset" type="reset">กรอกข้อความใหม่</button>
                                    </div>
                                    <div class="buttonFormDiv" id="buttonSubmitDiv">
                                        <button class="buttonForm" id="buttonSubmit" type="submit">ยืนยันการกรอกข้อมูล</button>
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

export default InformDeliNameAddress
