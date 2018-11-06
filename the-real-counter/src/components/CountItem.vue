<template>
  <div class="count-card">
    <p class="name">{{ItemName}}</p>
    <div>
      <span></span>
      <button v-on:click="Count++" icons>
        <span>+</span>
      </button>
      <span></span>
    </div>
    {{Count}}
    <div>
      <span></span>
      <button v-on:click="Count--" icons>
        <span>-</span>
      </button>
      <span></span>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'CountItem',
  props: {
    ItemName: String,
    Count: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../scss/_colors.scss';

  .count-card{
    //Content
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

    //Spacing
    width: 5em;
    padding: 0.5em 0.25em;
    border-radius: 0.25em;
    margin: 0em 1em 1em 0em;

    //Style
    background-color: $color-card;
    max-width: 150px;

    .name{
      padding: 0px;
      margin: 0px;
      font-weight: 600;
    }

    button{
      width: 0.25em;
      border-radius: 1em;
    }

    ::last-child{
      margin-bottom: 0px;
    }
    
  }
</style>
