<template>
  <div @click.stop.prevent="active = !active" :class="['nav__select', 'nav__select__' + placeholder]"
    style="position: relative;">
    <div :class="['select__text__wrapper', 'select__text__wrapper__' + placeholder]"><span class="select__text"
        v-if="model[0] != ''">{{ model[0] }}</span><span class="select__text" v-else>{{ placeholder }}</span></div>
    <div :class="[placeholder + '__list', 'list']">
      <p class="list__item" @click="select(one)" v-for="one of items">{{ one }}</p>
    </div>
    <div @click="model[0] = ''" :class="['select__filter__washer', 'select__filter__washer__' + placeholder]"><img
        style="width: 8px;" src="./assets/Union.svg" alt="cross"></div>
    <img :class="['nav__img', 'nav__img__' + placeholder]" src="./assets/Vector 55.svg" alt="">
  </div>
</template>

<script>
import store from './store'

export default {
  created() {
    document.querySelector('#app').parentElement.onclick = () => this.active = false
  },
  data() {
    return {
      active: false,
      height: '',
      store: store()
    }
  },
  props: [
    'items', 'model', 'placeholder'
  ],

  watch: {
    active() {
      if (this.active === false) {
        this.elWrapper.style.borderRadius = '8px 8px 8px 8px'
        this.elWrapper.style.borderBottom = '1px solid black'
        this.img.style.transform = 'rotate(0deg)'
        this.el.style.transform = `translateY(0px)`
        this.el.style.opacity = 0
        this.el.style.transition = 'transform 0.7s ease-in-out , opacity 0.2s ease-in-out'
        setTimeout(() => { this.el.style.zIndex = '-1' }, 500)
      } else {
        this.elWrapper.style.borderRadius = '8px 8px 0px 0px'
        this.elWrapper.style.borderBottom = 'none'
        this.img.style.transform = 'rotate(180deg)'
        this.el.style.zIndex = 6
        setTimeout(() => {
          this.el.style.transform = `translateY(${this.height}px)`
          this.el.style.transition = 'transform 0.3s ease-in-out , opacity 0.7s ease-in-out'
          this.el.style.opacity = 1
        }, 10)
      }
    },
    'model': {
      handler() {
        if (this.model[0] !== '') {
          this.text.style.maxWidth = '84%'
          this.washer.style.transform = 'translateX(-10px)'
          this.washer.style.opacity = 1
        } else {
          this.text.style.maxWidth = '92%'
          this.washer.style.transform = 'translateX(10px)'
          this.washer.style.opacity = 0

        }
      },
      deep: true
    },
    'store.out'() {
      this.active = false
    }
  },
  mounted() {
    if (this.active === false) {

      this.el.style.transform = `translateY(0px)`
      this.el.style.opacity = 0
      this.el.style.zIndex = '-1'
    }
    setTimeout(() => this.height = this.el.clientHeight, 400)


    console.log(document.querySelector(`.${this.placeholder}__list`).clientHeight)
  },
  computed: {
    elWrapper() {
      return document.querySelector('.nav__select__' + this.placeholder)
    },
    el() {
      return document.querySelector(`.${this.placeholder}__list`)
    },
    img() {
      return document.querySelector('.nav__img__' + this.placeholder)
    },
    text() {
      return document.querySelector('.select__text__wrapper__' + this.placeholder)
    },
    washer() {
      return document.querySelector('.select__filter__washer__' + this.placeholder)
    }
  },
  methods: {
    select(one) {
      this.model[0] = one
      this.active != this.active
      // this.store.page = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 100.8%;
  left: -1px;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 0;
  border-radius: 0 0 10px 10px;
  border: 1px solid black;
  height: 345px;
  overflow-y: scroll;
}

.list::-webkit-scrollbar {
  background: transparent;
  width: 9px;
  margin-right: 8px;
}

.select__filter__washer {
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease-in-out;
}

.list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #7B7B7B;
}

.select__text {
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}

.select__text__wrapper {
  max-width: 92%;
  margin-right: auto;
}

.list__item {
  padding: 10px 10px 10px 30px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list__item:hover {
  filter: invert(1);
  background-color: #fff;
}

@media (max-width:1365px) {
  .list {
    padding: 5px 0;
    height: 355px;
    &__item {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 5px 5px 5px 22px;
  }
  }


}
@media (max-width:1023px) {
  .list{
    width: 101%;
    padding: 10px 0;
    &__item {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 5px 5px 5px 15px;
  }
  }
}
@media (max-width:767px) {
  .list {
    width: 100.6%;
  }
}
</style>