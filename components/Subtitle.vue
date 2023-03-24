<template>
  <div class="subtitle-wrapper">
    <h2 class="subtitle-text pf">
      <em>
        {{ text }}
      </em>
    </h2>
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
  font-size: 500;
  text-align: center;
  z-index: 1;
}
.subtitle-text::after {
  content: "";
  position: absolute;
  bottom: -70%;
  height: 100%;
  width: 100%;
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
}
</style>
