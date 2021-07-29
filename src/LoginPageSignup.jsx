import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import './LoginPageSignup.css'

function LoginPageSignup() {
    return (
        <div>
            <div className="bodyContainer">
                <header>
                    <NavBar/>
                </header>
                <div className="secondRowContainer">
                    <div className="loginContainer">

                        <div className="logoLoginContainer">

                            <div className="logoLogin">
                                <img id="logoImgLogin" src="/images/logo02.png" alt="" />
                            </div>
                            <div id="line"></div>
                            <div className="detailLogoContainer">
                                <p id="detailLogo">
                                    แหล่งแบ่งปันความรู้สำหรับการแยกขยะและบริการ Reen delivery เพื่ออำนวยความสะดวกในการบริจาคขยะของท่านไปยังโครงการต่างๆ. 
                                </p>
                            </div>

                        </div>
                        <div className="inputLoginContainer">

                        <div className="headLogin">
                            <h3 id="loginText">สมัครสมาชิก</h3>
                        </div>
                        <div className="inputContainer">
                            <div className="usernameAndPasswordContainer">
                                <div id="usernameContainer" className="inInputContainer">
                                    {/* <label htmlFor="username" className="lbText" id="usernamelb"> Username : </label> */}
                                    <input className="inputSpace" type="email" name="username" id="username" placeholder="กรอกอีเมลที่ต้องการสมัครของคุณ"/>
                                </div>
                                <div id="passwordContainer" className="inInputContainer">
                                    {/* <label htmlFor="password" className="lbText" id="passwordlb"> Password : </label> */}
                                    <input className="inputSpace" type="password" name="password" id="password" placeholder="กรอกรหัสของคุณ"/>
                                </div>
                                <div id="passwordContainer" className="inInputContainer">
                                    {/* <label htmlFor="password" className="lbText" id="passwordlb"> Password : </label> */}
                                    <input className="inputSpace" type="password" name="password" id="password" placeholder="ยืนยันรหัสของคุณ"/>
                                </div>
                                <div id="usernameContainer" className="inInputContainer">
                                    {/* <label htmlFor="username" className="lbText" id="usernamelb"> Username : </label> */}
                                    <input className="inputSpace" type="tel" name="username" id="username" placeholder="กรอกเบอร์โทรศัพท์ของคุณ"/>
                                </div>
                            </div>
                            <div className="signinContainer">
                                <button className="allButton" id="signupbtn"> สมัครสมาชิก </button>
                            </div>
                            <div className="lineBtwBtnContainer"><div className="lineBtwBtn"></div></div>
                            <div className="forgotPasswordContainer">
                                <a className="allButton" id="forgotPasswordText" href="#">สมัครสมาชิกแล้วใช้หรือไม่</a>
                            </div>
                            {/* <div className="signupContainer">
                                <button className="allButton" id="signupbtn"> สมัครสมาชิก </button>
                            </div> */}
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

export default LoginPageSignup
