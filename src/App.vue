<script setup lang="ts">
  import LayoutHeader from './components/Header/Header.vue'
  import { NButton } from 'naive-ui'
  
  import './styles/global.scss'
</script>

<template>
  <div class="container">
    <layout-header />
    <div class="content">
      <router-view />
      <NButton />
    </div>
  </div>
</template>


<style scoped>

</style>
