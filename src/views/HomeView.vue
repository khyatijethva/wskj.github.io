<template>
    <div class="page-main">
        <HeaderView />

        <div class="home-page">
            <section class="banner" id="banner">
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

            <section class="projects section" id="project">
                <div class="m-scroll">
                    <div class="m-scroll__title">
                        <div>
                            <h2>
                                Projects <span>Projects</span> Projects <span>Projects</span> Projects <span>Projects</span>
                            </h2>
                            <h2>
                                Projects <span>Projects</span> Projects <span>Projects</span> Projects <span>Projects</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="project-wrapper">
                    <carousel :margin="65" :dots="false" :nav="false" :loop="true"  :stagePadding="0" :items="3" :center="true"
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
                                <h5>Advertise Company</h5>
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
                                <h5>Advertise Company</h5>
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
                                <h5>Advertise Company</h5>
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
                                <h5>Advertise Company</h5>
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
                                <h5>Advertise Company</h5>
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
                                <h5>Advertise Company</h5>
                                <div class="services">
                                    <p>Website design, Development</p>
                                    <p>2021</p>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </section>

            <section id="whatwedo" class="wedo-section section">
                <div class="m-scroll">
                    <div class="m-scroll__title">
                        <div>
                            <h2>
                                what we do <span>what we do</span> what we do <span>what we do</span> what we do <span>what we do</span>
                            </h2>
                            <h2>
                                what we do <span>what we do</span> what we do <span>what we do</span> what we do <span>what we do</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="wedo-wrapper">
                    <div class="container padleft">
                        <div class="service-list">
                            <div class="col-6">
                                <div class="service-box">
                                    <h4>01</h4>
                                    <div class="data">
                                        <h3>UX/UI Design</h3>
                                        <p>Website Design / WebApp Design / Mobile Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="service-box">
                                    <h4>01</h4>
                                    <div class="data">
                                        <h3>UX/UI Design</h3>
                                        <p>Website Design / WebApp Design / Mobile Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="service-box">
                                    <h4>01</h4>
                                    <div class="data">
                                        <h3>UX/UI Design</h3>
                                        <p>Website Design / WebApp Design / Mobile Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="service-box">
                                    <h4>01</h4>
                                    <div class="data">
                                        <h3>UX/UI Design</h3>
                                        <p>Website Design / WebApp Design / Mobile Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="aboutus-section section">
                <div class="m-scroll">
                    <div class="m-scroll__title">
                        <div>
                            <h2>
                                About us <span>About us</span> About us <span>About us</span> About us <span>About us</span>
                            </h2>
                            <h2>
                                About us <span>About us</span> About us <span>About us</span> About us <span>About us</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="about-wrapper">
                    <div class="container padleft">
                        <div class="about-text">
                            <h3>WSKJ is a design firm baked by <span>designers</span>. we not only create bast looking designs which pleasing to eyes, we keep end-user experiance in mind and build design which solve the problem.</h3>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <!-- <FooterView /> -->
    </div>
</template>
  
  
<script>
import carousel from 'vue-owl-carousel2'
import HeaderView from '@/components/HeaderView.vue'

export default ({
    name: "HomePageView",
    components: {
        carousel,
        HeaderView,
    },
});
</script>
