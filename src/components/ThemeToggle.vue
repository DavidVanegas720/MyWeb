<script setup>
import { useTheme } from './composables/useTheme.js'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'"
  >
    <!-- Icono sol: visible en tema oscuro para cambiar a claro -->
    <svg
      v-if="theme === 'dark'"
      class="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
      />
    </svg>
    <!-- Icono luna: visible en tema claro para cambiar a oscuro -->
    <svg v-else class="icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 8px;
  color: var(--color-text);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: transform var(--transition);
}
.theme-toggle:hover {
  transform: scale(1.05);
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
