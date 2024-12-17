<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  name: "Default",
  components: {
    Header,
  },
};
</script>
