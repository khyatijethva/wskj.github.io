<template>
    <div class="header" v-bind:class="[isSticky ? stickyClass : '']">
        <div class="container">
            <div class="header-wrap">
                <div class="width50">
                    <div class="logo">
                        <a href="/">
                            <img src="../assets/images/wskj-logo.svg" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="width50">
                    <div class="nav-menu">
                        <p class="wskj_text">wskj.design</p>
                        <ul>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">What we do</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                        </ul>

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
            if(this.scrollPosition>= 150){
                this.isSticky=true
            }else{
                this.isSticky=false
            }
        }
    }
})

</script>
