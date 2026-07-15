<template>
    <header class="navbar">
        <div class="navbar__inner">
            <a href="#inicio" class="navbar__brand">David Vanegas</a>
            <nav class="navbar__links">
                <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
            </nav>
            <ThemeToggle/>
        </div>
    </header>
</template>
<script setup>

    import ThemeToggle from './ThemeToggle.vue'

    //enlaces del menu, cada href aputa al id de una seccion
    const links = [
        {label: 'Sobre mí', href: '#sobre-mi'},
        {label: 'Stack', href: '#stack'},
         { label: 'Experiencia', href: '#experiencia' },
        {label: 'Proyectos', href: '#proyectos'},
        {label: 'Contacto', href: '#contacto'},
    ];

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}
.navbar__brand {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-text);
    text-decoration: none;
    white-space: nowrap;
}
.navbar__brand:hover{
    color: var(--color-accent);
}
.navbar__links {
    display: flex;
    gap: 24px;
}
.navbar__links a {
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color var(--transition);
}
.navbar__links a:hover {
    color: var(--color-accent);
}

/* movil responsive */
@media (max-width: 640px) {
    .navbar__brand{
        display: none;
    }
    .navbar__inner{
        padding: 10px 16px;
        justify-content: center;
        gap: 12px;
    }
    .navbar__links {
        gap: 14px;
    }
    .navbar__links a {
        font-size: 0.85rem;
    };
}

</style>