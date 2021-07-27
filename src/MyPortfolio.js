import React from 'react'
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div>
            <div className="headerWrap" style={{backgroundColor:'antiquewhite'}}>
                <span className="nameLogo">CYJ's Portfolio</span>
                <span className="header">My Projects</span><span className="header">My GitHub</span><span className="header">My Skills</span><span className="header">My Career</span><span className="header">About Me</span>
            </div>
            <div className="introSelf-Wrap">
                <div className="introSelf">
                    -조영재-
                </div><br/>
                <div className="introSelf">
                    리액트 개발자 포트폴리오
                </div>
                <div style={{ textAlign: 'center', fontSize: '50pt', color: '' }}>-</div>
                <div className="mydesc">안녕하세요. 저는 프론트엔드 개발자를 꿈꾸는 조영재입니다.</div><br/>
                <div className="mydesc2">꼼꼼한 성격과 열정이 저의 장점입니다.</div>
            </div>
        </div>
    )
}

export default MyPortfolio;