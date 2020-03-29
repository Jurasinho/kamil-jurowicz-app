<template>
  <div class="home">
    <app-sidebar class="sidebar">
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
    </app-sidebar>
    <soon-section>

    </soon-section>
  </div>
</template>

<script>

import AppSidebar from '../components/sidebar/AppSidebar';
import SoonSection from '../soon';

export default {
  name: 'Home',
  components: { AppSidebar , SoonSection},
};
</script>


<style lang="scss">
  @import "../main.scss";

</style>
