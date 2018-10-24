<template>
  <div>
    <div v-for="listItem in listItems">
      <count-item :ItemName="listItem.name" :Count="listItem.count"></count-item>
    </div>
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
        {name: "Oh my goodness", count: 10}
      ],

    }
  }
}
</script>

<style scope>

</style>
