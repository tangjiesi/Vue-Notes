import { watch } from "vue";

export function useWatchCharacters(isToWatch, maxChars = 100) {
  watch(isToWatch, (newValue) => {
    if (newValue.length === maxChars)
      alert(`Only ${maxChars} characters allowed gosh darnit!`);
  });
}
