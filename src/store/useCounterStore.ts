import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// export const useSearchMoviesStore = defineStore('counter', () => {
  // const count = ref(0)
  // const name = ref('Eduardo')
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, name, doubleCount, increment }
// })
export type RootState = {
  searchMovieName: string
}

export const useSearchMoviesStore = defineStore({
  id: 'searchMovies',
  state: () => ({
    searchMovieName: ''
  } as RootState),

  actions: {
    setSearchMovieName(movieName: string) {
      this.searchMovieName = movieName
    },
  }
})