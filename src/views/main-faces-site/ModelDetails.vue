<template>
  <div class="portfolio-details-page" v-if="model">
    <HeaderFive>
      <img slot="logo" src="../../assets/img/logo/logo_try01.png" />
    </HeaderFive>

    <!-- Start Bradcaump area -->
    <!-- <div class="bradcaump_area">
      <div
        class="parallaxContainer paralaxbg--2 rn-bg-position-fixed"
        data-black-overlay="5"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-center bradcaump_inner">
                <h2 class="bradcaump-title">Mr. Jharuin joly</h2>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div> -->
    <!-- End Bradcaump area -->

    <!-- Start Portfolio Details Area -->
    <div class="rf-portfolio-details section-ptb-xl" ref="modelContent">
      <v-container class="container">
        <v-row class="ma-2">
          <v-btn to="/models">Back</v-btn>
        </v-row>
        <v-row>
          <v-col sm="6" cols="12">
            <div class="rp-port-details-inner sticky-top">
              <div class="content">
                <h3>{{model.name}}</h3>
                <!-- <p>
                  Etia reprimi no pri, vix no reque dolore di sentiet, vel at
                  wisi mazim feugiat. Ne ali quam apeirian mel, an ese choro
                  regione virtute per. iusto oporter and. Ius vitae parte repudi
                  andae, sed an harum simul dolor, pro reque graec.
                </p>
                <p>
                  Ne ali quam apeirian mel, an ese choro regione virtute per.
                  Etia reprimi no pri, vix no reque dolore di sentiet, vel at
                  wisi mazim feugiat.iusto oporter and. Ius vitae parte repudi
                  andae, sed an harum simul dolor, pro reque graec.
                </p> -->
                <v-row >
                  <v-col>
                    <div class="port-info">
                      <div class="port-meta">
                        <span>Type:</span>
                        <p>{{model.type}}</p>
                      </div>

                      <div class="port-meta">
                        <span>Age:</span>
                        <p>{{model.age}} years</p>
                      </div>

                      <div class="port-meta">
                        <span>Height:</span>
                        <p>{{model.height}} cm</p>
                      </div>

                      <div class="port-meta">
                        <span>Location:</span>
                        <p>{{model.location}}</p>
                      </div>
                    </div>
                  </v-col>
                  <v-col>
                    <div class="port-info">
                      <div class="port-meta">
                        <span>Eyes:</span>
                        <p>{{model.eyes}}</p>
                      </div>

                      <div class="port-meta">
                        <span>Hair:</span>
                        <p>{{model.hair}}</p>
                      </div>

                      <div class="port-meta">
                        <span>Shoes:</span>
                        <p>{{model.shoes}}</p>
                      </div>

                      <div class="port-meta">
                        <span>Shirt:</span>
                        <p>{{model.shirt}}</p>
                      </div>
                    </div>                    

                  </v-col>

                </v-row>
                <v-row >
                  <v-col class="ma-2">
                    <v-btn @click="generatePDF">Download</v-btn>
                  </v-col>
                  
                </v-row>
              </div>
            </div>
          </v-col>

          <v-col sm="6" cols="12" class="pr--60 pr-md-15 pr-sm-15">
            <div class="rp-port-thumb">
              <div v-for="(picture,index) in model.pictures" :key="index" 
              class="port-single-thumb mb--30">
                <img
                  :src="picture"
                  alt="portfolio"
                  width="600"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Details Area -->

    <Footer />
  </div>
</template>

<script>
  import db from '../../firebase/config'
  import HeaderFive from "../../components/header/HeaderFive";
  import Footer from "../../components/footer/Footer";
  import jsPDF from "jspdf";
  import 'jspdf-autotable';
  export default {
    components: {
      HeaderFive,
      Footer,
    },
    data() {
      return {
        model:null
      };
    },

    methods:{
        fetchModel () {
          db.collection('models').where('mid','==', this.$route.params.mid).get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              // console.log(doc.data())
              // adding model object to model array based on type
            let modelObject ={}
            modelObject = doc.data()
            this.model = modelObject
            })
          })

          .catch(error => {
            console.log("Error reading document:", error)
          })
      },

      generatePDF() {
        const columns =[
          {title: "Age", dataKey:"age"},
          {title: "Eyes", dataKey:"eyes"},
          {title: "Hair", dataKey:"hair"},
          {title: "Height", dataKey:"height"},
          {title: "Location", dataKey:"location"},
          {title: "Shirt", dataKey:"shirt"},
          {title: "Shoes", dataKey:"shoes"},
          {title: "Gender", dataKey:"type"},
        ]

        const doc = new jsPDF
        ({
          orientation: "portrait",
          unit: "in",
          format: "letter"
        })

      // text is placed using x, y coordinates
      doc.setFontSize(16).text(this.model.name, 0.5, 1.0)

      // create a line under heading 
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1)

      // Using autoTable plugin
      doc.autoTable({
        columns,
        body:[
          [this.model.age + ' years', 
          this.model.eyes,
          this.model.hair,
          this.model.height + 'cm',
          this.model.location,
          this.model.shirt,
          this.model.shoes,
          this.model.type,
          ]
        ],
        margin: { left: 0.5, top: 1.25 }
      })

      // placing pictures
      var image = new Image();
      image.src = this.model.pictures[0];
      doc.addImage(image, 'JPG', 300, 80, 50, 50); //base64 image, format, x-coordinate, y-coordinate, width, height
  
      doc.text(
          "Copy rights reserved",
          0.5,
          doc.internal.pageSize.height - 0.5
        )
        doc.save(`${this.model.name}.pdf`);
      }
    },

    created(){
      this.fetchModel()
    }
  };
</script>

<style lang="scss" scoped>
  .portfolio-details-page .-rn-footer {
    background: #f9f9f9;
  }
</style>
