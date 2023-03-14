<script setup>
const printEvent = (event) => {
  let e = event.target.parentElement.parentElement
  if (e.classList.contains("active")) {
    e.classList.remove('active');
  } else {
    e.classList.add('active');
  }
}
</script>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },

  }
  
};


</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <button class="ui button toggle" 
          :class="[!isActive ? '':'active']" 
          @click="toggle();printEvent($event)">
          {{isActive ? '-' : '+'}}
        </button>
        <slot name="heading"></slot>
      </h3>
      <div class="list">
        <slot name="list"></slot>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}

button{
  height: 30px;
  width: 30px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  background: transparent;
  color: var(--vt-button-color);
  border-radius: 50%;
  /* transition: 0.5s ease-in; */
  border-color: var(--vt-button-color);
}

button:hover{
  cursor:pointer;
  background: var(--vt-button-color);
  color: #FFF;
}

button.active{
  background: var(--vt-button-color);
  color: #FFF;
}

@keyframes item-animation{
  from {opacity: 0;transform: translateX(50vw);}
  to {opacity: 1;transform: translateX(0);}
}
.details>.list{
  visibility: hidden;
  height: 0;
  opacity: 0;
  animation-duration: 1s;
}

.details.active>.list{
  visibility: visible;
  height: auto;
  opacity:1;
  animation-name: item-animation;
  animation-duration: 1s;
}

.details.active>h3{
  color: rgb(0, 150, 35)
}

</style>
