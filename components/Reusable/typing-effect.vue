<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps<{word: string}>()
const words = [props.word];
const displayText = ref("");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const updateText = () => {
  const currentWord = words[wordIndex];
  displayText.value = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    // isDeleting = !isDeleting;
    // if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(updateText, 100);
};

onMounted(updateText);
</script>

<template>
  <span class="text-white">
    {{ displayText }}<span class="md:animate-blink">|</span>
  </span>
</template>

<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.animate-blink {
  animation: blink 1s infinite;
}
</style>
