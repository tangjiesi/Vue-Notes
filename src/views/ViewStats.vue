<script setup>
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { ref } from "vue";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const storeNotes = useStoreNotes();

const loveNoteballs = ref("");

useWatchCharacters(loveNoteballs, 50);
</script>

<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>統計數據</th>
          <th>數量</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>筆記數量</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>所有字數（包含符號）</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-model="loveNoteballs"
      type="text"
      class="input"
      placeholder="喜歡 Noteballs 嗎??"
      v-autofocus
    />
  </div>
</template>
