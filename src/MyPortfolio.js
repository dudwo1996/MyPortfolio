import React from 'react'
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div >
            <div className="headerWrap">
                <span className="nameLogo" onClick={window.scrollTo(0,0)}>CYJ's Portfolio</span>
                <a href="#AboutMeBox"><span className="header">About Me</span></a>
                <a href="#MyCareerBox"><span className="header">My Career</span></a>
                <a href="#MySkillsBox"><span className="header">My Skills</span></a>
                <a href="#MyGithubBox"><span className="header">My GitHub</span></a>
                <a href="#MyProjectsBox"><span className="header">My Projects</span></a>
            </div>
            <div className="introSelf-Wrap">
                <div className="introSelf">
                    -조영재-
                </div>
                <div className="introSelf2">
                    리액트 개발자 포트폴리오
                </div>
                <div style={{ textAlign: 'center', fontSize: '50pt'}}>-</div>
                <div className="mydesc">안녕하세요. 저는 프론트엔드 개발자를 꿈꾸는 조영재입니다.</div><br/>
                <div className="mydesc2">꼼꼼한 성격과 열정이 저의 장점입니다.</div>
            </div>
        </div>
    )
}

export default MyPortfolio;