<template>
    <div v-on:click="countClicks">
      <h2>{{ name }}</h2>  
      <p>{{ message }}</p>
      <p id="red">I like WEBPROG {{ clicks }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'WEBPROG',
        message: 'I like WEBPROG',
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
  
  <style>
    #red {
      font-weight: bold ;
      color: rgb(144, 12, 12);
    }
  </style>