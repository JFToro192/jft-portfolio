<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import axios from 'axios'
import { reactive } from 'vue'

const OPENWEATHER_BASE = import.meta.env.VITE_OPENWEATHER_BASE;
const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

let data = reactive({
  city: '',
  weather: {main:{temp:''},weather:[{main:'',description:''}]},
})

const getWeather = () => {

  axios(`${OPENWEATHER_BASE}?units=metric&q=${data.city}&appid=${OPENWEATHER_KEY}`).then(response=>{
    data.weather = response.data
    console.log(document.getElementsByClassName('map'));
  })
}
</script>

<script>

import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

import 'ol/ol.css'

export default {
  name: 'MapContainer',
  components: {},
  props: {},
  mounted() {
    new Map({
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
  },
}
</script>


<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Welcome!" />
      <div class='map' ref="map-root" style="width: 100%; height: 200px"></div>
      <div class="enter-city">
        <input type="text" placeholder="Enter a city" v-model="data.city">
        <button
          @click="getWeather"
        >
        Submit
        </button>
      </div>
      <div class="weather">
        <h1>{{ data.weather.main.temp }}&deg;</h1>
        <h2>{{ data.weather.weather[0].main }}</h2>
        <h3>{{ data.weather.weather[0].description }}</h3>
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  


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
</style>
