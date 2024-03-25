<template>
  <div id="app">
    <headerBlock />
    <router-view />
    <footerBlock />
  </div>
</template>

<script>
import headerBlock from "./components/universal/header.vue";
import footerBlock from "./components/universal/footer.vue";

export default {
  name: "App",
  components: {
    headerBlock,
    footerBlock
  },
  created() {
    this.$router.push({name:"home"})
  }
};
</script>

<style>

</style>
