import React from 'react'
import './NavBottomBar.css'

function NavBottomBar() {
    return (
        <div>
                <div className="footerContainer">

                    <div className="leftfooter">

                        <div class="footerColumn1">
                                <div class="contactFooterColumn1">
                                    <div class="headingcontactFooterColumn1">
                                        <p class="textHeadingcontactFooterColumn1">
                                            ติดต่อ :
                                        </p>
                                    </div>
                                    <div class="detailcontactFooterColumn1">
                                        <p class="textDetailcontactFooterColumn1">
                                            โครงการ REEN  อาคาร xxxx  เลขที่ xx  ซอย xx/x  ถนน xxxxxx  แขวง xxxxx  เขต xxxxx  กทม.  xxxxx
                                        </p>
                                    </div>
                                    <div class="detailcontactFooterColumn1">
                                        <p class="textDetailcontactFooterColumn1">
                                            เบอร์โทรศัพท์ : 0x-xxxx-xxxx
                                        </p>
                                    </div>
                                    <div class="detailcontactFooterColumn1">
                                        <p class="textDetailcontactFooterColumn1">
                                            Email : reenenth@xxxx.com
                                        </p>
                                    </div>     
                                </div>
                            </div>
                            
                        <div class="footerColumn2">
                            <div class="contactFooterColumn2">
                                <div class="headingcontactFooterColumn2">
                                    <p class="textHeadingcontactFooterColumn2">
                                        ติดต่อ :
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn2">
                                    <p class="textDetailcontactFooterColumn2">
                                    Facebook
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn2">
                                    <p class="textDetailcontactFooterColumn2">
                                        Line
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn2">
                                    <p class="textDetailcontactFooterColumn2">
                                        Instagram
                                    </p>
                                </div>     
                            </div>  
                        </div>

                        <div class="footerColumn3">
                            <div class="contactFooterColumn3">
                                <div class="headingcontactFooterColumn3">
                                    <p class="textHeadingcontactFooterColumn3">
                                        ติดตามคนขับ :
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn3">
                                    <p class="textDetailcontactFooterColumn3">
                                        ศูนย์คนขับ
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn3">
                                    <p class="textDetailcontactFooterColumn3">
                                        ข้อมูลอัพเดต
                                    </p>
                                </div>
                                <div class="headingcontactFooterColumn3">
                                    <p class="textHeadingcontactFooterColumn3">
                                        โครงการต่างๆ ที่ร่วมกับ Reen :
                                    </p>
                                </div>
                                <div class="detailcontactFooterColumn3">
                                    <p class="textDetailcontactFooterColumn3">
                                        ข้อมูลอัพเดต
                                    </p>
                                </div>    
                            </div>
                        </div>
                        
                        <div class="footerColumn4">
                        
                        </div>       
                    </div>

                    <div className="rightfooter">

                        <div className="footerColumn5">
                            <div className="logofooterimgContainer">
                                <img class="logofooterimg" src="./images/delilogo.png" alt="" height="60px"/>
                            </div>

                        </div>

                    </div>

                </div>  
        </div>
    )
}

export default NavBottomBar