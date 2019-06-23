<template>
  <div>
    <sidebar />
    <div class="content">
      <div class="search">
        <input  placeholder="search" class="search__input" type="text" />
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
export default {
  components: {
    MovieCard,
    Sidebar
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
.search {
  text-align: center;
  margin-bottom: 2rem;
}
.search__input {
  padding: 0.5rem;
  width: 100%;
  max-width: 20rem;
  background-color: #F5F7F9;
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
</style>
