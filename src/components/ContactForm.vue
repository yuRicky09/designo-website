<template>
  <form @submit="onSubmit">
    <BaseInput name="name" label="Name" />
    <BaseInput name="email" type="email" label="Email" />
    <BaseInput name="phone" type="tel" label="Phone" />
    <BaseTextarea name="message" label="Message" />
    <div class="my-2 md:text-right">
      <button class="btn" :disabled="!meta.valid">Submit</button>
    </div>
  </form>
</template>

<script setup>
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseTextarea from "@/components/UI/BaseTextarea.vue";
import { useForm } from "vee-validate";
import { string as yupString, object as yupObject } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yupObject().shape({
  name: yupString().required().label("Name"),
  email: yupString().required().email().label("Email"),
  phone: yupString()
    .required()
    .matches(phoneRegExp, { message: "Phone number is not valid" })
    .label("Phone"),
  message: yupString().required().label("Message"),
});

const { handleSubmit, meta } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((value, { resetForm }) => {
  alert(`${value.name}, Thank you for getting in touch!`);
  resetForm();
});
</script>
