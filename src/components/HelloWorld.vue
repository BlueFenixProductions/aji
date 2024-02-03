<template>
  <v-container class="fill-height">
    <v-sheet class="text-center fill-height mx-auto">
      <v-img max-height="220" src="@/assets/home-roof.svg" />

      <div class="text-body-2 font-weight-light mb-1 text-overline">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">AJI's Roofing and Construction</h1>

      <v-divider class="my-6" />

      <blockquote class="text-h4 font-weight-light">
        Your local area roof company
      </blockquote>

      <div class="my-2 text-body-1 font-weight-light text-primary">Insurance Claims Specialist</div>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn min-width="164" size="x-large" variant="text" @click="openGallery">
            <v-icon icon="mdi-image-multiple" size="large" start />

            Free Estimates
          </v-btn>
          <v-btn color="primary" href="mailto:ajiroofing@yahoo.com" min-width="228" size="x-large" variant="elevated">
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
      <v-bottom-navigation color="primary">
        <v-btn icon href="tel:8322583165">
          <v-icon>mdi-phone</v-icon>
          Call James
        </v-btn>
      </v-bottom-navigation>
    </v-sheet>
  </v-container>
</template>

<script setup>
const openGallery = () => {
  alert('Gallery coming soon!')
}
</script>