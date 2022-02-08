<template>
  <div>
    <textarea
      id="message"
      v-model="inputValue"
      rows="5"
      placeholder="Your message"
      class="resize-none rounded-lg bg-stone-600/10 placeholder:text-stone-200"
    ></textarea>
    <span
      class="flex h-[1.5rem] w-full gap-2 text-left font-bold text-red-500"
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
