
<template>
  <section id="stack" class="stack">
    <h2 class="stack__title">Stack técnico</h2>
    <span class="stack__divider"></span>
    <div class="stack__grid">
      <article v-for="group in stack" :key="group.category" class="stack__card">
        <h3 class="stack__category">{{ group.category }}</h3>
        <ul class="stack__list">
          <li v-for="item in group.items" :key="item.name" class="stack__chip">
            <!-- Solo mostramos el icono si la tecnologia tiene uno -->
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
// Stack tecnico por categoria. Cada item puede tener un icono de Devicon.
// Si 'icon' esta vacio, solo se muestra el nombre.
const stack = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue 3', icon: 'devicon-vuejs-plain colored' },
      { name: 'Nuxt 3', icon: 'devicon-nuxtjs-plain colored' },
      { name: 'Pinia', icon: '' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'REST APIs', icon: '' },
      { name: 'Joi', icon: '' },
    ],
  },
  {
    category: 'Base de datos',
    items: [
      { name: 'Firebase Firestore', icon: 'devicon-firebase-plain colored' },
    ],
  },
  {
    category: 'Infraestructura',
    items: [
      { name: 'Google Cloud Platform', icon: 'devicon-googlecloud-plain colored' },
    ],
  },
  {
    category: 'Tiempo real',
    items: [
      { name: 'Server-Sent Events (SSE)', icon: '' },
    ],
  },
  {
    category: 'Versionado',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-plain' },
    ],
  },
]
</script>

<style scoped>
.stack {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
}
.stack__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 16px;
}
.stack__divider {
  display: block;
  width: 60px;
  height: 4px;
  margin: 0 auto 48px;
  border-radius: 2px;
  background: var(--color-accent);
}
.stack__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
.stack__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow);
  text-align: left;
}
.stack__category {
  margin: 0 0 16px;
  font-size: 1.1rem;
  color: var(--color-accent);
}
.stack__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.stack__chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.9rem;
  color: var(--color-text);
}
.stack__chip i {
  font-size: 1.2rem;
}
</style>
