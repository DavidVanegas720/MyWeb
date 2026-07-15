
<template>
  <section id="experiencia" class="experience">
    <h2 class="experience__title">Experiencia</h2>
    <span class="experience__divider"></span>

    <div class="experience__job">
      <div class="experience__role">
        <h3>{{ job.role }}</h3>
        <p class="experience__company">{{ job.company }}</p>
      </div>
      <div class="experience__meta">
        <span>{{ job.period }}</span>
        <span>{{ job.location }}</span>
      </div>
    </div>

    <div class="experience__grid">
      <article v-for="mod in modules" :key="mod.name" class="module">
        <h4 class="module__name">{{ mod.name }}</h4>
        <p class="module__description">{{ mod.description }}</p>
        <ul class="module__tech">
          <li v-for="t in mod.tech" :key="t">{{ t }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
// Experiencia profesional. Encabezado del puesto + tarjetas por modulo.
const job = {
  role: 'Desarrollador Full Stack',
  company: 'Clase Alpha SAS',
  period: 'Jul 2025 — Jun 2026',
  location: 'Medellín · Híbrido',
}

const modules = [
  {
    name: 'Sistevot — Asambleas mixtas',
    description:
      'Módulo de asambleas mixtas de una plataforma de votación electrónica. Gestiona reuniones presenciales y virtuales de forma simultánea, con sincronización en tiempo real (SSE), endpoints REST validados con Joi y credenciales mediante QR.',
    tech: ['Vue 3', 'Nuxt 3', 'Pinia', 'Node.js', 'Firebase', 'SSE', 'GCP'],
  },
  {
    name: 'Sistema POS de ventas',
    description:
      'Punto de venta con gestión de negocios y roles (administrador/cajero): control de productos e inventario en tiempo real, apertura y cierre de caja con verificación de descuadres, y gestión de mesas para servicio en mesa.',
    tech: ['Vue 3', 'Nuxt 3', 'Pinia', 'Node.js', 'Firebase'],
  },
  {
    name: 'Inventarios fijos',
    description:
      'Módulo para el control de activos internos de la empresa: gestión de los activos que permanecen dentro de las instalaciones.',
    tech: ['Vue 3', 'Nuxt 3', 'Node.js', 'Firebase'],
  },
]
</script>

<style scoped>
.experience {
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
}
.experience__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 16px;
}
.experience__divider {
  display: block;
  width: 60px;
  height: 4px;
  margin: 0 auto 48px;
  border-radius: 2px;
  background: var(--color-accent);
}
.experience__job {
  max-width: 900px;
  margin: 0 auto 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  text-align: left;
}
.experience__role h3 {
  margin: 0;
  font-size: 1.3rem;
}
.experience__company {
  margin: 4px 0 0;
  color: var(--color-accent);
  font-weight: 600;
}
.experience__meta {
  display: flex;
  flex-direction: column;
  text-align: right;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
.experience__grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.module {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  box-shadow: var(--shadow);
}
.module__name {
  margin: 0 0 12px;
  font-size: 1.1rem;
}
.module__description {
  margin: 0 0 16px;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
.module__tech {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.module__tech li {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

/* En movil, la fecha/ubicacion se alinea a la izquierda */
@media (max-width: 560px) {
  .experience__meta {
    text-align: left;
  }
}
</style>
