<script>

export default{
    props: {
        title: {
            type: String,
            required: true,
            default: "Activities"
        },
        info: {
            type: Object,
            required: true,
            default: null
        }
    },
    data(){
        return{
            showModal: false,
        }
    }
}
</script>

<template>
    <div class="item-info">
        <button class="btn-item-info" @click="showModal=true">
            i
        </button>        
    </div>
    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal=false"></div>   
    </transition>
    <transition name="slide" appear>
        <div class="modal" v-if="showModal">
            <h3><a :href="info.activities_url">{{ title }} in {{ info.project }}</a></h3>
            <ul>
                <li v-for="activity in info.activities">
                    {{ activity }}
                </li>
            </ul>
            <button class="modal-button" @click="showModal = false">Close</button>
        </div>
    </transition>
</template>

<style scoped>
.item-info{
  display: flex;
  align-items: center;
}

.btn-item-info{
  background: transparent;
  border-color: rgb(0, 150, 35);
  color: rgb(0, 150, 35);
  height: 20px;
  border-radius: 50%;
}

.btn-item-info:hover{
  cursor:pointer;
  background: rgb(0, 150, 35);
  color: #FFF;
}

.modal-button{
    background: transparent;
    border-color: rgb(0, 150, 35);
    color: #FFF;
    font-weight: bold;
    cursor:pointer;
    border-radius: 4px;
}

.modal-button:hover{
    background: rgb(0, 150, 35);
    border-color: #FFF;
    color: #FFF;
}

.modal-overlay {
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-radius: 10px;
  z-index:1;
  background-color: rgb(0, 150, 35);
  opacity: 0.1;
}

.modal{
    position: absolute;
    right:20px;
    padding: 10px;
    transform: translate(-25%, -15%);
    z-index: 2;

    width: auto;
    max-width: 300px;
    background-color: grey;
    border-radius:12px;

    color:#FFF;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active{
    transition: all 0.5s;
}

.slide-enter,
.slide-leave-to{ 
    /* transform: translateX(100vw); */
    opacity: 0;
}

</style>