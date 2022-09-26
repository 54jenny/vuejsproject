<template>
    <article id="intro">
        <h2 className="major">intro</h2>
        <h3 className="major">profile</h3>
        <p>
            <b>이재은</b>
        </p>
        <p>jjeun19@gmail.com</p>
        <p>정발고등학교 졸업 (2010.03 ~ 2013.02)</p>
        <p>숭실대학교 컴퓨터학부 졸업 (2013.03 ~ 2019.02)</p>
        <h3></h3>
    </article>
</template>

<script>
    export default {
        name: 'IntroPage',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped="scoped"> h3 { margin: 40px 0 0; } ul { list-style-type:
none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color:
#42b983; } </style> -->