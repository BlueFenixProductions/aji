<template>
  <v-container class="fill-height">
    <v-sheet class="align-center text-center w-100 fill-height rounded">
      <v-theme-provider v-if="theme.global.name.value === 'dark'">
        <v-img max-height="220" src="@/assets/aji_logo_dark.png" />
      </v-theme-provider>
      <v-theme-provider v-else>
        <v-img max-height="220" src="@/assets/aji_logo_light.png" />
      </v-theme-provider>

      <div class="text-body-2 font-weight-light mb-1 text-overline">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">AJI's Roofing TX</h1>

      <v-divider class="my-6" />

      <blockquote class="text-h4 font-weight-light">
        Your local area roof company
      </blockquote>

      <div class="my-2 text-body-1 font-weight-light text-primary">Insurance Claims Specialist</div>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn min-width="164" size="x-large" variant="text" href="#gallery">
            <v-icon icon="mdi-image-multiple" size="large" start />

            Free Estimates
          </v-btn>
          <v-btn color="primary" href="mailto:info@ajiroofingtx.com" min-width="228" size="x-large" variant="elevated">
            <v-icon icon="mdi-home-roof" size="large" start />

            Get A Quote
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn href="javascript:void(0)" min-width="164" variant="text">
            <v-icon icon="mdi-book-lock-outline" size="large" start />

            Insured & Bonded
          </v-btn>
        </v-col>
      </v-row>

      <hr class="my-6">

      <a name="gallery" />
      <v-card class="my-6">
        <v-img src="@/assets/dji_fly_20230808.gif" />
      </v-card>

      <v-row class="mx-auto">
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20230906.jpg" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20231206.jpg" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20231206_done.jpg" />
        </v-col>
      </v-row>

      <v-row class="mx-auto">
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20240129.jpg" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20240102.jpg" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/dji_fly_20240201.jpg" />
        </v-col>
      </v-row>

      <v-bottom-navigation color="primary">
        <v-btn icon href="tel:8322583165">
          <v-icon>mdi-phone</v-icon>
          Call James
        </v-btn>
        <v-btn icon href="tel:8322499140">
          <v-icon>mdi-phone</v-icon>
          Call Victor
        </v-btn>
      </v-bottom-navigation>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify/lib/framework.mjs'

const theme = useTheme()

const openGallery = () => {
  alert('Gallery coming soon!')
}
</script>