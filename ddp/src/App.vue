<template>
  <div class="bg-secondary">
    <header-component />
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>