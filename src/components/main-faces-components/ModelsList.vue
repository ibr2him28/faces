<template>
  <div class="modelslist">
    <v-tabs v-model="tab" centered flat hide-slider color="primary">
      <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
        item.name
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabContent"
        :key="item.id"
        class="portfolio-wrapper portfolio-list mt--60"
      >
        <v-row class="row--5" id="animated-thumbnials">
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(item, i) in item.content"
            :key="i"
            @click="index = i"
          >
            <div class="portfolio_style--3">
              <div class="thumb">
                <router-link :to="`model-details/`+item.mid"
                  ><img :src="item.pictures[0]" alt="personal portfolio" height="auto"
                /></router-link>
                <div class="port-hover-action">
                  <div class="content">
                    <h3>
                      <router-link :to="`model-details/`+item.mid">{{
                        item.name
                      }}</router-link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
import db from '../../firebase/config'
export default {
data(){
  return{
        tab: null,
        index: null,
        tabItems: [
          {
            id: 1,
            name: "MEN",
          },
          {
            id: 2,
            name: "WOMEN",
          },
          {
            id: 3,
            name: "BOYS",
          },
          {
            id: 4,
            name: "GIRLS",
          },
          {
            id: 5,
            name: "TEEN BOYS",
          },
          {
            id: 6,
            name: "TEEN GIRLS",
          },
        ],
        tabContent: [
          {
            id:1,
            content: []
          },
          {
            id:2,
            content: []
          },
          {
            id:3,
            content: []
          },
          {
            id:4,
            content: []
          },
          {
            id:5,
            content: []
          },                    
          {
            id:6,
            content: []
          }  
        ]
  }
},

methods :{
  fetchModels () {
    db.collection('models').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        // adding objects to tabContent array based on type
        let model = doc.data()
        if        (model.type == "MEN") {  this.tabContent[0].content.push(model)}
        else if   (model.type == "WOMEN") {  this.tabContent[1].content.push(model)}
        else if   (model.type == "BOYS") {  this.tabContent[2].content.push(model)}
        else if   (model.type == "GIRLS") {  this.tabContent[3].content.push(model)}
        else if   (model.type == "TEEN BOYS") {  this.tabContent[4].content.push(model)}
        else if   (model.type == "TEEN GIRLS") {  this.tabContent[5].content.push(model)}
        
      })
    })

    .catch(error => {
      console.log("Error reading document:", error)
    })
  }
},

created () {
  this.fetchModels()
}

}
</script>

<style>

</style>