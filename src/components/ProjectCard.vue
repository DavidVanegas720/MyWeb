<template>
    <a :href="url" class="card" target="_blank" rel="noopener noreferrer">
        <img class="card__image" :src="image" :alt="`Captura del proyecto ${title}`" />
        <div class="card__body">
            <h3 class="card__title">{{ title }}</h3>
            <p class="card__description">{{ description }}</p>
            <span class="card__link">Ver proyecto</span>
        </div>
    </a>
</template>

<script setup>
// defineProps declara los datos que este componente recibe del padre.
// Cada prop tiene tipo y si es obligatoria, para que Vue avise de errores.
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
})
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    box-shadow: var(--shadow);
    transition: transform var(--transition), border-color var(--transition);
}
.card:hover{
    transform: translateY(-6px);
    border-color: var(--color-accent);
}
.card__image{
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}
.card__body{
    padding: 20px;
    text-align: left;
}
.card__title{
    margin: 0 0 8px;
    font-size: 1.2rem;
}
.card__description{
    margin: 0 0 16px;
    color: var(--color-text-muted);
    font-size: 0.98rem;
    line-height: 1.5;
}
.card__link{
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.95rem;
}
</style>