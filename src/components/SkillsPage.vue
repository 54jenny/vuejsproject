<template>
    <article id="skills">
        <h2 class="major">Skills</h2>
        <h3 className="major">1. 이력서 웹사이트</h3>
        <p>React.js + Node.js + MongoDB(mlab) + Heroku</p>
        <h3></h3>
        <h3 className="major">2. 사이드 프로젝트</h3>
        <p>Android App</p>
        <h3></h3>
        <h3 className="major">3. 패스트캠퍼스 게시판 프로젝트</h3>
        <p>Django + Bootstrap</p>
        <h3></h3>
        <h3 className="major">4. 외부 강의 웹 프로젝트</h3>
        <p>JSP + Servlet + JavaBeans</p>
        <h3></h3>
    </article>
</template>

<script>
    export default {
        name: 'SkillsPage',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped="scoped"> h3 { margin: 40px 0 0; } ul { list-style-type:
none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color:
#42b983; } </style> -->