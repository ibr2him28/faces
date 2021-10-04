<template>
  <div
    class="row portfolio-wrapper row--55 rn-custom-portfolio-wrapper rn-hil-portfolio"
  >
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(content, i) in portfolioContent"
      :key="i"
    >

          <img :src="content.src" width=auto />

    </v-col>
    <!-- Start Single Portfoli -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          {
            bgClassName: "colorful-project-bg--8",
            src: require("../../assets/img/works/1.jpg"),
            title: "3D Design",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--2",
            src: require("../../assets/img/works/2.jpg"),
            title: "Asymmetrical layoutsy",
            desc: "Art",
          },
          {
            bgClassName: "colorful-project-bg--3",
            src: require("../../assets/img/works/3.jpg"),
            title: "Art Deco",
            desc: "Fashion",
          },
          {
            bgClassName: "colorful-project-bg--4",
            src: require("../../assets/img/works/4.jpg"),
            title: "Modern Mid-Century",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--5",
            src: require("../../assets/img/works/5.jpg"),
            title: "The continuing",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--6",
            src: require("../../assets/img/works/6.jpg"),
            title: "palettes for photos",
            desc: "Fashion",
          },
          {
            bgClassName: "colorful-project-bg--7",
            src: require("../../assets/img/works/7.jpg"),
            title: "Custom illustrations",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--1",
            src: require("../../assets/img/works/8.jpg"),
            title: "Buxom serifs",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/9.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/10.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/11.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/12.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/13.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/14.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
          {
            bgClassName: "colorful-project-bg--9",
            src: require("../../assets/img/works/15.jpg"),
            title: "Open compositions",
            desc: "Photography",
          },
        ],
      };
    },
  };
</script>
