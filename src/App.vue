<template>
  <div @click.self.stop="out()" class="container">
    <header class="header">
      <div class="header__top">
        <img class="header__logo" src="./assets/logo.svg" alt="logo" />
        <button @click="store.darkM = !store.darkM" class="header__btn"><img src="./assets/mode-selector.svg"
            alt=""></button>
      </div>
      <nav class="nav">
        <input class="nav__input" placeholder="Name" v-model="store.fName">
        <testSelect class="nav__select" :placeholder="'Author'" :model="store.fAuthor" :items="store.authorName">
        </testSelect>
        <testSelect class="nav__select" :placeholder="'Location'" :model="store.fLocation" :items="store.locationName">
        </testSelect>
        <!-- <v-select variant="outlined" v-model="store.fAuthor" label="Select"
          :items="store.authorName"></v-select> -->
        <!-- <v-select variant="outlined" v-model="store.fLocation[0]" label="Select"
          :items="store.locationName"></v-select> -->
        <timeSelect class="nav__select" :time="store.fTime"></timeSelect>
      </nav>
    </header>
    <!-- <TransitionGroup tag="main" name="main" class="main"> -->
    <main @click="out()" class="main">
      <card class="card-test" :key="one.id" v-for="(one, i) of store.pics" :index="i" :info="one"></card>
    </main>
    <!-- </TransitionGroup> -->
    <footer class="footer">
      <button :class="['footer__btn', 'footer__btn__minus__minus', { 'footer__btn__disable': store.page === 0 }]"
        @click="store.page = 0, to()">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z" />
        </svg>
      </button>
      <button :class="['footer__btn', 'footer__btn__minus', { 'footer__btn__disable': store.page === 0 }]"
        @click="store.page > 0 ? store.page -= 1 : null, to()">
        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z" />
        </svg>
      </button>
      <button :class="['footer__btn', { 'footer__btn__active': store.page === one - 1 }]"
        @click="store.page = one - 1, to()" v-for="one of store.maxPage">{{ one }}</button>
      <button :class="['footer__btn', 'footer__btn__plus', { 'footer__btn__disable': store.page === store.maxPage - 1 }]"
        @click="store.page < store.maxPage - 1 ? store.page += 1 : null, to()">
        <svg style="rotate: 180deg;" width="9" height="13" viewBox="0 0 9 13" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z" />
        </svg>
      </button>
      <button
        :class="['footer__btn', 'footer__btn__plus__plus', { 'footer__btn__disable': store.page === store.maxPage - 1 }]"
        @click="store.page = store.maxPage - 1, to()">
        <svg style="rotate: 180deg;" width="14" height="13" viewBox="0 0 14 13" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z" />
        </svg>
      </button>
    </footer>

  </div>
</template>

<script>
import { TransitionGroup } from 'vue'
import timeSelect from './timeSelect.vue'
import store from './store'
import card from './card.vue'
import testSelect from './testSelect.vue'
export default {
  data() {
    return {
      store: store()
    }
  },
  methods: {
    out() {
      this.store.out = !this.store.out
    },
    to() {
      this.store.fTime.start = ''
      this.store.fTime.end = ''
      this.store.fName = ''
      const raw = [this.store.fAuthor, this.store.fLocation]
      raw.forEach((item) => item[0] = '')
    }
  },
  created() {
    this.axios
      .get('https://test-front.framework.team/paintings?_page=1&_limit=12')
      .then((res) => (this.store.pics = res.data))
    this.axios
      .get('https://test-front.framework.team/authors')
      .then((res) => (this.store.author = res.data))
    this.axios
      .get('https://test-front.framework.team/locations')
      .then((res) => (this.store.locations = res.data))
  },
  components: {
    card,
    TransitionGroup,
    timeSelect,
    testSelect
  },
  watch: {
    'store.fName'() {
      this.store.fAuthor[0] = ''
      this.store.fLocation[0] = ''
      this.store.fTime.start = ''
      this.store.fTime.end = ''
      this.axios
        .get('https://test-front.framework.team/paintings?name=' + this.store.fName)
        .then((res) => (this.store.pics = res.data))
      if (this.store.fName === '') {
        this.axios
          .get(`https://test-front.framework.team/paintings?_page=${this.store.page + 1}&_limit=12`)
          .then((res) => (this.store.pics = res.data))
      }
    },
    'store.fAuthor': {
      handler() {
        if (this.store.fAuthor[0] == '') {
          this.axios
            .get(`https://test-front.framework.team/paintings?_page=${this.store.page + 1}&_limit=12`)
            .then((res) => (this.store.pics = res.data))
        }
        if (this.store.fAuthor[0] != '') {
          this.store.fName = ''
          this.store.fLocation[0] = ''
          this.store.fTime.start = ''
          this.store.fTime.end = ''
          console.log(this.store.fAuthor[0])
          this.axios
            .get('https://test-front.framework.team/paintings?authorId=' + this.store.authorId)
            .then((res) => (this.store.pics = res.data))
        }
      },
      deep: true
    },
    'store.fLocation': {
      handler() {
        if (this.store.fAuthor[0] == '') {
          this.axios
            .get(`https://test-front.framework.team/paintings?_page=${this.store.page + 1}&_limit=12`)
            .then((res) => (this.store.pics = res.data))
        }
        if (this.store.fLocation[0] != '') {
          this.store.fAuthor[0] = ''
          this.store.fName = ''
          this.store.fTime.start = ''
          this.store.fTime.end = ''
          console.log(this.store.fLocation[0])
          this.axios
            .get('https://test-front.framework.team/paintings?locationId=' + this.store.locationId)
            .then((res) => (this.store.pics = res.data))
        }
      },
      deep: true
    },
    'store.fTime': {
      handler() {
        if ((this.store.fTime.start == 0 || this.store.fTime.end == 0)){
          this.axios
            .get(`https://test-front.framework.team/paintings?_page=${this.store.page + 1}&_limit=12`)
            .then((res) => (this.store.pics = res.data))
        }
        if (this.store.fTime.start != 0 || this.store.fTime.end != 0) {
          this.store.fAuthor[0] = ''
          this.store.fName = ''
          this.store.fLocation[0] = ''
          this.axios
            .get(`https://test-front.framework.team/paintings?created_gte=${this.store.fTime.start}&created_lte=${this.store.fTime.end}` + this.store.locationId)
            .then((res) => (this.store.pics = res.data))
        }
      },
      deep: true
    },
    'store.darkM'() {
      document.querySelector('html').classList.toggle('dark-mode')
    },
    'store.out'() {
      console.log('sef')
    },
    'store.page'() {
      this.axios
        .get(`https://test-front.framework.team/paintings?_page=${this.store.page + 1}&_limit=12`)
        .then((res) => (this.store.pics = res.data))
    }

  },

}
</script>


