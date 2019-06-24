<template>
  <app-layout>
    <div class="search">
      <input
        @keyup="searchQuery($event.target.value)"
        placeholder="search"
        class="search__input"
        type="text"
      />
      <pulse-loader
        :loading="loading"
        color="var(--theme-color)"
        class="spinner"
        size="2rem"
      ></pulse-loader>
    </div>
    <div class="grid-container">
      <movie-card
        class="grid-item"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </app-layout>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import { debounce } from "@/helpers";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import AppLayout from "@/layouts/AppLayout";
export default {
  name: "Search",
  components: {
    MovieCard,
    PulseLoader,
    AppLayout
  },
  data() {
    return {
      movies: [],
      loading: true,
      search: ""
    };
  },
  methods: {
    searchQuery: debounce(function(value) {
      this.fetchMovies(value);
    }, 500),
    fetchMovies(search) {
      this.loading = true;
      this.$api
        .get(search ? `/tv-shows?q=${search} ` : "/tv-shows")
        .then(resp => {
          this.movies = resp.data.data;
          this.loading = false;
        });
    }
  },
  mounted() {
    this.fetchMovies();
  }
};
</script>

<style scoped>
.search {
  text-align: center;
  margin-bottom: 2rem;
}
.search__input {
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 20rem;
  background-color: #f5f7f9;
  border: none;
}
.grid-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
}
.grid-item {
  padding: 0 1.5rem 1.5rem;
  max-width: 12rem;
}

.spinner {
  position: absolute;
  top: 50%;
  left: calc(56%);
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
