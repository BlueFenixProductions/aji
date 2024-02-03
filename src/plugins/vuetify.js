/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

//colors
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1,
          secondary: colors.grey.darken2,
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.red.lighten1,
          secondary: colors.grey.lighten2,
        },
      },
    },
  },
})
