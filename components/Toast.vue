<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ message: string }>();
</script>

<style scoped>
div {
  position: absolute;
  display: flex;
  color: #ffffff;
  background-color: #b72c2c;
  bottom: 2rem;
  right: 2rem;
  min-height: 3rem;
  min-width: 15rem;
  max-width: 25rem;
  z-index: 11;
}
</style>
