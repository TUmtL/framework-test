<template>
  <div class="my-select" @click="active = !active">
    <div v-if="active === false">{{ placeholder }}</div>
    <Transition name="activate">
      <div style="transform: translateY();" class="list" v-if="active=== true">
        <p @click=" model.one = one " v-for="one of items">{{ one }}</p>
      </div>
    </Transition>
  </div>
</template>

<script>
import { Transition } from 'vue';

export default {
  props: [
    'model', 'items', 'placeholder'
  ],
  data() {
    return {
      active: false,
      height:''
    }
  },
  components:{
    Transition:Transition
  },

}
</script>

<style>
.my-select {
  cursor: pointer;
}
.activate-enter-from , .activate-leave-to{
  transform: translateY(-90px);
}
.activate-enter-active , .activate-leave-active{
  transition: all 0.3s ease-in-out;
}
.activate-move{
  transition: all 2s ease-in-out;
}

</style>