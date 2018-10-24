<template>
  <p>{{ItemName}}: {{Count}} <span v-on:click="Count++">+</span> <span v-on:click="Count--">-</span> </p>
</template>

<script>
export default {
  name: 'CountItem',
  props: {
    ItemName: String,
    Count: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
