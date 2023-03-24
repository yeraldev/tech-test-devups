<template>
  <Section>
    <Toast :message="message" v-if="show" />
    <Subtitle text="Contáctanos" />
    <div class="form">
      <div class="form-fields">
        <Input
          v-for="field of fields"
          :key="field.tag"
          :field="field"
          @onInput="(value) => handleValues(field.key, value)"
        />
      </div>
      <div class="form-btn">
        <Button :disabled="false" @click="handleSubmit" />
      </div>
    </div>
  </Section>
</template>
<script lang="ts" setup>
import { IField, ISubscription } from "~~/utils/models";

const message = ref("");
const show = ref(false);
const subs: ISubscription = {
  email: "",
  firstname: "",
  lastname: "",
  phone: NaN,
};

const fields: IField[] = [
  { key: "firstname", placeholder: "Alberto", tag: "NOMBRE", type: "text" },
  { key: "lastname", placeholder: "Rodriguez", tag: "APELLIDO", type: "text" },
  {
    key: "email",
    placeholder: "albertorod@gmail.com",
    tag: "MAIL",
    type: "email",
  },
  { key: "phone", placeholder: "123456789", tag: "TELÉFONO", type: "number" },
];

const handleValues = (key: string, value: string | number) => {
  subs[key] = value;
};

const showMsg = () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
    message.value = "";
  }, 3000);
};

const handleSubmit = () => {
  message.value = validateForm(subs);
  if (message.value !== "") {
    showMsg();
    alert(message.value);
    return;
  }
  setSubscription(subs);
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: min(600px, 100%);
  margin: 0 auto;
}
.form-fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  gap: 2rem;
}
.form-btn {
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 0;
}
</style>
