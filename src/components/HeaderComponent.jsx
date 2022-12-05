import React from 'react';

function HeaderComponent(props) {
      const {homePath,logoTitle,imgSrc,imgAlt, subMenu1,subMenu2,subMenu3,subMenu4} = props;

      // 상태관리 React.useState()
      const [addClass, setAddClass] = React.useState({
         addClass1: false,
         addClass2: false,
         addClass3: false,
         addClass4: false
      });

      // addClass 상태관리 객체의 속성을 비구조화
      const {addClass1,addClass2,addClass3,addClass4} = addClass;

      
      const onMouseEnter1=()=>{
         setAddClass({
            addClass1: true,
            addClass2: false,
            addClass3: false,
            addClass4: false
         })
      }
      const onMouseEnter2=()=>{
         setAddClass({
            addClass1: false,
            addClass2: true,
            addClass3: false,
            addClass4: false
         })
      }
      const onMouseEnter3=()=>{
         setAddClass({
            addClass1: false,
            addClass2: false,
            addClass3: true,
            addClass4: false
         })
      }
      const onMouseEnter4=()=>{
         setAddClass({
            addClass1: false,
            addClass2: false,
            addClass3: false,
            addClass4: true
         })
      }

      // NAV 를 떠나면 이벤트
      const onMouseLeaveAddCalss=()=>{
         setAddClass({
            addClass1: false,
            addClass2: false,
            addClass3: false,
            addClass4: false
         })
      }

   
   return (
         <header id="header">
            <div className="left">              
               <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
            </div>
            <div className="right">
            <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
               <ul>
                  <li>
                  {/* 메뉴1  */}
                  <a 
                  onMouseEnter={onMouseEnter1}                     
                  className={`main-btn  ${ addClass1 && 'on' }`}
                  href="!#"                       
                  title="탑"
                  >탑</a>

                  <div className={`sub sub1  ${addClass1 && 'on' }`}>
                     <ul>
                        {  // JSX 중괄호 안에 자바스크립트 코딩을 한다.
                           subMenu1.map((item, idx)=>{
                              return(
                                 <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                           })
                        }                          
                     </ul>
                  </div>
                  </li>
                  <li>
                  {/* 메뉴2 */}
                  <a 
                  onMouseEnter={onMouseEnter2}
                  className={`main-btn ${addClass2 && 'on'}`} 
                  href="!#" 
                  title="아우터"
                  >아우터</a>
                  <div className={`sub sub2 ${addClass2 && 'on'}`}>
                     <ul>
                        {
                           subMenu2.map((item,idx)=>{
                              return(
                                 <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                           })
                        }
                     </ul>
                  </div>              
                  </li>
                  <li>
                  {/* 메뉴3 */}
                  <a 
                  onMouseEnter={onMouseEnter3}
                  className={`main-btn ${addClass3 && 'on'}`} 
                  href="!#" 
                  title="팬츠"
                  >팬츠</a>
                  <div className={`sub sub3 ${addClass3 && 'on'}`}>
                     <ul>
                        {
                           subMenu3.map((item,idx)=>{
                              return(
                                 <li key={item}><a href="!#" title={item}>{item}</a></li>
                              )
                           })
                        }
                     </ul>
                  </div>                
                  </li>
                  <li>
                  {/* 메뉴4 */}
                  <a 
                  onMouseEnter={onMouseEnter4}
                  className={`main-btn ${addClass4 && 'on'}`} 
                  href="!#" 
                  title="악세서리"
                  >악세서리</a>
                  <div className={`sub sub4 ${addClass4 && 'on'}`}>
                     <ul>

                        {
                           subMenu4.map((item,idx)=>{
                              return(
                                 <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                           })   
                        }
                        
                     </ul>
                  </div>  
                  </li>
               </ul>
            </nav>
            </div>
         </header>
   );
};


// 헤더컴포넌트 안에서 사용 하는 모든 변수
// 기본(Default) 프롭스 설정
HeaderComponent.defaultProps = {
   logoTitle: 'JUST쇼핑몰',
   homePath: './index.html',
   imgSrc: './images/logo.png',
   imgAlt: 'Logo Image',
   subMenu1: ['블라우스','티','셔츠','니트'],
   subMenu2: ['자켓','코트','가디건','머플러'],
   subMenu3: ['청바지','짧은바지','긴바지','레깅스'],
   subMenu4: ['귀고리','목걸이','반지','팔찌']      
}

export default HeaderComponent;