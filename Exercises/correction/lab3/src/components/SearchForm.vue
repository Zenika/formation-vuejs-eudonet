<template>
  <div class="field">
    <label class="label" for="search-input">Search</label>
    <div class="control">
      <input
        id="search-input"
        class="input"
        type="text"
        placeholder="Game of Thrones, Breaking Bad, ..."
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
})
</script>
