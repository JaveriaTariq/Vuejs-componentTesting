<template>
  <button @click="handleClick">
    <slot>Test button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick() {
      // You can add custom logic here for the button click event
      console.log("Button clicked!");
    },
  },
};
</script>
