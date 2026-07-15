<template>
  <vue-particles id="tsparticles" :options="options" />
</template>

<script setup>
// Config unica: las particulas van sobre fondo oscuro en ambos temas,
// asi que usamos el coral claro para que resalten siempre.
const options = {
  fullScreen: { enable: true, zIndex: -1 },
  fpsLimit: 60,
  background: { color: { value: 'transparent' } },
  particles: {
    color: { value: '#d97e6c' },
    links: {
      color: '#d97e6c',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      outModes: { default: 'bounce' },
    },
    number: {
      value: 60,
      density: { enable: true },
    },
    opacity: { value: 0.4 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
}
</script>
