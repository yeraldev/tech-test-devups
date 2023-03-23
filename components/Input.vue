<template>
  <label class="input-wrapper">
    <span>{{ field.tag }}</span>
    <input
      :type="field.type"
      :placeholder="field.placeholder"
      :invalid="true"
      v-model="content"
      @input="handler"
    />
  </label>
</template>

<script setup lang="ts">
import { IField } from "~~/utils/models";
defineProps<{ field: IField }>();
const content = ref("");
const emit = defineEmits<{
  (e: "onInput", content: string | number): string | number;
}>();
const handler = () => emit("onInput", content.value);
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
span {
  font-weight: 700;
}
input {
  width: min(100%, 20rem);
  padding: 1rem;
  outline: none;
  border: solid 2px #cfcfcf;
}
input:focus {
  border-color: #d8ad3d;
}
input:invalid {
  color: #b72c2c;
  border-color: #b72c2c;
}
input:disabled {
  color: #cfcfcf;
}
</style>
