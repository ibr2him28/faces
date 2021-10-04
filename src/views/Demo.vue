<template>
  <div>
    <!-- Header -->
    <header class="bg-white header root-demo">
      <div>
        <router-link to="/"
          ><img src="../assets/img/logo/logo_try02.png" alt="Rainfo"
        /></router-link>
      </div>
      <div class="text-right purchase-button">
        <a
          target="_blank"
          href="https://themeforest.net/checkout/from_item/31671489?license=regular"
          >PURCHASE NOW</a
        >
      </div>
    </header>
    <!--// Header -->

    <!-- Banner -->
    <div class="banner-wrapper">
      <v-container fluid>
        <div class="banner-inner">
          <div class="banner-content">
            <h1>
              Rainfo - Minimal Creative Portfolio for <br />
              Freelancers & Agencies.
            </h1>
          </div>
          <div class="banner-image">
            <div class="banner-image-inner">
              <img
                class="laptop"
                src="../assets/img/demos/laptop.png"
                alt="laptop"
              />
              <img
                class="tablet"
                src="../assets/img/demos/tablet.png"
                alt="tablet"
              />
              <img
                class="phone"
                src="../assets/img/demos/phone.png"
                alt="phone"
              />
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <!-- End Banner -->

    <!-- Demos -->
    <div class="demo-wrapper bg_color--1">
      <v-container fluid>
        <v-row>
          <v-col md="12" class="text-center">
            <div class="title-wrapper">
              <h1 class="text-center">Home Demos</h1>
              <p>
                Choose one of styles or cutomize easily your site following your
                ideas
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="4"
            md="6"
            sm="12"
            cols="12"
            v-for="(item, i) in demoContent"
            :key="i"
          >
            <div class="demo-item">
              <router-link :to="item.href" target="_blank">
                <img :src="item.src" alt="Main Demo" />
                <span>{{ item.title }}</span>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Demos -->

    <div class="demo-wrapper inner-pages bg_color--2">
      <v-container fluid>
        <v-row>
          <v-col md="12" class="text-center">
            <div class="title-wrapper">
              <h1 class="text-center">Inner Pages</h1>
              <p>
                Choose one of styles or cutomize easily your site following your
                ideas
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            lg="4"
            md="6"
            sm="12"
            cols="12"
            v-for="(item, i) in innerPageContent"
            :key="i"
          >
            <div class="demo-item">
              <router-link :to="item.href" target="_blank">
                <img :src="item.src" alt="Main Demo" /><span>{{
                  item.title
                }}</span>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Inner Pages -->

    <!-- Start Feature Area  -->
    <div class="features-area bg_color--1">
      <div class="wrapper">
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title pb--30 pb_sm--0 pb_md--0">
              <p>Our Rainfo Features</p>
              <h2 class="white--text">Awesome Feature</h2>
            </div>
          </v-col>
        </v-row>
        <div class="row service-main-wrapper prev-service-main-wrapper">
          <!-- Start Single Feature  -->
          <v-col
            xl="3"
            lg="4"
            md="6"
            cols="12"
            v-for="(features, i) in featuresContent"
            :key="i"
          >
            <div class="single-feature">
              <div class="feature">
                <div
                  class="icon"
                  :class="features.calssName"
                  v-html="iconSvg(features.icon)"
                ></div>
                <div class="content">
                  <h3 class="heading-title">{{ features.title }}</h3>
                  <p class="subtitle">
                    {{ features.desc }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
          <!-- End Single Feature  -->
        </div>
      </div>
    </div>
    <!-- End Feature Area  -->

    <div class="pv-feaq-area bg_color--2 ptb--120">
      <v-container>
        <v-row>
          <v-col lg="8" offset-lg="2">
            <div class="text-left section-title pb--30">
              <p>Check out our FAQ section to see if we can help.</p>
              <h2 class="theme-gradient">Do you have any Question</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="8" offset-lg="2">
            <div class="faq-area">
              <v-expansion-panels
                accordion
                flat
                v-model="panel"
                mandatory
                class="about-expension-panels home-page-panels"
              >
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    What is Rainfo ? How does it work?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    <p>
                      Welcome to Rainfo Vue Minimal Creative Portfolio Template
                      Built With VueJS. NO jQuery!. It works too much faster
                      loading speed and you can works too much
                      comfortability.Rainfo create your website so much faster
                      and Well Documented Codes for your customization.
                    </p></v-expansion-panel-content
                  >
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    How can I run Rainfo vue template?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      You can run vue easily. First You'll need to have node and
                      npm on your machine. So Please open your command prompt
                      then check your node -v and yarn -v for version. Goes To
                      Your your command prompt: then First:
                      <strong>yarn install</strong>
                    </p>
                    <p>
                      At Last: <strong>yarn run serve</strong>. By the following
                      way you can be run your project easily.
                    </p></v-expansion-panel-content
                  >
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    How can I change my demo page instead of splash page?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div>
                      <p>
                        You can be presenting any home page instead of splash
                        page. http://localhost:8000 you can showing any page as
                        your you are like. First you have to go to
                        <strong> index.js from router folder</strong>
                        then:
                      </p>
                      <p>
                        First Step (replace your choose demo page): Example:
                        import Demo form '../views/Demo.vue' Instead of
                        '../views/all-home-version/MainDemo.vue'
                      </p>
                      <p>
                        Example:
                        <a
                          target="_blank"
                          className="theme-gradient"
                          href="http://prntscr.com/118n4fb"
                          >http://prntscr.com/118n4fb</a
                        >
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    How can I get the customer support?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      After purchasing the product need you any support you can
                      be share with us with sending mail to
                      <a
                        className="theme-gradient"
                        href="mailto:rainbowit10@gmail.com"
                        >rainbowit10@gmail.com</a
                      >.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    Can I get update regularly and For how long do I get
                    updates?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content
                    ><p>
                      Yes, We will get update the Trydo. And you can get it any
                      time. Next time we will comes with more feature. You can
                      be get update for unlimited times. Our dedicated team
                      works for update.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    Can I change any component as I like?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Yes, You can change any component as you like. And By the
                      way you can build your website which you are choose.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- End v-expension-panel -->
                <v-expansion-panel>
                  <v-expansion-panel-header hide-actions>
                    Can I build a complete project with this template?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Yes, Why not. You can build a project and complete website
                      as you are like. More component are available include in
                      this templete. And you can be use it following
                      documentation.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <!-- End v-expension-panel -->
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Footer -->
    <footer class="footer demo-footer bg_color--1">
      <div class="slider-area slide--5" id="home">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="text-center content">
                <h1>
                  Purchase the rainfo and make your site super faster and easy.
                </h1>
                <a
                  target="_blank"
                  href="https://themeforest.net/checkout/from_item/31671489?license=regular"
                  >Purchase Rainfo</a
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </footer>
    <!--// Footer -->
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        demoContent: [
          {
            src: require("../assets/img/demos/home-1.jpg"),
            title: "Main Demo",
            href: "/main-demo",
          },
          {
            src: require("../assets/img/demos/home-3.jpg"),
            title: "Minimal Agency",
            href: "/minimal-agency",
          },
          {
            src: require("../assets/img/demos/home-9.jpg"),
            title: "Freelancer",
            href: "/freelancer",
          },
          {
            src: require("../assets/img/demos/home-5.jpg"),
            title: "Creative Portfolio",
            href: "/creative-portfolio",
          },
          {
            src: require("../assets/img/demos/home-8.jpg"),
            title: "Agencies",
            href: "/agency",
          },
          {
            src: require("../assets/img/demos/multiscroll.jpg"),
            title: "Multi Scroll",
            href: "/multiscroll-portfolio",
          },
          {
            src: require("../assets/img/demos/home-4.jpg"),
            title: "Designer Portfolio",
            href: "/designer-portfolio",
          },
          {
            src: require("../assets/img/demos/home-7.jpg"),
            title: "Parallax",
            href: "/parallax-home",
          },
          {
            src: require("../assets/img/demos/home-6.jpg"),
            title: "Vertical Portfolio",
            href: "/vertical-portfolio",
          },
        ],
        innerPageContent: [
          {
            src: require("../assets/img/demos/inner-pages/about.jpg"),
            title: "About Us",
            href: "/about-us",
          },
          {
            src: require("../assets/img/demos/inner-pages/portfolio.jpg"),
            title: "Portfolio",
            href: "/portfolio",
          },
          {
            src: require("../assets/img/demos/inner-pages/portfolio-details.jpg"),
            title: "Portfolio Details",
            href: "/portfolio-details",
          },
          {
            src: require("../assets/img/demos/inner-pages/awards.jpg"),
            title: "Awards",
            href: "/awards",
          },
          {
            src: require("../assets/img/demos/inner-pages/blog.jpg"),
            title: "Blog",
            href: "/blog",
          },
          {
            src: require("../assets/img/demos/inner-pages/blog-details.jpg"),
            title: "Blog Details",
            href: "/blog-details",
          },
          {
            src: require("../assets/img/demos/inner-pages/service.jpg"),
            title: "Service",
            href: "/service",
          },
          {
            src: require("../assets/img/demos/inner-pages/service-details.jpg"),
            title: "Service Details",
            href: "/service-details",
          },
          {
            src: require("../assets/img/demos/inner-pages/contact.jpg"),
            title: "Contact",
            href: "/contact",
          },
          {
            src: require("../assets/img/demos/inner-pages/404.jpg"),
            title: "404 Page",
            href: "/404",
          },
          {
            src: require("../assets/img/demos/inner-pages/coming-soon.jpg"),
            title: "Coming Soon",
            href: "",
          },
          {
            src: require("../assets/img/demos/inner-pages/coming-soon.jpg"),
            title: "Coming Soon",
            href: "",
          },
        ],
        featuresContent: [
          {
            icon: "check-square",
            title: "VueJS",
            desc: ` No.1 Github Start & Developer Friendly Top Progressive JavaScript Framework `,
            calssName: "vue",
          },
          {
            icon: "cast",
            title: "Vuetify Js",
            desc: `It's a complete UI framework built with Vue.js which you get rich user experiences`,
            calssName: "vuetify",
          },
          {
            icon: "smartphone",
            title: "Perfect Responsive",
            desc: `Vuetify takes a mobile first approach to design like phone, tablet, or desktop computer.`,
            calssName: "responsive",
          },
          {
            icon: "archive",
            title: "Sass Available",
            desc: ` The tamplate has Sass available for css. You can Change
                        css by sass`,
            calssName: "sass",
          },
          {
            icon: "arrow-down-circle",
            title: "Fast Loading Speed",
            desc: `Trydo is faster loading speed.Trydo create your theme so
                        much faster way`,
            calssName: "speed",
          },

          {
            icon: "command",
            title: "Modern Design",
            desc: `Trydo is a modern creatuve design for Creative Agency ,
                        Personal Portfolio etc....`,
            calssName: "modern",
          },
          {
            icon: "code",
            title: "Well Documented Codes",
            desc: `The Trydo code is awesome well documented code. And Its
                        customization is very easily`,
            calssName: "code",
          },
          {
            icon: "headphones",
            title: "24 Support System",
            desc: `We are provide 24 hours support for all clients.You can
                        purchase without hesitation.`,
            calssName: "support",
          },
        ],
        panel: 0,
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .theme--light.about-expension-panels .v-expansion-panel-content p {
    color: #333;
    font-size: 15px;
    margin-bottom: 0;
  }
  .slide--5 .content h1 {
    color: #000;
  }
  b,
  strong {
    font-weight: 400;
  }
  .theme--light.about-expension-panels .v-expansion-panel-header {
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0 0 10px 0;
    font-size: 18px;
    color: #000;
    border: none;
    @media only screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }
  .theme--light.about-expension-panels .v-expansion-panel {
    background-color: transparent;
    color: #1f1f25;
  }

  .demo-wrapper {
    margin-top: 130px;

    &.inner-pages {
      margin-top: 0;
    }
  }
  .bg_color--1 {
    background: #f9f9f9;
  }
  .bg_color--2 {
    background: #fff;
  }
  .section-title {
    h2 {
      font-size: 50px;
      font-weight: 600;
      line-height: 62px;
      margin-bottom: 20px;
      color: #000 !important;
      @media only screen and (max-width: 767px) {
        font-size: 34px;
        line-height: 45px;
      }
    }
    p {
      color: #333;
    }
  }

  @media only screen and (max-width: 767px) {
    .pv-feaq-area {
      &.ptb--120 {
        padding: 60px 0;
      }
    }
    .section-title h2 {
      font-size: 30px;
      line-height: 40px;
    }
    .section-title.text-left.pb--30 {
      padding-bottom: 0;
    }
    .slide--5 .content h1 {
      font-size: 25px;
      line-height: 40px;
    }
  }

  .single-feature {
    background: #fff;
    padding: 50px;
    transition: transform 0.65s cubic-bezier(0.05, 0.2, 0.1, 1),
      box-shadow 0.65s cubic-bezier(0.05, 0.2, 0.1, 1);
    z-index: 2;
    border-radius: 10px;
    height: 100%;
    @media only screen and (max-width: 767px) {
      padding: 25px 15px;
    }

    .icon {
      font-weight: 400;
      margin-bottom: 23px;
      display: inline-flex;
    }

    h3 {
      margin-bottom: 19px;
      font-weight: 600;
      font-size: 20px;
      color: #333;
    }
    p {
      color: #333;
    }
  }
  .plr--120 {
    padding: 0 120px;
  }
  .features-area {
    [class*="col-"] {
      margin-top: 30px;
    }
  }
  .features-area {
    .col-lg-12 {
      margin-top: 0;
    }
  }
  strong,
  .theme-gradient,
  .v-application .pv-feaq-area a {
    color: #f42a59 !important;
  }
  .demo-wrapper {
    @media screen and (min-width: 768px) {
      [class*="col-"] {
        padding: 0 35px;
      }
    }
    .demo-item {
      background: #fff;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    }
  }
  .demo-wrapper {
    &.inner-pages {
      .demo-item {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
      }
    }
  }
  @media (max-width: 767px) {
    .banner-content h1 {
      font-size: 28px;
      line-height: 42px;
    }
  }
  .section-title {
    @media (max-width: 767px) {
      &.pb_md--0 {
        padding-bottom: 0;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
</style>

<style lang="scss">
  .theme--light.about-expension-panels {
    .v-expansion-panel-header {
      min-height: 30px;
      padding: 0 0 5px 0;
      margin-top: 7px;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      display: inline-flex;
      width: auto;
      font-family: "Poppins", sans-serif;

      &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #555;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
      }
      &:not(.v-expansion-panel-header--mousedown):focus::before {
        opacity: 0;
      }
    }
    .v-expansion-panel {
      background-color: transparent;
      color: #1f1f25;
    }
    .v-expansion-panel-content__wrap {
      font-size: 18px;
      line-height: 30px;
      background: none;
      border: none;
      padding: 0 0 15px;
    }
  }
  .single-feature {
    svg {
      width: 54px;
      height: 54px;
      stroke-width: 1 !important;
    }
    &:hover {
      box-shadow: 0 2px 70px 0 rgb(253 71 102 / 5%);
      transform: translateY(-5px);
    }
    .vue {
      color: #42b883;
    }
    .vuetify {
      color: #1867c0;
    }
    .code {
      color: #12d8df;
    }
    .sass {
      color: #59c98d;
    }
    .support {
      color: #f767b4;
    }
    .speed {
      color: #6f41f6;
    }
    .responsive {
      color: #337dff;
    }
    .modern {
      color: #fd4766;
    }
  }
  .features-area {
    padding: 120px 120px;
    @media only screen and (max-width: 767px) {
      padding: 60px 15px;
    }
  }
  .pv-feaq-area.ptb--120 {
    @media only screen and (max-width: 991px) {
      padding: 100px 0;
    }
  }
</style>
