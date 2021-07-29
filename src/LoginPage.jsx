import React from 'react'
import NavBar from './Component/NavBar'
import NavBottomBar from './Component/NavBottomBar'
import './LoginPage.css'

function LoginPage() {
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
                            <h3 id="loginText">LOGIN</h3>
                        </div>
                        <div className="inputContainer">
                            <div className="usernameAndPasswordContainer">
                                <div id="usernameContainer" className="inInputContainer">
                                    <label htmlFor="username" className="lbText" id="usernamelb"> Username : </label>
                                    <input className="inputSpace" type="email" name="username" id="username" placeholder="กรอกอีเมลของคุณ"/>
                                </div>
                                <div id="passwordContainer" className="inInputContainer">
                                    <label htmlFor="password" className="lbText" id="passwordlb"> Password : </label>
                                    <input className="inputSpace" type="password" name="password" id="password" placeholder="กรอกรหัสของคุณ"/>
                                </div>
                            </div>
                            <div className="signinContainer">
                                <input className="allButton" id="signinbtn" type="submit" value="SIGN IN"/>
                            </div>
                            <div className="lineBtwBtnContainer"><div className="lineBtwBtn"></div></div>
                            <div className="forgotPasswordContainer">
                                <a className="allButton" id="forgotPasswordText" href="#">ลืมรหัสผ่านใช่หรือไม่</a>
                            </div>
                                <div className="signupContainer">
                                <button className="allButton" id="signupbtn"> สมัครสมาชิก </button>
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

export default LoginPage

{/* <div class="bodycontainer">
            <div class="logincontainer">
                <div class="logocontainer">
                    <div class="logo">
                        <div class="divlogoimg"><img class="logoimg" src="./images/logo02.png" alt="" width="200px"></div>
                    </div>
                    <div class="line"></div>
                    <div class="detailLogoContainer">
                        <p class="detailLogo">
                            แหล่งแบ่งปันความรู้สำหรับการแยกขยะและบริการ Reen delivery เพื่ออำนวยความสะดวกในการบริจาคขยะของท่านไปยังโครงการต่างๆ. 
                        </p>
                    </div>
                </div>
                <div class="inputLoginContainer">
                    <div class="headLogin">
                        <h3>LOGIN</h3>
                    </div>
                    <div class="inputContainer">
                        <label for="usernamelb">Username :</label>
                        <input class="emailinp" type="email" name="username" id="">
                        <label for="usernamelb">Password :</label>
                        <input class="passwordinp" type="password" name="username" id="">
                        <div class="signinContainer">
                            <input class="signinbtn" type="submit" value="SIGN IN">
                        </div>
                        <div class="forgetPassword"><a class="signuptxt" href="#">ลืมรหัสผ่านใช่หรือไม่</a></div>
                        <div class="line2Container"><div class="line2"></div></div>
                        <div class="signupContainer">
                            <button class="signupbtn">สมัครสมาชิก</button>
                        </div>
                    </div>
                </div>   
            </div> */}