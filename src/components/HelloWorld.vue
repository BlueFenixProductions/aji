<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/home-roof.svg" />

      <div class="text-body-2 font-weight-light mb-n1 text-overline">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">AJI's Roofing and Construction</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="javascript:void(0)"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Free Estimates
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="javascript:void(0)"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-home-roof"
              size="large"
              start
            />

            Get A Quote
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="javascript:void(0)"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-book-lock-outline"
              size="large"
              start
            />

            Insured & Bonded
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
