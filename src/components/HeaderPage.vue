<template>
    <header id="header">
        <div class="logo">
            <span class="icon fa-gem"></span>
        </div>
        <div class="content">
            <div class="inner">
                <h1>이재은</h1>
                <p>I want to be a good programmer.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/IntroPage">Intro</router-link>
                </li>
                <li>
                    <router-link to="/SkillsPage">Skills</router-link>
                    <!-- <a href="#work">Work</a> -->
                </li>
                <li>
                    <router-link to="/ProjectsPage">Projects</router-link>
                    <!-- <a href="#about">About</a> -->
                </li>
                <li>
                    <router-link to="/CareersPage">Careers</router-link>
                    <!-- <a href="#contact">Contact</a> -->
                </li>
                <li>
                    <router-link to="/BoardPage">Board</router-link>
                </li>
                <!-- <li><a href="#elements">Elements</a></li> -->
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderPage',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped="scoped"> h3 { margin: 40px 0 0; } ul { list-style-type:
none; padding: 0; } li { display: inline-block; margin: 0 10px; } a { color:
#42b983; } </style> -->