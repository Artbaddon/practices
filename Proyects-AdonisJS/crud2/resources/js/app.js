import { createApp } from 'vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import 'vuetify/styles'
import 'bootstrap/dist/css/bootstrap.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Products from './components/Products.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp()
app.use(vuetify)
app.component('Products', Products) // Register the Products component
app.use(mdi)
app.mount('#app')
