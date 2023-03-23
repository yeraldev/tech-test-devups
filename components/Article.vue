<template>
  <div class="card">
    <img class="card-img" :src="article.image" :alt="article.title" />
    <div class="card-text">
      <h3 class="card-title">{{ article.title }}</h3>
      <p class="card-content">{{ article.content }}</p>
      <p class="card-link">VER MÁS</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IArticle } from "utils/models";
defineProps<{ article: IArticle }>();
</script>

<style scoped>
.card,
.card-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-text {
  padding: 1rem;
}
.card-img {
  opacity: 0.75;
}
.card-content {
  font-size: 0.9rem;
}
.card-link {
  color: #d8ad3d;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
}

.card:hover .card-img {
  opacity: 1;
}
.card:hover .card-title {
  color: #d8ad3d;
}
.card:hover .card-link {
  /* visibility: visible; */
  opacity: 1;
}
</style>
