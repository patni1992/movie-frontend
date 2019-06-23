<template>
  <div>
    <sidebar />
    <div class="content">
      <div class="search">
        <input
          @keyup.enter="submit()"
          v-model="search"
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
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import Sidebar from "@/components/Sidebar";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Search",
  components: {
    MovieCard,
    Sidebar,
    PulseLoader
  },
  data() {
    return {
      movies: [],
      loading: true,
      search: ""
    };
  },
  methods: {
    submit(e) {
      const search = this.search.trim();
      this.fetchMovies(search);
    },
    fetchMovies(search) {
      this.loading = true;
      this.$api
        .get(search ? `/tv-shows?q=${search} ` : "/tv-shows")
        .then(resp => {
          console.log(resp.data.data);
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
  padding: 0.5rem;
  width: 100%;
  max-width: 20rem;
  background-color: #f5f7f9;
  border: none;
}
.content {
  padding-top: 2rem;
  margin-left: var(--sidebar-width);
}
.grid-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.grid-item {
  padding: 0 1.2rem 1.2rem;
  max-width: 9rem;
}

.spinner {
  position: absolute;
  top: 50%;
  left: calc(56%);
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
