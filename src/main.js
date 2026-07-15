import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

// Guardamos la instancia de la app en una variable
const app = createApp(App)

// Registramos el plugin de particulas y cargamos el motor (slim)
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

// Montamos SOLO al final, cuando ya esta todo registrado
app.mount('#app')
