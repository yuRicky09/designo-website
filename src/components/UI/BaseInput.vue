<template>
  <div class="relative my-5">
    <input v-model="inputValue" :type="type" class="peer" />
    <label
      class="pointer-events-none absolute bottom-8 left-2 font-medium text-stone-200 transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-xs"
      :class="{
        '-translate-y-8 text-xs': !!inputValue,
        'text-green-600': meta.valid && meta.dirty,
        'text-red-500': !!errorMessage,
      }"
      >{{ label }}</label
    >
    <div
      class="bg-lightGray mb-1 h-[2px] transition-colors duration-500"
      :class="{
        'bg-green-600': meta.valid && meta.dirty,
        'bg-red-500': !!errorMessage,
      }"
    ></div>
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
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
});

const {
  value: inputValue,
  errorMessage,
  meta,
} = useField(props.name, undefined, {
  initialValue: props.value,
});
</script>
