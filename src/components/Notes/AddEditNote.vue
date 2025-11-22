<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

// const props = defineProps({
//   modelValue: {
//     type: String,
//     required: true,
//   },
// });

// const emit = defineEmits(["update:modelValue"]);

const content = defineModel("content", { required: true });
const props = defineProps({
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});
const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({ focusTextarea });
</script>

<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          v-model="content"
          class="textarea"
          :placeholder="placeholder"
          maxlength="100"
          ref="textareaRef"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
