<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import axios from 'axios'
import { reactive } from 'vue'

import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { transform } from 'ol/proj.js';

import 'ol/ol.css'
</script>

<script>

export default {
  name: 'MapContainer',
  components: {},
  props: {
    map: null,
  },
  data () {
    return {
      map : {},
      data : reactive({
        city: '',
        weather: {main:{temp:''},weather:[{main:'',description:''}]},
        icon: '',
        location: {},
      })
    }
  },
  methods: {
    getWeather: function () {
      const OPENWEATHER_BASE = import.meta.env.VITE_OPENWEATHER_BASE;
      const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

      axios(`${OPENWEATHER_BASE}?units=metric&q=${this.data.city}&appid=${OPENWEATHER_KEY}`).then(response=>{
        this.data.weather = response.data
        this.data.icon = `https://openweathermap.org/img/wn/${ this.data.weather.weather[0].icon }@2x.png`;
        this.data.location = this.data.weather.coord;
        this.map.setView(new View({
            center: transform([this.data.location.lon, this.data.location.lat],"EPSG:4326","EPSG:3857"),
            zoom: 8
        }));
      })
    },
    getmap: function () {
      // console.log(this.map.getView());
    },
    createMap: function () { 
      let map = new Map({
        target: this.$refs['map-root'],
        layers: [
          new TileLayer({
            source: new OSM()
          }),
        ],

        view: new View({
          zoom: 8,
          center: [1028230.904492,5696698.844038],
          constrainResolution: true
        }),
      })
      return map
    }
  },
  mounted() {
    this.map = this.createMap()
  },
}
</script>


<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <div class="contact-me">
        <h2>Juan Fernando Toro Herrera</h2>
        <h3><i>Ph.D. Candidate in Environmental and Infrastructure Engineering @ Politecnico di Milano</i></h3>
        <h3><i>M.Sc. Civil Engineering for Risk Mitigation @ Politecnico di Milano</i></h3>
        <span title="Email"><a href="mailto:juanfer_toro192@hotmail.com"><fa :icon="['fas','envelope']" /></a></span>
        <span title="GitHub"><a href="https://github.com/JFToro192"><fa :icon="['fab','github-alt']" /></a></span>
        <span title="LinkedIn"><a href="https://linkedin.com/in/jftoro"><fa :icon="['fab','linkedin']" /></a></span>
      </div>
      <HelloWorld msg="Welcome!" />
      <br>
      <div class="projects">
        <div class='map' ref="map-root" ></div>
        <div class="weather">
          <div class="enter-city">
          <input type="text" placeholder="Enter a city" v-model="data.city">
          <button
          @click="getWeather();getmap()"
          >
          Submit
          </button>
        </div>  
          <p>City: {{ data.city }}</p>
          <p>Temperature: {{ data.weather.main.temp }}&deg;</p>
          <p>Weather: {{ data.weather.weather[0].main }}</p>
          <p>Description: {{ data.weather.weather[0].description }}</p>
          <img v-bind:src=data.icon alt="">
        </div>        
      </div>

    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <footer>
    <hr>
    <div>
      <span title="GitHub Actions"><img src="./assets/GitHub_actions.png" alt="GH_actions" style="height:20px;"></span>
      <span title="VueJS"><img src="./assets/vue.svg" alt="VueJS" style="height:20px;"></span>
      <span title="Zotero API"><img src="./assets/Zotero_logo.svg" alt="Zotero" style="height:20px;"></span>
      <span title="OpenWeather API"><img src="./assets/openweather.svg" alt="OpenWeather" style="height:20px;"></span>
      <span title="MongoDB Atlas"><img src="./assets/mongodb.svg" alt="MongoDB" style="height:20px;"></span>
    </div>
  </footer>
</template>

<style scoped>
@import "ol/ol.css";

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.enter-city input{
  font-size: 15px;
}

span{
  padding-right: 4px;
  height: 10px;
  font-size: 20px;
}

a:hover{
  color:blueviolet;
}

footer{
  padding:5px;
  border-radius: 4px;
  background-color: white;
  opacity:0.5;
}

.contact-me{
  padding-bottom: 20px;
}

.projects{
  width:100%;
  display: flex;
}

.map{
  width: 100%;
  height:250px;
}

.weather {
  margin: 0 10px;
}
</style>
