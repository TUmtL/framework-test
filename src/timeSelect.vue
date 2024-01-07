<template>
  <div class="nav__select__time" @click.self="active = !active" style="position:relative;">
    <div>Created</div>
    <div class="listT">
      <input :class="['time-input', { 'dark-mode': store.darkM }]" placeholder="from" v-model="store.fTime.start"
        type="number">
      <div class="line"></div>
      <input :class="['time-input', { 'dark-mode': store.darkM }]" placeholder="before" v-model="store.fTime.end"
        type="number">
    </div>
    <img :class="['nav__img', 'nav__img__time']" src="./assets/Vector 55.svg" alt="">
  </div>
</template>

<script>
import store from './store.js'
export default {
  data() {
    return {
      active: false,
      store: store(),
    }
  },
  computed: {
    el() {
      return document.querySelector('.listT')
    },
    height() {
      return this.el.clientHeight
    },
    img() {
      return document.querySelector('.nav__img__time')
    },
    elWrapper() {
      return document.querySelector('.nav__select__time')
    },
  },
  props: [
    'time'
  ],
  watch: {
    active() {
      if (this.active === false) {
        this.elWrapper.style.borderRadius = '10px 10px 10px 10px'
        this.elWrapper.style.borderBottom = '1px solid black'
        this.img.style.transform = 'rotate(0deg)'
        this.el.style.transform = `translateY(0px)`
        this.el.style.opacity = 0
        this.el.style.transition = 'transform 0.3s ease-in-out , opacity 0.3s ease-in-out'
        setTimeout(() => { this.el.style.zIndex = '-1' }, 300)
      } else {
        this.elWrapper.style.borderRadius = '10px 10px 0px 0px'
        this.elWrapper.style.borderBottom = 'none'
        this.img.style.transform = 'rotate(180deg)'
        this.el.style.zIndex = 4
        setTimeout(() => {
          this.el.style.transform = `translateY(${this.height}px)`
          this.el.style.transition = 'transform 0.3s ease-in-out , opacity 0.3s ease-in-out'
          this.el.style.opacity = 1
        }, 10)
      }
    },
    'store.out'() {
      this.active = false
    }
  },
  mounted() {
    this.el.style.zIndex = '-1'
    this.el.style.transform = `translateY(-${this.height + 30}px)`
    this.el.style.opacity = 0
  }
}
</script>

<style>
.listT {
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  z-index: 3;
  width: 100.9%;
  left: -1px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 0;
  border-radius: 0 0 10px 10px;
  border: 1px solid black;
  border-top: 0;
  padding: 20px 21.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.line {
  width: 12px;
  height: 1px;
  background-color: black;
  flex-shrink: 0;
  margin: 0 5px;
}

.time-input::-webkit-inner-spin-button,
.time-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.time-input {
  max-width: 95px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  min-width: 35px;
  font-size: 13px;
  font-weight: 400;
}

.time-input::placeholder {
  color: rgba(0, 0, 0, 0.30);
  font-size: 13px;
  font-weight: 400;
}

@media (max-width:1365px) {
  .listT {
    flex-direction: column;
    padding: 20px;
  }

  .time-input {
    max-width: 115px;
  }

  .line {
    margin: 15px 0;
  }
}

@media (max-width:1023px) {
  .listT {
    width: 101%;
  }
}
@media (max-width:767px) {
  .listT {
    width: 100.6%;
    flex-direction: row;
  }

  .line {
    margin: 0 6px;
  }
  .time-input {
    max-width: 110px;
  }
}
</style>