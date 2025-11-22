<script setup>
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { RouterLink } from "vue-router";
import { useDateFormat } from "@vueuse/core";
import ModalDeleteNote from "./ModalDeleteNote.vue";

const storeNotes = useStoreNotes();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

const modals = reactive({
  deleteNote: false,
});

const dataFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  return useDateFormat(date, "MM-DD-YYYY @ HH:mm");
});
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dataFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item"
        >編輯</RouterLink
      >
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item has-text-danger"
        >刪除</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>
