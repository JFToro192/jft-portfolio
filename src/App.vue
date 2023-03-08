<script setup>
import HelloWorld from './components/HelloWorld.vue'
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

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
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
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
