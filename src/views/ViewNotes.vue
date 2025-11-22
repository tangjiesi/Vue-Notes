<script setup>
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

useWatchCharacters(newNote);
</script>

<template>
  <div class="notes">
    <AddEditNote
      v-model:content="newNote"
      placeholder="新增筆記吧"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          新增筆記
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    ></progress>

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        沒有筆記...
      </div>
    </template>
  </div>
</template>
