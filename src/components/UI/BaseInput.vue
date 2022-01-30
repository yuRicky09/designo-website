<template>
  <div class="relative my-5">
    <input v-model="inputValue" :type="type" class="peer" />
    <label
      class="absolute bottom-8 left-2 text-stone-200 font-medium transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-xs pointer-events-none"
      :class="{
        '-translate-y-8 text-xs': !!inputValue,
        'text-green-600': meta.valid && meta.dirty,
        'text-red-500': !!errorMessage,
      }"
      >{{ label }}</label
    >
    <div
      class="h-[2px] bg-lightGray transition-colors duration-500 mb-1"
      :class="{
        'bg-green-600': meta.valid && meta.dirty,
        'bg-red-500': !!errorMessage,
      }"
    ></div>
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
