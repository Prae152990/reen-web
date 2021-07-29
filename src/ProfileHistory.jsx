import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'


function ProfileHistory() {
    return (
        <div>
            <div className="bodyContainer">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainer">
                    <div className="sideBody">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainer">
                        <div className="formAndButtonContainer">
                            <div className="headerFormContainer">
                                <h2 className="headerFormText">
                                    ยืนยันการนัดฝากขยะกับ REEN
                                </h2>
                            </div>
                            <div className="formDiv">
                                <div className="formleftContainerCon">
                                    <form action="">
                                        <div className="formFirstlineCon lineContainerCon">
                                            <div className="firstNameContainerCon inlineContainerCon">
                                                <label for="firstNameContainerCon" className="labelPartCon">ชื่อ:</label>
                                                <input type="text" name="firstNameCon" id="firstNameCon" className="inputPartCon" value="xxxxxxx" disabled/>
                                            </div>
                                            <div className="lastNameContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">นามสกุล:</label>
                                                <input type="text" name="lastNameCon" id="lastNameCon" className="inputPartCon" value="xxxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formSecondlineCon lineContainerCon">
                                            <div className="telContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">เบอร์โทรศัพท์:</label>
                                            <input type="tel" name="tel" id="telCon" className="inputPartCon" value="0x-xxxx-xxxx" disabled/>
                                            </div>
                                            <div className="emailContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">E-mail:</label>
                                                <input type="email" name="emailCon" id="emailCon" className="inputPartCon" value="xxxxxxx@xxxxx.com" disabled/>
                                            </div>
                                        </div>
                                        <div className="formThirdlineCon lineContainerCon">
                                            <div className="addressContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">สถานที่ที่ผู้ใช้บริการต้องการนัด:</label>
                                                <input type="text" name="addressCon" id="addressCon" className="inputPartCon" value="อาคาร xxxxxx  เลขที่ xx/xxx  ซอย xx  ถนน xxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formForthlineCon lineContainerCon">
                                            <div className="subDistrictContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon" id="subDistrictlbCon">เขต/ตำบล:</label>
                                                <input type="text" name="subDistrictCon" id="subDistrictCon" className="inputPartCon" value="xxxxxxx" disabled/>
                                            </div>
                                            <div className="districtContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon" id="districtlbCon">แขวง/อำเภอ:</label>
                                                <input type="text" name="districtCon" id="districtCon" className="inputPartCon" value="xxxxxxx" disabled/>
                                            </div>
                                            <div class="provinceContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon" id="provincelbCon">จังหวัด:</label>
                                                <input type="text" name="provinceCon" id="provinceCon" className="inputPartCon" value="xxxxxxx" disabled/>
                                            </div>
                                        </div>
                                        <div className="formFifthlineCon lineContainerCon">
                                            <div class="CampContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">โครงการที่ต้องการบริจาค:</label>
                                                <div className="selectCampContainerCon">
                                                    <select name="selectCampCon" id="selectCampCon" className="selectMainCon" disabled>
                                                        <option value="Camp01Con">โครงการ xxxxx</option>
                                                    </select>
                                                </div> 
                                            </div> 
                                        </div>
                                        <div className="formSixthlineCon lineContainerCon">
                                            <div class="typeTrashContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">ประเภทขยะที่ต้องการบริจาค:</label>
                                                <div className="selectTypeTrashContainerCon">
                                                    <select name="typeTrashCon" id="typeTrashCon" className="selectMainCon" disabled>
                                                        <option value="typeTrash02Con">ขวดน้ำ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formEightthlineCon lineContainerCon">
                                            <div class="dateContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">วันที่ต้องการนัด Reen driver:</label>
                                                <div class="selectDateContainerCon">
                                                    <select name="selectDateCon" id="selectDateCon" className="selectMainCon" disabled>
                                                        <option value="Date02Con">05-07-2021</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formNinethlineCon lineContainerCon">
                                            <div class="timeContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">ช่วงเวลาที่ต้องการนัด Reen driver:</label>
                                                <div class="selectTimeContainerCon">
                                                    <select name="selectTimeCon" id="selectTimeCon" className="selectMainCon" disabled>
                                                        <option value="Time02Con"> 9:00 - 10:00 </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formTenthlineCon lineContainerCon">
                                            <div class="additionalContainerCon inlineContainerCon">
                                                <label for="additional" className="labelPartCon">หมายเหตุ:</label>
                                                <textarea name="additionalCon" id="additionalCon" disabled className="selectMainCon" value="เปปเปอร์มินต์ตอกย้ำ แชมเปี้ยนอาข่า ทีวีเทียมทานเรตติ้งเป่ายิ้งฉุบเมเปิล กรีน เอาท์ตี๋ ."></textarea>
                                            </div>
                                        </div>
                                        <div className="formEleventhlineCon lineContainerCon">
                                            <div class="getMoneyFromTrashContainerCon inlineContainerCon">
                                                <label for="" className="labelPartCon">โครงการมีการจ่ายเงินสำหรับการมอบขยะให้โครงการหรือไม่:</label>
                                                <div className="choiceContainerCon inlineContainer">
                                                    <div className="dogetMoneyFromTrashContainer radioContainer inlineContainer">
                                                        <input type="radio" className="radioPartCon" name="getMoneyFromTrashCon" id="getMoneyFromTrashCon" value="yes" disabled/>
                                                        <label for="" className="labelPartCon">มี</label>
                                                    </div>
                                                    <div className="dontGetMoneyFromTrashContainer radioContainer inlineContainer">
                                                        <input type="radio" className="radioPartCon" name="dontGetMoneyFromTrashCon" id="dontGetMoneyFromTrashCon" value="no" checked/>
                                                        <label for="" className="labelPartCon">ไม่มี</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formTwelvethlineCon lineContainerCon">
                                           
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

export default ProfileHistory
