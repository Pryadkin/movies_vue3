<script setup lang='ts'>
import { defineComponent, ref } from 'vue'
import { NPagination } from 'naive-ui'

const page = ref(2)
</script>

<template>
  <div class="search-container">
      <n-pagination v-model:page="page" :page-count="100" :page-slot="10" />
  </div>
</template>

<style type="scss">
.n-pagination {
  justify-content: center;
  margin-top: 20px;
}
</style>
