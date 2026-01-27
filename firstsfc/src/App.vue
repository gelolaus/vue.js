<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <h1>Food Items</h1>
  <food-item/>
  <food-item/>
  <food-item/>
  <food-item/>
  <food-item/>
  <food-item/>
  <food-item2/>
  <food-item2/>
  <food-item2/>
  <food-item2/>
  <food-item2/>
  <food-item2/>

  <comment-form/>
  <comment/>

  <h1>Instruments</h1>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>

<style> </style>