<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})


</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>About me</h2>
    <div class="about-me">
      <p>
        Over the past 3+ years, I had the chance to become a research fellow, teaching assistant and pursue my PhD in Environmental and Infrastructure Engineering at Politecnico di Milano. The last years have offered me wonderful opportunities, such as collaborating on different cross-border research projects between Italy and Switzerland, and learning several skills for managing, processing and sharing geospatial data. I am enthusiastic about being able to communicate the outputs of my research and studies by leveraging desktop and web geospatial technologies.
      </p>      
    </div>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.about-me{
  padding: 10px 0;
  text-align: justify;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
