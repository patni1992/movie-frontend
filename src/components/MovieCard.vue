<template>
  <div class="movie-card">
    <img class="movie-card__img" :src="movie.image" alt="" />
    <p class="movie-card__name">{{ movie.name }}</p>
    <div class="movie-card__categories">
      <span v-for="category in movie.categories" :key="category">
        {{ category }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object
  }
};
</script>

<style lang="scss" scoped>
.movie-card__img {
  width: 100%;
}
.movie-card__name {
  margin-bottom: 0.5rem;
}
.movie-card__categories {
  font-size: 0.6rem;
  span:not(:first-child) {
    margin-left: 0.3rem;
  }
}
</style>
