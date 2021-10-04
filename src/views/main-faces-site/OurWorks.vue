<template>
  <div>
    <HeaderFive>
      <img slot="logo" src="../../assets/img/logo/logo_try01.png" />
    </HeaderFive>
    <!-- <SliderTwo /> -->
    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area section-ptb-xl" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title-2">
              <h2>Our Works</h2>
              <p>All Are Unique</p>
            </div>
          </v-col>
        </v-row>
        <OurWorksComponent />
      </v-container>
    </div>
    <!-- End Portfolio Area -->
    <!-- <Awards />
    <News /> -->
    <Footer />
  </div>
</template>

<script>
  import HeaderFive from "../../components/header/HeaderFive";
  // import SliderTwo from "../../components/slider/SliderTwo";
  import OurWorksComponent from "../../components/main-faces-components/OurWorksComponent.vue";
  // import Awards from "../../components/awards/Awards";
  // import News from "../../components/news/News";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      HeaderFive,
      // SliderTwo,
      OurWorksComponent,
      // Awards,
      // News,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
