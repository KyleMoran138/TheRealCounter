<template>
  <div class="count-item-list">
    <count-item v-bind:key="listItem.name" v-for="listItem in listItems" :ItemName="listItem.name" :Count="listItem.count"></count-item>
  </div>
</template>

<script>
import CountItem from './CountItem.vue'

export default {
  name: 'CountItemList',
  components: {
    CountItem,
  },
  data: () => {
    return {
      listItems: [
        {name: "event", count: 0},
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.count-item-list{
  display: flex;
  flex-wrap: wrap;
}
</style>
