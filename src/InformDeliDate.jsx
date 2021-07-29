import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebInform from './Component/SideWebInform'
import './InformDeliDate.css'

function InformDeliDate() {
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
                                    ข้อมูลวันเวลาเพื่อนัดฝากขยะไปกับ Reen
                                </h2>
                            </div>
                            <div className="formDiv">
                                <div className="formleftContainer">
                                    <form action="">
                                        <div className="formFirstline">
                                            <div class="CampContainer">
                                                <label for="" className="labelPart">โครงการที่ต้องการบริจาค:</label>
                                                <div className="selectCampContainer">
                                                    <select name="selectCamp" id="selectCamp" className="selectMain">
                                                        <option value="Camp01">เลือกโครงการที่ต้องการบริจาค</option>
                                                        <option value="Camp02">โครงการวน</option>
                                                        <option value="Camp03">โครงการขวดพลาสติกนำไปทำจีวรรีไซเคิล</option>
                                                        <option value="Camp04">โครงการต่ออายุหลอด</option>
                                                        <option value="Camp05">โครงการ Precious Plastic Bangkok</option>
                                                        <option value="Camp06">โครงการอื่นๆ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formSecondline">
                                            <div class="typeTrashContainer">
                                                <label for="" className="labelPart">ประเภทขยะที่ต้องการบริจาค:</label>
                                                <div className="selectTypeTrashContainer">
                                                    <select name="typeTrash" id="typeTrash" className="selectMain">
                                                        <option value="typeTrash01">เลือกโครงการที่ต้องการบริจาค</option>
                                                        <option value="typeTrash02">ขวดน้ำ</option>
                                                        <option value="typeTrash03">หลอดดูด</option>
                                                        <option value="typeTrash04">ถุงพลาสติก</option>
                                                        <option value="typeTrash04">อื่นๆ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formThirdline">
                                            <div class="dateContainer">
                                                <label for="" className="labelPart">วันที่ต้องการนัด Reen driver:</label>
                                                <div class="selectDateContainer">
                                                    <select name="selectDate" id="selectDate" className="selectMain">
                                                        <option value="Date01">เลือกวันที่คุณต้องการนัด</option>
                                                        <option value="Date02">05-07-2021</option>
                                                        <option value="Date03">07-07-202</option>
                                                        <option value="Date04">12-07-202</option>
                                                        <option value="Date04">14-07-202</option>
                                                        <option value="Date04">19-07-202</option>
                                                        <option value="Date04">21-07-202</option>
                                                        <option value="Date04">26-07-202</option>
                                                        <option value="Date04">28-07-202</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formForthline">
                                            <div class="timeContainer">
                                                <label for="" className="labelPart">ช่วงเวลาที่ต้องการนัด Reen driver:</label>
                                                <div class="selectTimeContainer">
                                                    <select name="selectTime" id="selectTime" className="selectMain">
                                                        <option value="Time01"> เลือกช่วงเวลาที่คุณต้องการนัด </option>
                                                        <option value="Time02"> 9:00 - 10:00 </option>
                                                        <option value="Time03"> 10:00 - 11:00 </option>
                                                        <option value="Time04"> 11:00 - 12:00 </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formFifthline">
                                            <div class="additionalContainer">
                                                <label for="additional">หมายเหตุ:</label>
                                                <textarea name="additional" id="additional" cols="61" rows="9"></textarea>
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

export default InformDeliDate
