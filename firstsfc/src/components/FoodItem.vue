<template>
    <div v-on:click="countClicks">
      <h2>{{ name }}</h2>  
      <p>{{ message }}</p>
      <p id="red">I like {{ name }} {{ clicks }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        default: 'WEBPROG'
      },
      message: {
        type: String,
        default: 'I like WEBPROG'
      }
    },
    data() {
      return {
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    }
  }
  </script>
  
<style scoped>
  div {
    border: solid black 1px;
    border-radius: 12px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: #FFCCCB;
  }

  #red {
    font-weight: bold;
    color: rgb(144, 12, 12);
  }
</style>