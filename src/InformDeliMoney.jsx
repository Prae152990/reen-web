import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebInform from './Component/SideWebInform'
import './InformDeliMoney.css'

function InformDeliMoney() {
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
                                    ข้อมูลการรับเงินจากขยะไปกับ Reen
                                </h2>
                            </div>
                            <div className="formDiv">
                                <div className="formleftContainer">
                                    <form action="">
                                        <div className="formFirstline lineContainer">
                                            <div class="getMoneyFromTrashContainer inlineContainer">
                                                <label for="" className="labelPart">โครงการมีการจ่ายเงินสำหรับการมอบขยะให้โครงการหรือไม่:</label>
                                                <div className="choiceContainer">
                                                    <div className="dogetMoneyFromTrashContainer radioContainer inlineContainer">
                                                        <input type="radio" className="radioPart" name="getMoneyFromTrash" id="getMoneyFromTrash" value="yes"/>
                                                        <label for="" className="labelPart">มี</label>
                                                    </div>
                                                    <div className="dontGetMoneyFromTrashContainer radioContainer inlineContainer">
                                                        <input type="radio" className="radioPart" name="dontGetMoneyFromTrash" id="dontGetMoneyFromTrash" value="no"/>
                                                        <label for="" className="labelPart">ไม่มี</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formSecondline lineContainer">
                                            <div class="typeGetMoneyContainer inlineContainer">
                                                <label for="" className="labelPart">รูปแบบการรับเงิน:</label>
                                                <div class="selectTypeTrashContainer" className="selectContainer">
                                                    <select name="typeGetMoney" id="typeGetMoney" className="selectMain">
                                                        <option value="typeGetMoney01">เลือกรูปแบบการรับเงินที่ต้องการบริจาค</option>
                                                        <option value="typeGetMoney02">รับเงินด้วยการโอนเงินผ่านธนาคาร</option>
                                                        <option value="typeGetMoney03">รับเงินสดผ่าน Driver </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formThirdline lineContainer">
                                            <div class="bankContainer" className="inlineContainer">
                                                <label for="" className="labelPart">ธนาคาร:</label>
                                                <div class="selectBankContainer lineContainer">
                                                    <select name="selectBank" id="selectBank" className="selectMain">
                                                        <option value="bank01">เลือกธนาคารของบัญชีของคุณ</option>
                                                        <option value="bank02">กรุงไทย</option>
                                                        <option value="bank03">กรุงศรี</option>
                                                        <option value="bank04">ไทยพาณิชย์</option>
                                                        <option value="bank05">TMB</option>
                                                        <option value="bank06">กสิกร</option>
                                                        <option value="bank07">อื่นๆ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="formForthline lineContainer">
                                            <div class="accountNumberContainer inlineContainer">
                                                <label for="" className="labelPart">เลขที่บัญชี:</label>
                                                <input type="text" name="accountNumber" id="accountNumber" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formFifthlin lineContainer">
                                            <div class="sameAddressContainer">
                                                <input type="checkbox" name="sameAddress" id="sameAddress" />
                                                <label for="sameAddresslb" className="labelPart">ใช้เลขบัญชีจาก Profile</label>
                                            </div>
                                        </div>
                                        <div className="formSixthlin lineContainer">
                                            <div class="trashSaleContainer inlineContainer">
                                                <label for="" className="labelPart">ขยะที่ฝากขาย:</label>
                                                <input type="text" name="trashSale" id="trashSale" className="inputPart"/>
                                            </div>
                                        </div>
                                        <div className="formSeventhline lineContainer">
                                            <div class="quantityOftrashSaleContainer selectContainer inlineContainer">
                                                <label for="" className="labelPart">จำนวน:</label>
                                                <input type="text" name="quantityOftrashSale" id="quantityOftrashSale" className="inputPart"/>    
                                            </div>
                                            <div class="typeTrashContainer selectContainer inlineContainer">
                                                <label for="" className="labelPart">หน่วย:</label>
                                                <div class="selectTypeTrashContainer">
                                                    <select name="typeTrash" id="typeTrash" className="selectMain">
                                                        <option value="typeTrash01">เลือกประเภทหน่วยของขยะ:</option>
                                                        <option value="typeTrash02">ชิ้น</option>
                                                        <option value="typeTrash03">กิโลกรัม</option>
                                                    </select>
                                                </div>
                                            </div>    
                                        </div>
                                        <div className="formEighthline lineContainer">
                                            <div class="sumContainer" className="inlineContainer">
                                                <label for="" className="labelPart">ราคาสุทธิ:</label>
                                                <input type="text" name="sum" id="sum" className="inputPart"/>
                                                <p className="unit"> บาท </p>
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

export default InformDeliMoney
