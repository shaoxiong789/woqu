<template>
  <div class="wqFrame">
    <header-component></header-component>
    <div class="wqFrame-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './common/Header.vue'

export default {
  name: 'Main',
  components: {
    'header-component': Header
  }
}
</script>
