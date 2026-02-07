<template>
    <div>
      <h1>JSON Placeholder API Demo</h1>
  
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
  
      <h3>Posts</h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }} (ID: {{ post.id }})
        </li>
      </ul>
  
      <h3>Add New Post</h3>
      <form @submit.prevent="addPost">
        <input type="text" v-model="newPost.title" placeholder="Title" required><br>
        <textarea v-model="newPost.body" placeholder="Body" required></textarea><br>
        <button type="submit">Add Post</button>
      </form>
    </div>
  </template>
  
<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(false);
const error = ref(null);
const newPost = reactive({ title: '', body: '' });

const fetchPosts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const addPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    posts.value.push(response.data); // Add to the list
    newPost.title = ''; // Clear form
    newPost.body = '';
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(fetchPosts);
</script>
