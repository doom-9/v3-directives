# Introduce

### Prevent continuous execution of incoming callbacks

# Example

<script setup>
const handle = () => {
  window.alert('I was executed')
}
</script>

<button v-debounce:click-1000="handle">Quick click on me</button>

# Code

```html
<script setup lang="ts">
  const handle = () => {
    window.alert('I was executed')
  }
</script>

<template>
  <button v-debounce:click-1000="handle">Quick click on me</button>
</template>
```
