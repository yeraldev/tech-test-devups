<template>
  <button :disabled="disabled">Enviar</button>
</template>

<script setup lang="ts">
defineProps<{ disabled: boolean }>();
</script>

<style scoped>
button {
  padding: 1rem 3rem;
  color: #ffffff;
  font-weight: 700;
  background-color: #d8ad3d;
  border-radius: 3rem;
  outline: none;
  border: none;
}
button:hover {
  background-color: #009cd9;
}
button:disabled {
  background-color: #cfcfcf;
}
</style>
