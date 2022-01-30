<template>
  <div>
    <textarea
      id="message"
      v-model="inputValue"
      rows="5"
      placeholder="Your message"
      class="bg-stone-600/10 placeholder:text-stone-200 rounded-lg resize-none"
    ></textarea>
    <span
      class="flex gap-2 h-[1.5rem] w-full text-red-500 font-bold text-left"
      :class="{ invisible: !errorMessage, visible: errorMessage }"
      ><ErrorIcon />
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import ErrorIcon from "@/assets/contact/desktop/icon-error.svg";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const { value: inputValue, errorMessage } = useField(props.name, undefined, {
  initialValue: "",
});
</script>
