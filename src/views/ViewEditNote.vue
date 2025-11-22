<script setup>
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();

const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>

<template>
  <AddEditNote
    v-model:content="noteContent"
    ref="addEditNoteRef"
    bgColor="link"
    label="編輯筆記"
  >
    <template #buttons>
      <button @click="$router.back()" class="button is-link is-light mr-2">
        取消
      </button>
      <button
        @click="handleSaveClicked"
        class="button is-link has-background-link"
        :disabled="!noteContent"
      >
        儲存
      </button>
    </template>
  </AddEditNote>
</template>
