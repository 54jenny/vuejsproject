<template>
    <article id="projects">
        <h2 class="major">projects</h2>
        <h3 className="major">1. react resume web site</h3>
        <span className="image main"><img src="images/pic01.png" alt=""/></span>
        <p>HTML5로 디자인 된 웹 페이지 템플릿을 React.js의 모듈화 구조로 변경하고, 내용을 수정해 이력서 웹사이트를 제작. 이 웹사이트는
            SPA(Single Page Application)으로 되어 있으며, Github의 Pages 기능을 이용하였고, 게시판 메뉴에서 사용하는 서버
            기능은, Node.js 서버를 Heroku에 호스팅하고 mongodb를 DBaaS 형태로 제공하는 mlab을 이용해 구현.</p>
        <h3></h3>
        <h3 className="major">2. Bixby</h3>
        <span className="image main"><img src="images/pic04.jpg" alt=""/></span>
        <p>삼성 음성인식 소프트웨어 생태계인 Bixby Capsule 개발 프로젝트. 한 개 Capsule에 대해 주 개발 및 유지보수를 담당함.
            JS와 Bixby 자체 Language를 가지고 구현. 개발 후 자체 테스트와 주기적으로 진행되는 검증에서 발생한 이슈를 파악하고 해결. 또한
            Concept이 변경되거나 추가될 때, Mobile, Speaker, Watch 등 Target 추가될 때 클라이언트의 요구사항이나 개발
            가이드에 맞게 개발하여 상용화를 주도. 추가적으로, Bixby 일반 개발자들의 기술 질문에 응대하는 Tech Support 프로젝트에도 참여함.</p>
        <h3></h3>
        <h3 className="major">3. Android Application</h3>
        <span className="image main"><img src="images/pic02.jpg" alt=""/></span>
        <p>사용자가 인터페이스 화면의 글씨 교본 위에 글씨를 따라 쓰며 글씨를 교정할 수 있는 앱. 연습뿐만 아니라 시험모드를 통해 제공 되는 글씨를
            제한시간 안에 얼마나 정확하게 쓸 수 있는지를 테스트할 수 있고, 또 캘리그라피를 따라 쓰는 메뉴도 추가하여 캘리그라피도 연습할 수 있음.
            2015년 숭실대학교 소프트웨어 공모전 동상 수상.</p>
        <h3></h3>
        <h3>
            <a href="https://youtu.be/N26Gxs2ixZc" target="_blank">시연 동영상</a>
        </h3>
        <h3></h3>
        <h3 className="major">Side Project:</h3>
        <h3 className="major">크립토좀비를 활용한 NFT DAPP 스터디 및 개발</h3>
        <span className="image main"><img src="images/pic06.jpg" alt=""/></span>
        <p>크립토좀비를 통해 이더리움 등의 블록체인 플랫폼에서 스마트 계약 작성과 구현에 사용되는 프로그래밍 언어인 solidity와 DAPP에 대한
            기본 개념을 이해하고 학습함. 또한 NFT의 구조도 함께 학습하고 개발함.</p>
        <h3></h3>
    </article>
</template>

<script>
    export default {
        name: 'ProjectsPage',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped="scoped"> h3 { margin: 40px 0 0; } ul { list-style-type:
none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color:
#42b983; } </style> -->