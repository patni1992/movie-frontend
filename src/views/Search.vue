<template>
  <div class="search">
    <h2>search</h2>
    <div class="wrapper">
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
export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movies: []
    };
  },
  name: "Search",
  mounted() {
    this.$api.get("/tv-shows").then(resp => {
      console.log(resp.data.data);
      this.movies = resp.data.data;
    });
  }
};
</script>

<style scoped>
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
</style>
