<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon>
        <v-switch v-model="darkTheme" inset />
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
const darkTheme = ref(false)

</script>
