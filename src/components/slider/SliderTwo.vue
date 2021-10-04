<template>
  <!-- Start Single Slider -->
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="slider-activation-with-slick rn-slick-dot dot-light mb--0"
    >
      <div
        class="slider--8 fullscreen d-flex align-center justify-center fullscreen bg_image rfanimation-style--1"
        v-for="(slider, i) in sliderContent"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.src + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="content text-center">
                <h2 class="heading-title blue--text text--darken-4" >{{ slider.title }}</h2>
                <!-- <p class="description black--text text--darken-4">
                  {{ slider.desc }}
                </p> -->
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";

  export default {
    components: { VueSlickCarousel },
    data() {
      return {
        sliderContent: [
          {
            src: require("../../assets/img/faces/gr_1.jpg"),
            title: "",
            desc: `There are many variations of passages of Lorem Ipsum available 
                  but the majority have suffered alteration.`,
          },
          {
            src: require("../../assets/img/faces/gr_10.jpg"),
            title: "",
            desc: ` There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.`,
          },
        ],
        settings: {
          fade: true,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          margin: 20,
        },
      };
    },
  };
</script>

<style lang="scss">
  h1{
    .heading-title{
      color: aqua;
    }
  }
  .slick-slide {
    img {
      display: block;
      width: auto;
    }

  }
</style>
