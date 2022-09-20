<script setup lang="ts">
import {ref} from 'vue'
import {NInputGroup, NButton, NInput} from 'naive-ui'
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia'
import {useSearchMoviesStore} from '../../store/useCounterStore'

const storeSearchMovies = useSearchMoviesStore()
const movieName = ref('')

const setMovieNameHandler = (name: string) => {
  storeSearchMovies.setSearchMovieName(name)
}
</script>

<template>
  <header class="header">
    <h1 class="logo">Movies</h1>

    <router-link to='/' class="page-link">
      header
    </router-link>

    <router-link to='/search' class="page-link">
      search
    </router-link>

    <n-input-group>
      <n-input
        :style="{ width: '50%' }" 
        v-model:value="movieName"
      />
      <n-button type="primary" @click="setMovieNameHandler(movieName)">
        Search
      </n-button>
    </n-input-group>
  </header>
</template>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #cdb962;
  color: white;
  overflow: hidden;
  text-transform: uppercase;
}

.page-link {
  font-size: 14px;
  padding: 30px;
    &:hover {
      background: #95884d;
    }
}
</style>