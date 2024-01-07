<template>
  <div  :class="['card' , 'card__' + index , {'dark-mode':store.darkM}]"  @mouseenter="el.style.transform = `translateY(0px)`"  @mouseleave="el.style.transform = `translateY(${this.height - this.nameHeight - 10}px)`">
    <img :class="'card__img'" :src="'https://test-front.framework.team' + info?.imageUrl" alt="">
    <div :class="['info' , 'info__' + index]">
      <p :class="['info__name' , `info__name__${index}`]">{{ info.name }}</p>
      <p class="info__author"><span class="span">Author: </span>{{ store.authorName[info.authorId - 1] }}</p>
      <p class="info__date"><span class="span">Created: </span>{{ info.created }}</p>
      <p class="info__location"><span class="span">Location: </span>{{ store.locationName[info.locationId - 1] }}</p>
    </div>

  </div>
</template>

<script>
import store from './store.js';
export default {
  props: [
    'info', 'index'
  ],
  data() {
    return {
      store: store(),
      nameHeight: '',
      height:'',
    }
  },
  mounted() {
    setTimeout(()=>{

      this.height = this.el.clientHeight
      this.nameHeight = this.elName.clientHeight
      this.el.style.transform = `translateY(${this.height - this.nameHeight - 10}px)`
    }, 10)
  },
  computed:{
    el(){
      return document.querySelector('.info__' + this.index)
    },
    elName(){
      return document.querySelector('.info__name__' + this.index )
    },
  }
}
</script>

<style>
.card__img {
  height: 100%;
  object-fit: cover;
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 15px;
  padding-bottom: 44px;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
}
</style>