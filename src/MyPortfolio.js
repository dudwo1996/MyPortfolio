import React from 'react'
import './MyPortfolio.css'
const MyPortfolio = () => {
    const Top=()=>{
        window.scrollTo(0,0)
    }
    const AboutMe=()=>{
        window.scrollTo(0,800)
    }
    const MyCareer=()=>{
        window.scrollTo(0,1800)
    }
    const MySkills=()=>{
        window.scrollTo(0,2700)
    }
    const MyGithub=()=>{
        window.scrollTo(0,3800)
    }
    const MyProjects=()=>{
        window.scrollTo(0,4800)
    }
    return (
        <div >
            <div className="headerWrap">
                <span className="nameLogo" onClick={Top}>CYJ's Portfolio</span>
                <span className="header1" onClick={AboutMe}>About Me</span>
                <span className="header2" onClick={MyCareer}>My Career</span>
                <span className="header3" onClick={MySkills}>My Skills</span>
                <span className="header4" onClick={MyGithub}>My GitHub</span>
                <span className="header5" onClick={MyProjects}>My Projects</span>
            </div>
            <div className="introSelf-Wrap">
                <div className="introSelf">
                    -조영재-
                </div>
                <div className="introSelf2">
                    리액트 개발자 포트폴리오
                </div>
                <div style={{ textAlign: 'center', fontSize: '50pt'}}>ㅡ</div>
                <div className="mydesc">안녕하세요.<div style={{marginTop:'12px'}}>저는 프론트엔드 개발자를 꿈꾸는 조영재입니다.</div></div>
            </div><br/><br/><br/>
            <div className="more" onClick={AboutMe}>더 보기</div>
        </div>
    )
}

export default MyPortfolio;