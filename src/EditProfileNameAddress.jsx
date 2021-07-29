import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import SideWebProfile from './Component/SideWebProfile'
import './EditProfileNameAddress.css'

function EditProfileNameAddress() {
    return (
        <div>
            <div className="bodyContainerPfEdit">
                <header>
                    <NavBar/>
                </header>
                <div className="mainBodyContainerPfEdit">
                    <div className="sideBodyPfEdit">
                        <SideWebProfile/>
                    </div>
                    <div className="informBodyContainerPfEdit">
                        <div className="formAndButtonContainerPfEdit">
                            <div className="headerFormContainerPfEdit">
                                <h2 className="headerFormTextPfEdit">
                                    ข้อมูลผู้ใช้งานเพื่อนัดฝากขยะไปกับ Reen
                                </h2>
                            </div>
                            <div className="formDivPfEdit">
                                <div className="formleftContainerPfEdit">
                                    <form action="">
                                        <div className="formFirstlinePfEdit">
                                            <div className="firstNameContainerPfEdit">
                                                <label for="firstNameContainerPfEdit" className="labelPartPfEdit">ชื่อ:</label>
                                                <input type="text" name="firstNamePfEdit" id="firstNamePfEdit" className="inputPartPfEdit" value="xxxxxxx"/>
                                            </div>
                                            <div className="lastNameContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">นามสกุล:</label>
                                                <input type="text" name="lastNamePfEdit" id="lastNamePfEdit" className="inputPartPfEdit" value="xxxxxxx"/>
                                            </div>
                                        </div>
                                        <div className="formSecondlinePfEdit">
                                            <div className="telContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">เบอร์โทรศัพท์:</label>
                                                <input type="tel" name="telPfEdit" id="telPfEdit" className="inputPartPfEdit" value="0x-xxxx-xxxx"/>
                                            </div>
                                            <div className="emailContainer">
                                                <label for="" className="labelPart">E-mail:</label>
                                                <input type="email" name="emailPfEdit" id="emailPfEdit" className="inputPartPfEdit" value="xxxxxxx@xxxxx.com"/>
                                            </div>
                                        </div>
                                        <div className="formThirdlinePfEdit">
                                            <div className="addressContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">สถานที่ที่ผู้ใช้บริการต้องการนัด:</label>
                                                <input type="text" name="addressPfEdit" id="addressPfEdit" className="inputPartPfEdit" value="อาคาร xxxxxx  เลขที่ xx/xxx  ซอย xx  ถนน xxxxxx"/>
                                            </div>
                                        </div>
                                        <div className="formForthlinePfEdit">
                                            <div className="subDistrictContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">เขต/ตำบล:</label>
                                                <input type="text" name="subDistrictPfEdit" id="subDistrictPfEdit" className="inputPartPfEdit" value="xxxxxxx"/>
                                            </div>
                                            <div className="districtContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">แขวง/อำเภอ:</label>
                                                <input type="text" name="districtPfEdit" id="districtPfEdit" className="inputPartPfEdit" value="xxxxxxx"/>
                                            </div>
                                        </div>
                                        <div className="formFifthlinePfEdit">
                                            <div class="provinceContainerPfEdit">
                                                <label for="" className="labelPartPfEdit">จังหวัด:</label>
                                                <input type="text" name="provincePfEdit" id="provincePfEdit" className="inputPartPfEdit" value="xxxxxxx"/>
                                            </div>
                                            <div class="searchByGoogleMapsContainerPfEdit">
                                            <button class="searchByGoogleMapsBtnPfEdit">
                                                    <p>
                                                        ค้นหาที่อยู่จาก Google Maps
                                                    </p>   
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="formrightContainerPfEdit">
                                    <div class="imgDecContainerPfEdit">
                                        <div class="imgDecDivPfEdit">

                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="buttonrowPfEdit">
                                    <div class="buttonFormDivPfEdit" id="buttonBackDivPfEdit">
                                        <button class="buttonFormPfEdit" id="buttonBackPfEdit" type="button">ยกเลิกการแก้ไขข้อมูล</button>
                                    </div>
                                    <div class="buttonFormDivPfEdit" id="buttonSubmitDivPfEdit">
                                        <button class="buttonFormPfEdit" id="buttonSubmitPfEdit" type="submit">ยืนยันการแก้ไขข้อมูล</button>
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

export default EditProfileNameAddress
