<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon>
        <v-switch v-model="theme.global.name.value" inset true-value="dark" false-icon="mdi-weather-night" false-value="light" true-icon="mdi-white-balance-sunny" />
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs'

const theme = useTheme()
</script>
