<template>
  <v-app id="inspire">
    <router-view name="menu"></router-view>
    <router-view name="content"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>