
<template>
  <section id="proyectos" class="projects">
    <h2 class="projects__title">Proyectos</h2>
    <span class="projects__divider"></span>
    <div class="projects__grid">
      <!-- Por cada proyecto creamos una ProjectCard y le pasamos sus props -->
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :url="project.url"
      />
    </div>
  </section>
</template>

<script setup>
// Importamos los datos y el componente tarjeta
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
}
.projects__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 16px;
}
.projects__divider {
  display: block;
  width: 60px;
  height: 4px;
  margin: 0 auto 48px;
  border-radius: 2px;
  background: var(--color-accent);
}
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}
</style>
