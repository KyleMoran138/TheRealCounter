<template>
  <div id="app">
    <p>Home Page</p>
    <count-item-list></count-item-list>
  </div>
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

<style>

</style>
