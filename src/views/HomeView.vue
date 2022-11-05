<template>
    <div class="page-main">
        <HeaderView />

        <div class="home-page">
            <section class="banner">
                <div class="container">
                    <div class="banner-text">
                        <h1>We Solve <br> Problems With <br> <span>Inventive</span> Design</h1>
                        <h5>We’re wskj.design, A design firm whose aim to <br> create inventive design</h5>
                    </div>
                    <div class="banner-footer">
                        <a href="#" class="btn-inspire">
                            <img src="../assets/images/inspired.svg" class="inspired" alt="inspire">
                        </a>
                        <p>Inspired by <strong>Mandala</strong></p>
                    </div>
                </div>
            </section>

            <section class="projects">
                <div class="project-wrapper">
                    <carousel :margin="65" :nav="false" :loop="false" :freeDrag="true" :stagePadding="0" :items="4" :center="true"
                    :responsive="{0:{items:1},575:{items:2},991:{items:3}}">
                        <div class="project-box">
                            <div class="project-img">
                                <div class="line1 line"></div>
                                <div class="line2 line"></div>
                                <div class="line3 line"></div>
                                <div class="line4 line"></div>
                                <div class="image">
                                    <img src="../assets/images/project.jpg" alt="project">
                                </div>
                                <p class="marketing">marketing</p>
                            </div>
                            <div class="project-desc">
                                <h4>Advertise Company</h4>
                                <div class="services">
                                    <p>Website design, Development</p>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-img">
                                <div class="line1 line"></div>
                                <div class="line2 line"></div>
                                <div class="line3 line"></div>
                                <div class="line4 line"></div>
                                <div class="image">
                                    <img src="../assets/images/project.jpg" alt="project">
                                </div>
                                <p class="marketing">marketing</p>
                            </div>
                            <div class="project-desc">
                                <h4>Advertise Company</h4>
                                <div class="services">
                                    <p>Website design, Development</p>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-img">
                                <div class="line1 line"></div>
                                <div class="line2 line"></div>
                                <div class="line3 line"></div>
                                <div class="line4 line"></div>
                                <div class="image">
                                    <img src="../assets/images/project.jpg" alt="project">
                                </div>
                                <p class="marketing">marketing</p>
                            </div>
                            <div class="project-desc">
                                <h4>Advertise Company</h4>
                                <div class="services">
                                    <p>Website design, Development</p>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                        <div class="project-box">
                            <div class="project-img">
                                <div class="line1 line"></div>
                                <div class="line2 line"></div>
                                <div class="line3 line"></div>
                                <div class="line4 line"></div>
                                <div class="image">
                                    <img src="../assets/images/project.jpg" alt="project">
                                </div>
                                <p class="marketing">marketing</p>
                            </div>
                            <div class="project-desc">
                                <h4>Advertise Company</h4>
                                <div class="services">
                                    <p>Website design, Development</p>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </section>

        </div>

        <!-- <FooterView /> -->
    </div>
</template>
  
  
<script>
import carousel from 'vue-owl-carousel2'
import HeaderView from '@/components/HeaderView.vue'
// import FooterView from '@/components/FooterView.vue'

export default ({
    name: "HomePageView",
    components: {
        carousel,
        HeaderView,
        // FooterView
    },
});
</script>