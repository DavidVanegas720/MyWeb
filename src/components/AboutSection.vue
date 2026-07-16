<template>
    <section class="about" id="sobre-mi">
        <h2 class="about__title">Sobre mi</h2>
        <span class="about__divider"></span>
        <div class="about__content">
            <p>
                Desarrollador Full Stack junior con experiencia en
                <strong>Vue 3, Nuxt 3, Node.js y Firebase</strong>, cómodo trabajando tanto
                en frontend como en backend. Integro APIs REST, bases de datos en tiempo
                real y despliegue en la nube para construir soluciones funcionales de
                principio a fin.
            </p>
            <p>
                Soy metódico para diagnosticar y resolver problemas antes de escribir código
                —un hábito que traigo de mis años como técnico automotriz— y me adapto
                rápido a nuevas tecnologías.
            </p>
        </div>

    </section>
</template>

<script setup>
// Seccion "Sobre mi": perfil profesional resumido del CV
</script>

<style scoped>
.about {
    max-width: 760px;
    margin: 0 auto;
    padding: 48px 24px 80px;
    text-align: center;
}

.about__title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 16px;
}

/* Linea para decorar abajo del titulo*/
.about__divider {
    display: block;
    width: 60px;
    height: 4px;
    margin: 0 auto 32px;
    border-radius: 2px;
    background: var(--color-accent);
}

.about__content p {
    color: var(--color-text-muted);
    font-size: 1.15rem;
    line-height: 1.7;
    margin: 0 0 20px;
}

.about__content strong {
    color: var(--color-accent);
    font-weight: 600;
}
</style>