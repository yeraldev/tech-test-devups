<template>
  <div class="subtitle-wrapper">
    <h2 class="subtitle-text pf">{{ text }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

<style scoped>
.subtitle-wrapper {
  display: grid;
  place-content: center;
}
.subtitle-text {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-align: center;
  z-index: 1;
}
.subtitle-text::after {
  content: "";
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  height: 120%;
  width: 130%;
  background-image: url("/assets/brush.png");
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.35;
  z-index: -1;
}
@media (min-width: 600px) {
  .subtitle-wrapper {
    margin-bottom: 2rem;
  }
  .subtitle-text {
    font-size: 2.5rem;
  }
  .subtitle-text::after {
    bottom: -2.5rem;
  }
}
@media (min-width: 900px) {
  .subtitle-text {
    font-size: 3.5rem;
  }
  .subtitle-text::after {
    bottom: -4rem;
  }
}
</style>
