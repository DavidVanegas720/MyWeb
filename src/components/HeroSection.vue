<template>
  <section class="hero" id="inicio">
    <div class="hero__content">
      <p class="hero__greeting">Hola, soy José David Yepez Vanegas</p>
      <h1 class="hero__title">Desarrollador <span>Full Stack</span></h1>
      <p class="hero__subtitle">
        Desarrollador Full Stack junior especializado en Vue 3, Nuxt 3 y Node.js.
        Construyo aplicaciones web completas, de la interfaz a la sincronización
        en tiempo real.
      </p>
      <a class="hero__cta" :href="`mailto:${email}`">Contáctame</a>
    </div>
    <img class="hero__image" :src="heroImage" alt="Ilustración de José David Yepez Vanegas" />
  </section>
</template>

<script setup>
import heroImage from '../assets/img/imgIcon.png'

const email = 'jdavidvanegas25@gmail.com'
</script>

<style scoped>
.hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}
.hero__content {
  flex: 1;
  max-width: 560px;
}
.hero__greeting {
  color: var(--color-accent);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
}
.hero__title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 700;
  margin: 0 0 20px;
}
.hero__title span {
  color: var(--color-accent);
}
.hero__subtitle {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin: 0 0 32px;
}
.hero__cta {
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-accent-contrast);
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: var(--shadow);
  transition: transform var(--transition), opacity var(--transition);
}
.hero__cta:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}
.hero__image {
  flex: 1;
  max-width: 380px;
  width: 100%;
  height: auto;
}

/* En pantallas pequenas: apilar y centrar */
@media (max-width: 768px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 24px 20px 60px;
    min-height: auto;
  }
  .hero__image {
    max-width: 260px;
  }
}
</style>
