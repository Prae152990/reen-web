import React from 'react'
import './ThirdRow.css'

function ThirdRow() {
    return (
        <div>
            <div className="thirdRowContainer">

                <div className="headerCamp">
                    <h3 className="headerCampText"> โครงการที่ร่วมกับ REEN ในการรับบริจากขยะ </h3>
                </div>

                <div className="campBanner">

                    <div className="campContainer" id="camp01Container">
                        <img className="imgCamp" id="imgCamp01" src="/images/imageCamp04.jpg" alt="" height="150px"/>
                        <div className="textCampContainer" id="textCamp01Container"><p className="textCamp01 textCamp">โครงการวน</p></div>
                    </div>

                    <div className="campContainer" id="camp02Container">
                        <img className="imgCamp" id="imgCamp02" src="/images/imageCamp01.jpg" alt="" height="150px"/>
                        <div className="textCampContainer" id="textCamp02Container"><p className="textCamp02 textCamp">โครงการ Precious Plastic Bangkok</p></div>
                    </div>
                    
                    <div className="campContainer" id="camp03Container">
                        <img className="imgCamp" id="imgCamp03" src="/images/imageCamp12.jpg" alt="" height="150px" width="150px"/>
                        <div className="textCampContainer" id="textCamp02Container"><p className="textCamp03 textCamp">โครงการขวดพลาสติกนำไปทำจีวรรีไซเคิล</p></div>
                    </div>

                    <div className="campContainer" id="camp04Container">
                        <img className="imgCamp" id="imgCamp04" src="/images/imageCamp09.jpg" alt="" height="150px"/>
                        <div className="textCampContainer" id="textCamp04Container"><p className="textCamp05 textCamp">โครงการหลังคาสีเขียว</p></div>
                    </div>

                    <div className="campContainer" id="camp05Container">
                        <img className="imgCamp" id="imgCamp05" src="/images/imageCamp10.png" alt="" height="150px"/>
                        <div class="textCampContainer" id="textCamp05Container"><p className="textCamp06 textCamp">โครงการจิตอาสาสมุดเพื่อน้อง (Paper Ranger)</p></div>
                    </div>

                    <div className="campContainer" id="camp06Container">
                        <img className="imgCamp" id="imgCamp06" src="/images/imageCamp11.png" alt="" height="150px"/>
                        <div className="textCampContainer" id="textCamp06Container"><p className="textCamp07 textCamp">โครงการกล่องวิเศษ</p></div>
                    </div>

                    <div className="campContainer" id="camp07Container">
                        <img className="imgCamp" id="imgCamp07" src="./images/imageCamp08.jpg" alt="" height="150px" width="150px"/>
                        <div className="textCampContainer" id="textCamp07Container"><p className="textCamp04 textCamp">โครงการต่ออายุหลอด</p></div>
                    </div>

                    <div className="campContainer" id="camp08Container">
                        <img className="imgCamp" id="imgCamp08" src="/images/imageCamp13.jpg" alt="" height="150px" width="150px"/>
                        <div className="textCampContainer" id="textCamp08Container"><p className="textCamp04 textCamp">โครงการผึ้งน้อยนักสู้</p></div>
                    </div>

                </div>
                </div>
        </div>
    )
}

export default ThirdRow
