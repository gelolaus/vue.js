<template>
    <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="mt-2">
          {{ submissionStatus }}
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { createComment } from '../lib/apiClient'

  
  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);
  
async function submitComment() {
  submissionStatus.value = "Submitting...";
  
  try {
    const commentData = {
      name: name.value,
      body: comment.value,
      email: `${name.value.toLowerCase().replace(/\s+/g, '')}@example.com`,
      postId: 1
    };

    const data = await createComment(commentData);

    console.log('Success! Data:', data);
    submissionStatus.value = "Comment submitted successfully!";
    name.value = ''; // Clear form fields
    comment.value = '';
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    submissionStatus.value = "An unexpected error occurred. Please try again later.";
  }
}
  </script>
  
  <style scoped>
  /* Basic styling - Customize as needed */
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>