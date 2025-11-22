<script setup>
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

const handleDeleteModal = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleDeleteModal);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleDeleteModal);
});
</script>

<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">確定刪除?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">您確定要刪除此筆記嗎？</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal">取消</button>
          <button
            class="button is-danger"
            @click="storeNotes.deleteNote(noteId)"
          >
            刪除
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
