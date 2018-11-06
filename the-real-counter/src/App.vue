<template>
  <v-app>
    <div id="app md-layout">
      <div class="md-layout-item-30"></div>
      <div class="md-layout-item">
        <p>Home Page</p>
        <count-item-list></count-item-list>
      </div>
      <div class="md-layout-item-30"></div>
    </div>
  </v-app>
</template>

<script>
import CountItemList from './components/CountItemList.vue'


export default {
  name: 'app',
  components: {
    CountItemList
  }
}
</script>
<style lang="scss">
  @import './scss/_colors.scss';
  
  .main{
    font-family: 'Open Sans', sans-serif;
    background-color: $color-background;
  }
</style>
