<template>
    <div class="header" v-bind:class="[isSticky ? stickyClass : '']">
        <div class="container">
            <div class="header-wrap">
                <div class="width50">
                    <div class="logo">
                        <a href="/">
                            <img src="../assets/images/wskj-logo.svg" alt="logo">
                            <p class="logo-text">wskj.design</p>
                        </a>
                    </div>
                </div>
                <div class="width50">
                    <div class="nav-menu">
                        <p class="wskj_text">wskj.design</p>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#project">Projects</a>
                                </li>
                                <li>
                                    <a href="#whatwedo">What we do</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="btn-view">
                            <a href="#" class="btn btn-primary">Let’s talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: "HeaderView",
    data() {
        return {
            isSticky: false,
            stickyClass: 'is_sticky',
            scrollPosition:0
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            this.scrollPosition = window.scrollY
            if(this.scrollPosition>= 100){
                this.isSticky=true
            }else{
                this.isSticky=false
            }
        }
    }

    
})

</script>
