<template>
  <div class="home">
    <app-sidebar class="sidebar">

      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </app-sidebar>
    <div class="container">
      <div class="row">
        <div class="col-12">
          Test
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppSidebar from '../components/sidebar/AppSidebar';

export default {
  name: 'Home',
  components: { AppSidebar },
};
</script>


<style lang="scss">
  @import "../main.scss";

</style>
