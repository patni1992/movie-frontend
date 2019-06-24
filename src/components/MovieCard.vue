<template>
  <div class="movie">
    <div class="movie__rating" :class="getRatingColor(movie.rating)">
      {{ movie.rating }}
    </div>
    <img class="movie__img" :src="movie.image" alt="" />
    <p class="movie__name">{{ movie.name }}</p>
    <div class="movie__categories">
      <span v-for="category in movie.categories" :key="category">
        {{ category }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  methods: {
    getRatingColor(rating) {
      let color = "";
      if (rating < 5) {
        color = "movie__rating--bad";
      } else if (rating < 7) {
        color = "movie__rating--good";
      } else {
        color = "movie__rating--great";
      }

      return color;
    }
  },
  props: {
    movie: Object
  }
};
</script>

<style lang="scss" scoped>
.movie {
  position: relative;
}
.movie__img {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.movie__name {
  margin-top: 5px;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
}
.movie__categories {
  color: #adb3ba;
  margin-top: 0;
  font-size: 9px;
  span:not(:first-child) {
    margin-left: 0.1rem;
  }
}

.movie__rating {
  color: white;
  position: absolute;
  top: -0.5rem;
  right: 0.8rem;
  text-align: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  font-size: 0.6rem;
  justify-content: center;
  align-items: center;

  &--great {
    background: #41a375;
  }

  &--good {
    background: #e1be57;
  }

  &--bad {
    background: #c70d0b;
  }
}
</style>
