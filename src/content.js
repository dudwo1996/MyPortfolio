import React from 'react'
import './AboutMe.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import SchoolIcon from '@material-ui/icons/School';
import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DoneIcon from '@material-ui/icons/Done';


const content = () => {
    //맨위로 스크롤 이벤트
    const Top=()=>{
        window.scrollTo(0,0)
    }
    return (
        <div>
            {/* 나의 정보 */}
            <div className="wrap" style={{ height: '640px' }}>
                <div id="AboutMeBox" className="title">About Me</div>
                <div className="desc">
                    <table className="AboutMeTable">
                        <tbody>
                            <tr>
                                <td><AccountCircleIcon fontSize="large" /><br />이름<br /><br />조영재</td>
                                <td><CalendarTodayIcon fontSize="large" /><br />생년월일<br /><br />1996.04.29</td>
                                <td><HomeIcon fontSize="large" /><br />거주지<br /><br />수원시 장안구</td>
                            </tr>
                            <tr>
                                <td><CallIcon fontSize="large" /><br />연락처<br /><br />010-4283-7204</td>
                                <td><MailIcon fontSize="large" /><br />이메일<br /><br />wo_123@naver.com</td>
                                <td><SchoolIcon fontSize="large" /><br />최종학력<br /><br />한서대학교 졸업<br />(컴퓨터공학과)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 나의 발자취 */}
            <div style={{ height: '750px' }}>
                <div id="MyCareerBox" className="title" style={{ marginTop: '300px' }}>My career</div>
                <div className="careerDesc">
                    <table className="careerTable">
                        <tbody>
                            <tr style={{borderBottom: '1px solid black', height: '120px' }}>
                                <td style={{ borderCollapse: 'collapse' }}><span style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><MenuBookIcon fontSize="large"/>비트캠프</span></td>
                                <td style={{ borderCollapse: 'collapse' }}><span><DoneIcon/>개발자 양성과정B 수료</span><div style={{marginTop:'15px', marginBottom:'3px'}}>-Final_Project (쇼핑몰 서비스 구현)</div><div>-Semi_Project (배달 서비스 구현)</div></td>
                                <td style={{ borderCollapse: 'collapse' }}>2021.02~2021.07</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid black', height: '120px' }}>
                                <td><span style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><BusinessIcon fontSize="large" />(주)유씨피아이</span></td>
                                <td><span><DoneIcon/>현장 실습 인턴</span><div style={{marginTop:'15px'}}>-(주)유씨피아이 홈페이지 소스 관리 및 유지보수</div></td>
                                <td>2020.03~2020.12</td>
                            </tr>
                            <tr style={{borderBottom: '1px solid black', height: '120px' }}>
                                <td><span style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><SchoolIcon fontSize="large"/>한서대학교</span></td>
                                <td><span><DoneIcon/>컴퓨터공학과 졸업</span><div style={{marginTop:'15px'}}>-C/C++/Java/JavaScript/Jquery/Html 등의 언어 학습</div></td>
                                <td>2015.03~2021.02</td>
                            </tr>
                            <tr style={{height: '120px' }}>
                                <td><span style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><SchoolIcon fontSize="large"/>동원고등학교</span></td>
                                <td><span><DoneIcon/>인문계 고등학교 이과계열 졸업</span></td>
                                <td>2012.03~2015.02</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* 나의 기술 */}
            <div className="MySkillsWrap">
                <div id="MySkillsBox" className="title">My Skills</div>
                <div className="skillsImg"><img alt="" src="react.png" /></div>
                <div className="skillsImg"><img alt="" src="css.jpg" /></div>
                <div className="skillsImg"><img alt="" src="jquery.png" /></div><br /><br /><br />
                <div className="skillsImg"><img alt="" src="java.PNG" /></div>
                <div className="skillsImg"><img alt="" src="spring.PNG" /></div>
                <div className="skillsImg"><img alt="" src="springboot.PNG" /></div>
                <div className="skillsImg"><img alt="" src="ajax.PNG" /></div><br /><br /><br />
                <div className="skillsImg"><img alt="" src="mysql.PNG" /></div>
                <div className="skillsImg"><img alt="" src="python.PNG" /></div>
                <div className="skillsImg"><img alt="" src="eclipse.PNG" /></div>
                <div className="skillsImg"><img alt="" src="vscode.PNG" /></div>
            </div>
            {/* 나의 github */}
            <div className="MyGitHubWrap">
                <div id="MyGithubBox" className="title">My GitHub</div>
                <div className="ArchivingWrap">
                    <a className="git" href="https://github.com/dudwo1996" target="_blank" rel="noopener noreferrer">
                        <div className="ArchivingImg">
                            <img alt="이미지없음" src="git-hub.png" style={{ marginTop: '4%' }} /><br /><br />
                            <div style={{ textAlign: 'center', fontSize: '1.5em' }}><GitHubIcon />소스코드 저장소</div>
                            <div className="aWrap" style={{ textAlign: 'center' }}><a href="https://github.com/dudwo1996" target="_blank" rel="noopener noreferrer">https://github.com/dudwo1996</a></div><br /><br />
                            <div style={{ width: '81%', margin: 'auto' }}>
                                <div style={{ fontSize: '1.5em', textAlign: 'left' }}>⊙ 비트캠프 학원을 다니며 구현한 프로젝트의 소스 코드</div>
                                <div style={{ fontSize: '1.5em', textAlign: 'left' }}>⊙ 혼자서 코딩 연습을 한 소스 코드</div>
                                <div style={{ fontSize: '1.5em', textAlign: 'left' }}>⊙ 지금 만든 포트폴리오의 소스 코드</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {/* 나의 프로젝트 */}
            <div className="projectsWrap">
                <div id="MyProjectsBox" className="title">My projects</div>

                <div style={{ padding: '3%', borderRadius: '4%', backgroundColor: 'white', float: 'left', width: '80%', marginLeft: '10%', height: 'auto', textAlign: 'center' }}>
                    <h1>COPANG</h1>
                    {/* carousel (넘어가는 이미지) */}
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ padding: '5%', width: '80%', margin: 'auto' }}>

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="캡처.PNG" alt="" style={{ width: '80%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="캡처2.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="캡처3.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="캡처4.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="캡처5.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="캡처6.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                        </div>
                        {/* 이전 이미지로 넘어가기 */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        {/* 다음 이미지로 넘어가기 */}
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div><br /><br />
                    <div className="projectDesc">
                        이 프로젝트는 <strong>현재 많은 사람들이 이용하는 쿠팡을 벤치마킹해서 최근 현업에서도 많이 쓰이는 React와 JPA를 이용하여 구현한 프로젝트</strong> 입니다.
                        비트캠프 학원에서 팀을 이뤄 7명의 팀원과 함께 <span>소통하며 협업</span>하는 방법도 배울 수 있었던 유익한 프로젝트였습니다. 특히 백엔드 개발자와 협업하는
                        과정에 대해서 많이 배울 수 있었던 프로젝트였고 소통방법은 <span>API 명세</span>를 문서로 작성하여 소통하였습니다. 소통하기위한 툴은 <span>Notion, Github, Slack</span> 입니다.
                        <br /><br />제가 맡은 역할은 React를 이용한 프론트엔드 영역이였는데 <span>메인페이지, 상품리스트, 상품 상세정보, 상품 리뷰,문의 등록 및 관리</span>였습니다.<br /> 이 작업을 하며
                        <span>라우팅의 개념과 history,match</span> 등을 이용해 데이터를 주고 받는 개념에 대해 이해할 수 있었습니다. 이 프로젝트에서 겪은 어려움은 시각적으로 보기 좋게 CSS를 다루는
                        거였는데 이에 대한 팀원들과의 공유와 소통으로 많은 학습이 되었습니다.
                    </div>
                    <div className="projectsDesc2">
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon /> 요구 사항</div>
                        <div style={{ fontSize: '1.2em' }}><strong>-상품목록</strong>(상품검색,추천상품,구매옵션,카테고리)<br />
                            <strong>-소비자</strong>(주문,배송확인,상품문의,상품리뷰,결제,장바구니)<br />
                            <strong>-판매자</strong>(상품관리,판매관리,마이샵,고객관리,리뷰,문의관리)
                        </div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />FrontEnd</div>
                        <div style={{ fontSize: '1.2em' }}>-React, JavaScript, ESLint, Bootstrap4, HTML, MaterialUI, CSS</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />BackEnd</div>
                        <div style={{ fontSize: '1.2em' }}>-Spring boot, Spring Security, Jpa, MariaDB, Jenkins</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />Infra Structure</div>
                        <div style={{ fontSize: '1.2em' }}>-aws(EC2,RDS,S3), docker, Apache Tomcat, Ubuntu, redis</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><GitHubIcon />GIthub</div>
                        <div className="aWrap">
                            <a href="https://github.com/dudwo1996/final-copang-front" target="_blank" rel="noopener noreferrer">*https://github.com/dudwo1996/final-copang-front*</a>
                        </div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><FileCopyIcon />COPANG URL</div>
                        <div className="aWrap">
                            <a href="https://copang.alconn.co/" target="_blank" rel="noopener noreferrer">*https://copang.alconn.co/*</a>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '3%', borderRadius: '4%', backgroundColor: 'white', float: 'left', width: '80%', marginTop: '5%', marginLeft: '10%', height: 'auto', textAlign: 'center' }}>
                    <h1>배달의 민족</h1>
                    <div id="myCarousel2" className="carousel slide" data-ride="carousel" style={{ padding: '5%', width: '80%', margin: 'auto' }}>

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel2" data-slide-to="1"></li>
                            <li data-target="#myCarousel2" data-slide-to="2"></li>
                            <li data-target="#myCarousel2" data-slide-to="3"></li>
                            <li data-target="#myCarousel2" data-slide-to="4"></li>
                            <li data-target="#myCarousel2" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="배달.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>

                            <div className="item">
                                <img src="배달2.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>

                            <div className="item">
                                <img src="배달3.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="배달4.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="배달5.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="배달6.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel2" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel2" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div><br /><br />
                    <div className="projectDesc">
                        이 프로젝트는 <strong>요즘 뜨고있는 배달의 민족을 벤치마킹해서 Jquery와 ajax 비동기 통신으로 구현한 Single Page Application과 Client Side Rendering에 학습 초점</strong>을 둔 배달 중개 플랫폼 프로젝트 입니다.
                        이 또한 비트캠프 학원에서 팀을 이뤄 4명의 팀원과 함께 <span>소통하며 협업</span>하는 방법도 배울 수 있었던 저의 첫 프로젝트였습니다.<br />
                        소통방법은 <span>API 명세</span>를 문서로 작성하였고 툴은 <span>Notion, Github</span>를 사용하여 소통하였습니다.
                        <br /><br />이 프로젝트에서 제가 맡은 역할은 Jquery를 이용한 프론트엔드 영역이였는데 <span>로그인, 회원가입, 회원정보 관리 및 탈퇴, Seller&Product List</span> 등 이었습니다. 이 작업을 하며
                        <span>ajax 비동기통신의 get/post/update/delete 의 개념과 Data의 의존성</span>에 대해 더욱 더 이해할 수 있었습니다. 이 프로젝트에서 겪은 어려움은 데이터를 주고 받는 이해도가 없어서 어려웠지만
                        팀원들과의 지식 공유 및 소통으로 많은 학습이 되었던 프로젝트였습니다.
                    </div>
                    <div className="projectsDesc2">
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon /> 요구 사항</div>
                        <div style={{ fontSize: '1.2em' }}><strong>-회원정보</strong>(회원가입,로그인,정보수정,회원탈퇴)<br />
                            <strong>-Client</strong>(주문 시스템,리뷰작성,결제,장바구니)<br />
                            <strong>-Seller</strong>(가게등록,판매관리,리뷰관리)
                        </div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />FrontEnd</div>
                        <div style={{ fontSize: '1.2em' }}>-Jquery, Ajax, Json, HTML, Bootstrap3, CSS</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />BackEnd</div>
                        <div style={{ fontSize: '1.2em' }}>-Spring, MariaDB, Jenkins</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />Infra Structure</div>
                        <div style={{ fontSize: '1.2em' }}>-aws(EC2), docker, Apache Tomcat, Ubuntu</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><GitHubIcon/>GIthub</div>
                        <div className="aWrap">
                            <a href="https://github.com/dudwo1996/deliverypp" target="_blank" rel="noopener noreferrer">*https://github.com/dudwo1996/deliverypp*</a>
                        </div><br />
                    </div>
                </div>
                <div style={{ padding: '3%', borderRadius: '4%', backgroundColor: 'white', float: 'left', width: '80%', marginTop: '5%', marginLeft: '10%', height: '1000px', textAlign: 'center' }}>
                    <h1>CYJ's 포트폴리오</h1>
                    <div id="myCarousel3" className="carousel slide" data-ride="carousel" style={{ padding: '5%', width: '80%', margin: 'auto' }}>

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel3" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel3" data-slide-to="1"></li>
                            <li data-target="#myCarousel3" data-slide-to="2"></li>
                            <li data-target="#myCarousel3" data-slide-to="3"></li>
                            <li data-target="#myCarousel3" data-slide-to="4"></li>
                            <li data-target="#myCarousel3" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="port.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>

                            <div className="item">
                                <img src="port2.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>

                            <div className="item">
                                <img src="port3.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="port4.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="item">
                                <img src="port5.PNG" alt="" style={{ width: '100%', height: '500px', margin: 'auto' }} />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel3" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel3" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div><br /><br />
                    <div className="projectDesc">
                        이 프로젝트는 포트폴리오 용도로 제작한 <span>React 기반</span>의 프로젝트입니다. 프론트엔드 개발에 집중하여 <span>배포경험</span>도 해볼 수 있는 기회였습니다.<br /><br />
                        지금 보고 계신 사이트에 해당하는 프로젝트입니다. 부트스트랩의 <span>carousel</span>을 사용하여 화면의 움직임을 주었고 <span>materialIcon</span>을 사용하여 직관적으로 표현하려 노력했습니다.
                    </div>
                    <div className="projectsDesc2">
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon /> 요구 사항</div>
                        <div style={{ fontSize: '1.2em' }}><strong>-자기소개 및 인적 사항</strong><br />
                            <strong>-나의 발자취</strong><br />
                            <strong>-기술 스택</strong><br />
                            <strong>-프로젝트 경험</strong>
                        </div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><CheckCircleIcon />FrontEnd</div>
                        <div style={{ fontSize: '1.2em' }}>-React, javaScript, HTML, Bootstrap4, materialUI/Icon, CSS</div><br />
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><FileCopyIcon />CYJ's Portfolio URL</div>
                        <div className="aWrap">
                            <a href="https://cyjportfolio.netlify.app" target="_blank" rel="noopener noreferrer">*https://cyjportfolio.netlify.app*</a>
                        </div><br/>
                        <div style={{ fontSize: '1.5em', fontWeight: 'bolder' }}><GitHubIcon />GIthub</div>
                        <div className="aWrap" style={{height:'200px'}}>
                            <a href="https://github.com/dudwo1996/MyPortfolio" target="_blank" rel="noopener noreferrer">*https://github.com/dudwo1996/MyPortfolio*</a>
                        </div>
                    </div>
                </div>
                <div onClick={Top} className="more" style={{border:'1px soild black',marginTop:'15%', borderRadius: '100px', backgroundColor: 'rgb(116, 33, 194)', float: 'left', width: '10%', marginLeft: '45%', textAlign: 'center' }}>
                    처음으로
                </div>
            </div>
        </div>
    )
}

export default content;