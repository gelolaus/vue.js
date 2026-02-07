<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong>: {{ comment.body }}
      </li>
    </ul>
  </template>
  
  <script></script>
  
  <style>
    #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
  </style>

<script setup>
import { ref, onMounted } from 'vue'
import { getComments as fetchComments } from '../lib/apiClient'

const comments = ref([])

async function loadComments() {
  try {
    const data = await fetchComments()
    comments.value = data
  } catch (error) {
    console.error('Failed to load comments:', error)
  }
}

onMounted(() => {
  loadComments()
})

</script>


<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>